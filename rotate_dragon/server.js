const express = require("express");
const path = require("path");

const app = express();

// Define the directory where your static files are located
const staticDir = path.join(__dirname, "public");

// Set up middleware to serve static files
app.use(express.static(staticDir));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
