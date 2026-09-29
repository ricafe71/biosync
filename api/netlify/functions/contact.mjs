import nodemailer from "nodemailer";

// Envio do formulário de contato da landing pelo SMTP do Zoho Mail.
//
// Roda como Netlify Function (o GitHub Pages, onde o site fica, não executa
// backend) e também no `npm run dev`, chamada pelo plugin em src/vite.config.js,
// para que desenvolvimento e produção passem pelo mesmo código.
//
// Variáveis: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO e,
// opcional, CONTACT_ALLOWED_ORIGINS (lista separada por vírgula, somada às de baixo).

const ALLOWED_ORIGINS = ["https://biosync.app.br", "https://www.biosync.app.br"];
const LIMITS = { name: 120, email: 200, role: 120, typeLabel: 80, message: 5000 };
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function allowedOrigins(env) {
  const extra = (env.CONTACT_ALLOWED_ORIGINS || "").split(",").map((o) => o.trim()).filter(Boolean);
  return [...ALLOWED_ORIGINS, ...extra];
}

export async function handleContact(req, env) {
  const origin = req.headers.get("origin") || "";
  const allowed = allowedOrigins(env).includes(origin);

  // O cabeçalho CORS vai em toda resposta, inclusive nas de erro: sem ele o
  // navegador descarta a resposta e o formulário só vê um erro de rede genérico.
  const cors = allowed
    ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" }
    : { Vary: "Origin" };
  const json = (status, body) =>
    new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...cors,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
        "Access-Control-Max-Age": "86400",
      },
    });
  }
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });
  if (!allowed) return json(403, { error: "Origin not allowed" });

  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  // Honeypot: campo invisível no formulário. Robô que preenche recebe sucesso
  // e nada é enviado.
  if (body.company) return json(200, { ok: true });

  const field = (key) => String(body[key] ?? "").trim().slice(0, LIMITS[key]);
  const name = field("name");
  const email = field("email");
  const role = field("role");
  const typeLabel = field("typeLabel") || "Contato";
  const message = field("message");

  if (!name) return json(400, { error: "Name is required" });
  if (!EMAIL_RE.test(email)) return json(400, { error: "Invalid email" });

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = env;
  const port = Number(env.SMTP_PORT || 465);
  const from = env.SMTP_FROM || SMTP_USER;
  const to = env.SMTP_TO || "contato@biosync.app.br";
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contato] SMTP não configurado (SMTP_HOST, SMTP_USER, SMTP_PASS)");
    return json(500, { error: "Mail not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[BioSync] ${typeLabel} - ${name}`,
      text: [`Nome: ${name}`, `E-mail: ${email}`, `Cargo: ${role || "-"}`, `Tipo: ${typeLabel}`, "", "Mensagem:", message || "-"].join("\n"),
    });
  } catch (error) {
    console.error("[contato] falha no SMTP:", error);
    return json(502, { error: "Mail delivery failed" });
  }

  return json(200, { ok: true });
}

export default (req) => handleContact(req, process.env);

export const config = { path: "/api/contact" };
