import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface FoodParkProps {
  params: Promise<{ slug: string }>;
}

const FoodPark = async ({ params }: FoodParkProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });
  if (!restaurant) {
    return notFound();
  } //se não há rest, retorna erro
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h3 className="font-semibold">{restaurant.name}</h3>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua bebida. Estamos aqui para lhe
          oferecer praticidade e sabor a cada detalhe!
        </p>
      </div>
      <div className="p4-14 grid grid-cols-2 gap-4">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkQo31KxJ0D7E1aJoPOpKMmF43SruXNdZi2WUH"
        ></ConsumptionMethodOption>
        <ConsumptionMethodOption
          option="TAKEAWAY"
          slug={slug}
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkByKcmradb2qJzoupaZYNPwrQSRg1GlVejU78"
        ></ConsumptionMethodOption>
      </div>
    </div>
  );
};

export default FoodPark;
