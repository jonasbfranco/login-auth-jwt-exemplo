import "dotenv/config";
import express from 'express'
import cors from "cors";
import pool from "./config/db.js";


import authRoutes from "./routes/auth.js";
import usuariosRoutes from "./routes/usuarios.js";
import dashboardRoutes from "./routes/dashboard.js";


const app = express()
const port = process.env.PORT || 3000;


const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN
      .split(",")
      .map(origin => origin.trim())
  : [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://seu-frontend.vercel.app"
  ];

app.use(
  cors({
    origin: allowedOrigins
  })
);


// app.use(cors({ origin: '*' }));


app.use(express.json())


app.get("/api/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch {
    res.status(500).json({ status: "error", database: "disconnected" });
  }
});



app.use("/api/v1/", authRoutes);
app.use("/api/v1/", usuariosRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);


// 404
app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });
});

/* 
app.listen(port, () => {
  console.log(`API executando em http://localhost:${port}`);
}); */

// Inicialização local
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`API executando em http://localhost:${port}`);
  });
}

// Exporta para a Vercel
export default app;