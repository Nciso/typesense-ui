const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Inject environment variables into the page
app.get('/', (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Typesense Viewer</title>
    <link rel="stylesheet" href="css/style-dark.css">
    <script>
        window.TS_SERVER_KEY = '${process.env.TS_SERVER_KEY || "your key here"}';
        window.TS_HOST = '${process.env.TS_HOST || "your ip here"}';
        window.TS_PORT = '${process.env.TS_PORT || "8108"}';
        window.TS_PROTOCOL = '${process.env.TS_PROTOCOL || "http"}';
        window.PAGE_LENGTH = '${process.env.PAGE_LENGTH || "20"}';
        window.USE_DEMO = '${process.env.USE_DEMO || "true"}';
    </script>
  </head>
  <body>
    <app></app>
    <logs></logs>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/typesense@latest/dist/typesense.min.js"></script>
  <script src="js/typesense-api.js"></script>
  <script src="js/vdom.js"></script>
  <script src="js/components.js"></script>
  <script src="js/main.js"></script>
</html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 