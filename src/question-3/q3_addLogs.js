const fs = require("fs").promises;
const path = require("path");

async function addLogs() {
  const logsDir = path.join(process.cwd(), "Logs");

  try {
    await fs.mkdir(logsDir, { recursive: true });
    console.log(`Created/verified directory: ${logsDir}`);
  } catch (err) {
    console.error("Failed to create Logs directory:", err.message);
    process.exit(1);
  }

  process.chdir(logsDir);
  console.log(`Changed working directory to: ${process.cwd()}`);

  const tasks = [];
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const content = `Log file ${i}\nCreated at: ${new Date().toISOString()}\n`;
    tasks.push(
      fs.writeFile(fileName, content).then(() => {
        console.log(`Created ${fileName}`);
      })
    );
  }
  await Promise.all(tasks);
  console.log("All log files created.");
}

addLogs().catch((err) => console.error("Unexpected error:", err));
