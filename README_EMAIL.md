Usage: zip the project and send it by email using SMTP credentials.

Requirements
- Node.js installed
- Run `npm install` to install dependencies (adds `archiver`, `nodemailer`)

Environment variables (create a `.env` file or set in your shell):

- `SMTP_HOST` (e.g., smtp.gmail.com)
- `SMTP_PORT` (e.g., 587)
- `SMTP_USER` (SMTP username — often your email)
- `SMTP_PASS` (SMTP password or app-specific password)
- `FROM_EMAIL` (optional, defaults to `SMTP_USER`)
- `TO_EMAIL` (optional, defaults to `bhuvanesht87@gmail.com`)
- `SMTP_SECURE` (optional, 'true' if using TLS on port 465)

Example `.env`:

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=your_app_password
FROM_EMAIL=you@example.com
TO_EMAIL=bhuvanesht87@gmail.com
SMTP_SECURE=false

Run

```bash
npm install
npm run send:email
```

The script will create `project.zip`, email it, and delete the zip.
