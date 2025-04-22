import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany()
    res.status(200).json(restaurants)
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error)
    res.status(500).json({
      message: 'Erro no servidor',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
