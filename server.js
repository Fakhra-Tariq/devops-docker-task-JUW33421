const http = require("http");

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>DevOps Docker Task</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f0f4f8; display: flex;
           justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: white; padding: 40px; border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15); text-align: center; }
    h1 { color: #2563eb; }
    p { font-size: 18px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>DevOps Docker Task</h1>
    <p><b>Student Name:</b> Fakhra Tariq</p>
    <p><b>Student ID:</b> JUW33421</p>
    <p><b>Course Name:</b> Devops</p>
    <p>This application is running inside a Docker container.</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});