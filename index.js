import express from "express";
const app = express();

// Sample route
app.get("/", (req, res) => {
  res.send("🎉 Persian Carpet API is running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
