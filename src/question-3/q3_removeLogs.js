const fs = require("fs").promises;
const path = require("path");

async function removeLogs() {
  const logsDir = path.join(process.cwd(), "Logs");

  try {
    const stat = await fs.stat(logsDir);
    if (!stat.isDirectory()) {
      console.log("Logs exists but is not a directory — aborting.");
      return;
    }
  } catch {
    console.log("Logs directory does not exist — nothing to remove.");
    return;
  }

  const files = await fs.readdir(logsDir);
  if (files.length === 0) {
    console.log("Logs directory is empty.");
  } else {
    for (const f of files) {
      console.log(`Deleting file: ${f}`);
      await fs.unlink(path.join(logsDir, f));
    }
  }

  await fs.rmdir(logsDir);
  console.log("Removed Logs directory.");
}

removeLogs().catch((err) => console.error("Unexpected error:", err));
