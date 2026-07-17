import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const ZIP_NAME = 'project.zip';

function zipDirectory(sourceDir, outPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve());
    archive.on('warning', err => (err.code === 'ENOENT' ? console.warn(err) : reject(err)));
    archive.on('error', err => reject(err));

    archive.pipe(output);

    // exclude common folders
    archive.glob('**/*', {
      cwd: sourceDir,
      dot: true,
      ignore: ['node_modules/**', '.git/**', '*.zip', 'dist/**', 'server.js']
    });

    archive.finalize();
  });
}

async function sendEmail(zipPath) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.FROM_EMAIL || user;
  const to = process.env.TO_EMAIL || 'bhuvanesht87@gmail.com';

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP_HOST, SMTP_USER or SMTP_PASS in environment');
  }

  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });

  const info = await transporter.sendMail({
    from,
    to,
    subject: `Project archive: ${path.basename(process.cwd())}`,
    text: 'Attached is the project zip.',
    attachments: [
      {
        filename: path.basename(zipPath),
        path: zipPath
      }
    ]
  });

  return info;
}

async function main() {
  try {
    const cwd = process.cwd();
    const zipPath = path.resolve(cwd, ZIP_NAME);

    console.log('Zipping project...');
    await zipDirectory(cwd, zipPath);
    console.log('Zip created:', zipPath);

    console.log('Sending email...');
    const info = await sendEmail(zipPath);
    console.log('Email sent:', info.messageId || info.response);

    try { fs.unlinkSync(zipPath); } catch (e) { /* ignore */ }
    console.log('Done.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
}

main();
