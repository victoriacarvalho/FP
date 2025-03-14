import Image from "next/image";
import Link from "next/link";

import { db } from "@/lib/prisma";

const Home = async () => {
  const restaurants = await db.restaurant.findMany();

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-semibold">Food Park</h3>
        <p className="opacity-55">
          Selecione um restaurante para ver mais detalhes e escolher como deseja aproveitar sua refeição!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-8">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.id} href={`/${restaurant.slug}`}>
            <div className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white">
              <Image
                src={restaurant.avatarImageUrl}
                alt={restaurant.name}
                width={82}
                height={82}
                className="rounded-full border border-gray-400"
              />
              <h3 className="font-semibold text-center">{restaurant.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
