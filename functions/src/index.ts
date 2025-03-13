import { PrismaClient } from "@prisma/client";
import * as functions from "firebase-functions";

const prisma = new PrismaClient();

export const getRestaurants = functions.https.onRequest(async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
    res
      .status(500)
      .json({
        message: "Erro no servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
  }
});
