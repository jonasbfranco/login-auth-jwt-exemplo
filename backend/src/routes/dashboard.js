import express from 'express'
import pool from "../config/db.js";
import { auth } from "../middleware/auth.js";


// import { auth } from "../middleware/auth";

import "dotenv/config";

const router = express.Router();

router.get("/stats", auth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        (SELECT COUNT(*)::int FROM usuarios) AS total_usuarios,
        (SELECT COUNT(*)::int FROM categorias) AS numero_categorias,
        (SELECT COUNT(*)::int FROM usuarios WHERE ativo = 'TRUE') AS usuarios_ativos,
        (SELECT COUNT(*)::int FROM usuarios WHERE ativo = 'FALSE') AS usuarios_inativos`
    );

    return res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao carregar indicadores." });
  } 
});

export default router;

/*

const result = await pool.query(`
    SELECT
        COALESCE(
            ABS(SUM(valor) FILTER (WHERE tipo = 'DESPESA')),
            0
        ) AS despesas,

        COALESCE(
            ABS(
                SUM(valor) FILTER (
                    WHERE tipo = 'DESPESA'
                    AND status = 'PENDENTE'
                )
            ),
            0
        ) AS despesas_pendentes,

        COALESCE(SUM(valor), 0) AS saldo,

        COUNT(*)::int AS transacoes

    FROM transacoes
`);


*/