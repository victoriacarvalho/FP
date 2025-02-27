/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const seedRestaurant = async (tx: any) => {
  await tx.restaurant.deleteMany();
  return await tx.restaurant.create({
    data: {
      name: "Food Park Bar",
      slug: "food-park-Bar",
      description: "O melhor espaço gastronômico da cidade",
      avatarImageUrl: "https://example.com/foodpark-avatar.jpg",
      coverImageUrl: "https://example.com/foodpark-cover.jpg",
    },
  });
};

const seedBatataRealRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "BATATA REAL",
      slug: "batata-real",
      description: "Torres de batata e fritas especiais",
      avatarImageUrl: "https://example.com/batata-real-avatar.jpg",
      coverImageUrl: "https://example.com/batata-real-cover.jpg",
    },
  });
};
const seedAleanzzaRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "Aleanzza",
      slug: "Aleanzza",
      description: "Pizzas artesanais e entradinhas deliciosas",
      avatarImageUrl: "https://example.com/rispetta-la-pizza-avatar.jpg",
      coverImageUrl: "https://example.com/rispetta-la-pizza-cover.jpg",
    },
  });
};

const seedRefriCategory = async (tx: any, restaurantId: string) => {
  const refriCategory = await tx.menuCategory.create({
    data: {
      name: "Refri lata",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Coca-Cola / Zero",
        description: "Refrigerante Coca-Cola gelado.",
        price: 6.0,
        imageUrl: "https://example.com/coca-cola.jpg",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fanta",
        description: "Refrigerante Fanta gelado.",
        price: 6.0,
        imageUrl: "https://example.com/guarana.jpg",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Sprite",
        description: "Refrigerante Sprite gelado.",
        price: 6.0,
        imageUrl: "https://example.com/guarana.jpg",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Guaraná / Zero",
        description: "Refrigerante Guaraná gelado.",
        price: 6.0,
        imageUrl: "https://example.com/guarana.jpg",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Schwepps",
        description: "Refrigerante Schwepps gelado.",
        price: 6.0,
        imageUrl: "https://example.com/guarana.jpg",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedCervejaCategory = async (tx: any, restaurantId: string) => {
  const cervejaCategory = await tx.menuCategory.create({
    data: {
      name: "Cerveja 600ml",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Cerveja Amstel",
        description: "Cerveja Amstel 600ml.",
        price: 13.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Brahma",
        description: "Cerveja Brahma 600ml.",
        price: 13.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Original",
        description: "Cerveja Original 600ml.",
        price: 16.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Spaten",
        description: "Cerveja Spaten 600ml.",
        price: 16.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken",
        description: "Cerveja Heineken 600ml.",
        price: 18.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedLongNeckCategory = async (tx: any, restaurantId: string) => {
  const longNeckCategory = await tx.menuCategory.create({
    data: {
      name: "Cerveja long neck",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Cerveja Original",
        description: "Cerveja Original .",
        price: 8.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Brahma Zero",
        description: "Cerveja Brahma zero álcool.",
        price: 8.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken",
        description: "Cerveja Heineken .",
        price: 12.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken Zero",
        description: "Cerveja Heineken zero álcool.",
        price: 12.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Stella s/ glúten",
        description: "Cerveja Stella s/ glúten .",
        price: 12.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Corona",
        description: "Cerveja Corona .",
        price: 12.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Corona zero",
        description: "Cerveja Corona zero álcool.",
        price: 18.0,
        imageUrl: "https://example.com/heineken.jpg",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedDrinksEspeciaisCategory = async (tx: any, restaurantId: string) => {
  const drinksEspeciaisCategory = await tx.menuCategory.create({
    data: {
      name: "Drinks Especiais",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Sex on the Beach",
        description:
          "Vodka, suco de laranja, licor de pêssego e xarope de groselha.",
        price: 28.0,
        imageUrl: "https://example.com/sex-on-the-beach.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Margarita",
        description: "Tequila, suco de limão, licor de laranja e sal na borda.",
        price: 28.0,
        imageUrl: "https://example.com/margarita.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Pina Colada",
        description: "Rum, leite condensado, leite de coco e suco de abacaxi.",
        price: 28.0,
        imageUrl: "https://example.com/pina-colada.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Maracujack",
        description: "Whisky Jack Daniels, Açúcar e polpa de maracujá.",
        price: 28.0,
        imageUrl: "https://example.com/caipirinha.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Gin Tônica",
        description: "Gin, Tônica e especiarias.",
        price: 28.0,
        imageUrl: "https://example.com/caipirinha.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Gin Tropical",
        description: "Gin, energético tropical e especiarias.",
        price: 28.0,
        imageUrl: "https://example.com/caipirinha.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cozumel",
        description: "Suco de limão, cerveja (Corona / Heineken), sal.",
        price: 28.0,
        imageUrl: "https://example.com/caipirinha.jpg",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedSucosCategory = async (tx: any, restaurantId: string) => {
  const sucosCategory = await tx.menuCategory.create({
    data: {
      name: "Sucos de polpa",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Suco de Manga",
        description: "Suco de manga.",
        price: 12.0,
        imageUrl: "https://example.com/suco-manga.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Uva",
        description: "Suco de Uva.",
        price: 12.0,
        imageUrl: "https://example.com/suco-laranja.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Goiaba",
        description: "Suco de Goiaba.",
        price: 12.0,
        imageUrl: "https://example.com/suco-laranja.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Morango",
        description: "Suco de morango.",
        price: 12.0,
        imageUrl: "https://example.com/suco-morango.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Acerola",
        description: "Suco de Acerola.",
        price: 12.0,
        imageUrl: "https://example.com/suco-laranja.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Maracujá",
        description: "Suco de Maracujá.",
        price: 12.0,
        imageUrl: "https://example.com/suco-laranja.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Manga com morango",
        price: 13.0,
        imageUrl: "https://example.com/suco-detox.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Manga com maracujá",
        price: 13.0,
        imageUrl: "https://example.com/suco-detox.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Morango com maracujá",
        price: 13.0,
        imageUrl: "https://example.com/suco-detox.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Detox",
        description: "Abacaxi, couve, limão, hortelã e gengibre.",
        price: 13.0,
        imageUrl: "https://example.com/suco-detox.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Kids 300ml",
        description: "Manga, uva, goiaba, acerola, morango ou maracujá.",
        price: 12.0,
        imageUrl: "https://example.com/suco-detox.jpg",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedVinhosCategory = async (tx: any, restaurantId: string) => {
  const vinhosCategory = await tx.menuCategory.create({
    data: {
      name: "Vinhos",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Pérgola",
        description: "Vinho tinto suave.",
        price: 48.0,
        imageUrl: "https://example.com/vinho-pergola.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Reservado Concha Y Toro",
        description: "Vinho tinto reservado.",
        price: 58.0,
        imageUrl: "https://example.com/vinho-concha-y-toro.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Atlântico",
        description: "Vinho tinto de alta qualidade.",
        price: 79.0,
        imageUrl: "https://example.com/vinho-atlantico.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Casal Garcia",
        description: "Vinho branco refrescante.",
        price: 85.0,
        imageUrl: "https://example.com/vinho-casal-garcia.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Quinta de Bons Ventos",
        description: "Vinho tinto encorpado.",
        price: 85.0,
        imageUrl: "https://example.com/vinho-quinta-bons-ventos.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cordero Con Piel de Lobo",
        description: "Vinho tinto premium.",
        price: 88.0,
        imageUrl: "https://example.com/vinho-cordero.jpg",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedEspumantesCategory = async (tx: any, restaurantId: string) => {
  const espumantesCategory = await tx.menuCategory.create({
    data: {
      name: "Espumantes",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Garibaldi Rosé",
        description: "Espumante rosé leve e refrescante.",
        price: 78.0,
        imageUrl: "https://example.com/espumante-garibaldi.jpg",
        menuCategoryId: espumantesCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Chandon Brut",
        description: "Espumante brut de alta qualidade.",
        price: 160.0,
        imageUrl: "https://example.com/espumante-chandon.jpg",
        menuCategoryId: espumantesCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedShotsCategory = async (tx: any, restaurantId: string) => {
  const shotsCategory = await tx.menuCategory.create({
    data: {
      name: "Shots",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Licor 43",
        description: "Licor 43 com sabor suave.",
        price: 20.0,
        imageUrl: "https://example.com/licor-43.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Téquila José Cuervo",
        description: "Téquila tradicional mexicana.",
        price: 18.0,
        imageUrl: "https://example.com/tequila-jose-cuervo.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cachaça Seleta",
        description: "Cachaça brasileira de alta qualidade.",
        price: 10.0,
        imageUrl: "https://example.com/cachaca-seleta.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Campari",
        description: "Bitter italiano.",
        price: 10.0,
        imageUrl: "https://example.com/campari.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Smirnoff",
        description: "Vodka Smirnoff.",
        price: 10.0,
        imageUrl: "https://example.com/smirnoff.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Seagers",
        description: "Gin Seagers.",
        price: 10.0,
        imageUrl: "https://example.com/seagers.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Tangueray",
        description: "Gin Tangueray.",
        price: 15.0,
        imageUrl: "https://example.com/tangueray.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Red Label",
        description: "Whisky Red Label.",
        price: 15.0,
        imageUrl: "https://example.com/red-label.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Black Label",
        description: "Whisky Black Label.",
        price: 20.0,
        imageUrl: "https://example.com/black-label.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Jack Daniels",
        description: "Whisky Jack Daniels.",
        price: 20.0,
        imageUrl: "https://example.com/jack-daniels.jpg",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedOutrosCategory = async (tx: any, restaurantId: string) => {
  const outrosCategory = await tx.menuCategory.create({
    data: {
      name: "Outros",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Água",
        description: "Água mineral sem gás.",
        price: 5.0,
        imageUrl: "https://example.com/agua.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água com Gás",
        description: "Água mineral com gás.",
        price: 5.0,
        imageUrl: "https://example.com/agua-com-gas.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água de Coco Integral",
        description: "Água de coco.",
        price: 10.0,
        imageUrl: "https://example.com/agua-de-coco.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água Tônica/Zero",
        description: "Água tônica ou zero açúcar.",
        price: 6.0,
        imageUrl: "https://example.com/agua-tonica.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "H2O Limão",
        description: "Água saborizada com limão.",
        price: 8.0,
        imageUrl: "https://example.com/h2o-limao.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "H2OH Limoneto",
        description: "Água saborizada com limoneto.",
        price: 8.0,
        imageUrl: "https://example.com/h2oh-limoneto.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Skol Beats",
        description: "Energético Skol Beats.",
        price: 12.0,
        imageUrl: "https://example.com/skol-beats.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Redbull",
        description: "Energético Redbull.",
        price: 17.0,
        imageUrl: "https://example.com/redbull.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Redbull Sabores",
        description: "Energético Redbull com sabores.",
        price: 17.0,
        imageUrl: "https://example.com/redbull-sabores.jpg",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedRefri1LCategory = async (tx: any, restaurantId: string) => {
  const refri1LCategory = await tx.menuCategory.create({
    data: {
      name: "Refri 1L",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Coca-Cola",
        description: "Refrigerante Coca-Cola 1L.",
        price: 12.0,
        imageUrl: "https://example.com/coca-cola-1L.jpg",
        menuCategoryId: refri1LCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Guaraná",
        description: "Refrigerante Guaraná 1L.",
        price: 12.0,
        imageUrl: "https://example.com/guarana-1L.jpg",
        menuCategoryId: refri1LCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedSuco1LCategory = async (tx: any, restaurantId: string) => {
  const suco1LCategory = await tx.menuCategory.create({
    data: {
      name: "Suco 1L",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Del Valle",
        description: "Suco Del Valle 1L. Uva, maracujá, pêssego, laranja",
        price: 16.0,
        imageUrl: "https://example.com/suco-del-valle.jpg",
        menuCategoryId: suco1LCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedSucoLataCategory = async (tx: any, restaurantId: string) => {
  const sucoLataCategory = await tx.menuCategory.create({
    data: {
      name: "Suco Lata",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Suco Del Valle",
        description: "Uva, maracujá, pêssego, goiaba.",
        price: 6.0,
        imageUrl: "https://example.com/suco-manga-lata.jpg",
        menuCategoryId: sucoLataCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedSucoIntegralCategory = async (tx: any, restaurantId: string) => {
  const sucoIntegralCategory = await tx.menuCategory.create({
    data: {
      name: "Suco Integral",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Integral Prats",
        description: "Suco integral Prats.",
        price: 10.0,
        imageUrl: "https://example.com/suco-integral-prats.jpg",
        menuCategoryId: sucoIntegralCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Integral Le Verger",
        description: "Suco integral Le Verger.",
        price: 12.0,
        imageUrl: "https://example.com/suco-integral-le-verger.jpg",
        menuCategoryId: sucoIntegralCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedChoppPrussiaCategory = async (tx: any, restaurantId: string) => {
  const choppPrussiaCategory = await tx.menuCategory.create({
    data: {
      name: "Chopp Prussia",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Caneca 300ml",
        description: "Chopp Prussia em caneca de 300ml.",
        price: 10.0,
        imageUrl: "https://example.com/chopp-prussia-caneca.jpg",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Vinho Lata",
        description: "Vinho em lata.",
        price: 12.0,
        imageUrl: "https://example.com/vinho-lata.jpg",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre 1,5L",
        description: "Torre de chopp Prussia 1,5L.",
        price: 45.0,
        imageUrl: "https://example.com/chopp-prussia-torre-1.5L.jpg",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre 2,5L",
        description: "Torre de chopp Prussia 2,5L.",
        price: 75.0,
        imageUrl: "https://example.com/chopp-prussia-torre-2.5L.jpg",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedCombosCategory = async (tx: any, restaurantId: string) => {
  const combosCategory = await tx.menuCategory.create({
    data: {
      name: "Combos 5u",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Original 300ml",
        description: "Combo com cerveja Original 300ml.",
        price: 35.0,
        imageUrl: "https://example.com/combo-original-300ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Brahma 600ml",
        description: "Combo com cerveja Brahma 600ml.",
        price: 36.0,
        imageUrl: "https://example.com/combo-brahma-600ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Amstel 600ml",
        description: "Combo com cerveja Amstel 600ml.",
        price: 40.0,
        imageUrl: "https://example.com/combo-amstel-600ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Spaten 600ml",
        description: "Combo com cerveja Spaten 600ml.",
        price: 42.0,
        imageUrl: "https://example.com/combo-spaten-600ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Original 600ml",
        description: "Combo com cerveja Original 600ml.",
        price: 45.0,
        imageUrl: "https://example.com/combo-original-600ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Heineken 600ml",
        description: "Combo com cerveja Heineken 600ml.",
        price: 50.0,
        imageUrl: "https://example.com/combo-heineken-600ml.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedArtesanalCategory = async (tx: any, restaurantId: string) => {
  const artesanalCategory = await tx.menuCategory.create({
    data: {
      name: "Cerveja Artesanal",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "X Wals",
        description: "Cerveja artesanal X Wals.",
        price: 18.0,
        imageUrl: "https://example.com/cerveja-artesanal-x-wals.jpg",
        menuCategoryId: artesanalCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Wals Lagoinha",
        description: "Cerveja artesanal Wals Lagoinha.",
        price: 18.0,
        imageUrl: "https://example.com/cerveja-artesanal-wals-lagoinha.jpg",
        menuCategoryId: artesanalCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedDrinksCategory = async (tx: any, restaurantId: string) => {
  const drinksCategory = await tx.menuCategory.create({
    data: {
      name: "Drinks",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Drink sem Álcool",
        description:
          "Drink sem álcool com sabores de limão, morango, abacaxi e maracujá.",
        price: 18.0,
        imageUrl: "https://example.com/drink-sem-alcool.jpg",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caipirinha",
        description:
          "Caipirinha tradicional com limão, morango, abacaxi e maracujá.",
        price: 20.0,
        imageUrl: "https://example.com/caipirinha.jpg",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caipvodka",
        description:
          "Caipirinha com vodka, limão, morango, abacaxi e maracujá.",
        price: 24.0,
        imageUrl: "https://example.com/caipvodka.jpg",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caip Gin",
        description: "Caipirinha com gin, limão, morango, abacaxi e maracujá.",
        price: 28.0,
        imageUrl: "https://example.com/caip-gin.jpg",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedBatataRealCategories = async (tx: any, restaurantId: string) => {
  // Categoria: Torres de Batata
  const torresCategory = await tx.menuCategory.create({
    data: {
      name: "Torres de Batata",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Torre de Batata P - Bacon, Requeijão, Queijo Cheddar, Mussarela",
        description:
          "Torre de batata com bacon, requeijão, queijo cheddar e mussarela.",
        price: 69.9,
        imageUrl: "https://example.com/torre-bacon.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata P - Calabresa, Requeijão, Queijo Cheddar",
        description:
          "Torre de batata com calabresa, requeijão e queijo cheddar.",
        price: 79.9,
        imageUrl: "https://example.com/torre-calabresa.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata P - Costela com Requeijão, Queijo e Molho Especial",
        description:
          "Torre de batata com costela, requeijão, queijo e molho especial.",
        price: 79.9,
        imageUrl: "https://example.com/torre-costela.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 1KG - Bacon, Requeijão, Queijo Cheddar, Mussarela",
        description:
          "Torre de batata com bacon, requeijão, queijo cheddar e mussarela.",
        price: 79.9,
        imageUrl: "https://example.com/torre-bacon-3kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 1KG - Calabresa, Requeijão, Queijo Cheddar",
        description:
          "Torre de batata com calabresa, requeijão e queijo cheddar.",
        price: 89.9,
        imageUrl: "https://example.com/torre-calabresa-3kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 1KG - Costela com Requeijão, Queijo e Molho Especial",
        description:
          "Torre de batata com costela, requeijão, queijo e molho especial.",
        price: 89.9,
        imageUrl: "https://example.com/torre-costela-3kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 2KG - Bacon, Requeijão, Queijo Cheddar, Mussarela",
        description:
          "Torre de batata com bacon, requeijão, queijo cheddar e mussarela.",
        price: 129.9,
        imageUrl: "https://example.com/torre-bacon-5kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 2KG - Calabresa, Requeijão, Queijo Cheddar",
        description:
          "Torre de batata com calabresa, requeijão e queijo cheddar.",
        price: 149.9,
        imageUrl: "https://example.com/torre-calabresa-5kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 2KG - Costela com Requeijão, Queijo e Molho Especial",
        description:
          "Torre de batata com costela, requeijão, queijo e molho especial.",
        price: 149.9,
        imageUrl: "https://example.com/torre-costela-5kg.jpg",
        menuCategoryId: torresCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Batata Cone
  const batataConeCategory = await tx.menuCategory.create({
    data: {
      name: "Batata Cone",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Batata Cone P",
        description: "Batata cone tamanho P.",
        price: 15.9,
        imageUrl: "https://example.com/batata-cone-tradicional.jpg",
        menuCategoryId: batataConeCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Cone M",
        description: "Batata tamanho M.",
        price: 19.9,
        imageUrl: "https://example.com/batata-cone-bacon.jpg",
        menuCategoryId: batataConeCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Cone G",
        description: "Batata cone tamanho G.",
        price: 25.9,
        imageUrl: "https://example.com/batata-cone-calabresa.jpg",
        menuCategoryId: batataConeCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Batata Chips
  const batataChipsCategory = await tx.menuCategory.create({
    data: {
      name: "Batata Chips",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Batata Chips P",
        description: "Batata chips tamanho P.",
        price: 13.9,
        imageUrl: "https://example.com/batata-chips-tradicional.jpg",
        menuCategoryId: batataChipsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Chips M",
        description: "Batata chips tamanho M.",
        price: 19.9,
        imageUrl: "https://example.com/batata-chips-bacon.jpg",
        menuCategoryId: batataChipsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Chips G",
        description: "Batata chips tamanho G.",
        price: 25.9,
        imageUrl: "https://example.com/batata-chips-calabresa.jpg",
        menuCategoryId: batataChipsCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Batata's Recheadas
  const batataRecheadaCategory = await tx.menuCategory.create({
    data: {
      name: "Batata's Recheadas",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Batata Recheada Bacon com Alho G",
        description: "Batata recheada com bacon e alho tamanho G.",
        price: 35.9,
        imageUrl: "https://example.com/batata-recheada-bacon.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Calabresa G",
        description: "Batata recheada com calabresa tamanho G.",
        price: 39.9,
        imageUrl: "https://example.com/batata-recheada-calabresa.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Frango G",
        description: "Batata recheada com frango tamanho G.",
        price: 39.9,
        imageUrl: "https://example.com/batata-recheada-frango.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Alho Poró com Palmito G",
        description: "Batata recheada com alho poró e palmito tamanho G.",
        price: 39.9,
        imageUrl: "https://example.com/batata-recheada-alho-poro.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Carne Seca G",
        description: "Batata recheada com carne seca tamanho G.",
        price: 39.9,
        imageUrl: "https://example.com/batata-recheada-carne-seca.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Costela G",
        description: "Batata recheada com costela tamanho G.",
        price: 39.9,
        imageUrl: "https://example.com/batata-recheada-costela.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Bacon com Alho",
        description: "Batata recheada com bacon e alho porção individual.",
        price: 25.9,
        imageUrl: "https://example.com/batata-recheada-bacon.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Calabresa",
        description: "Batata recheada com calabresa porção individual.",
        price: 29.9,
        imageUrl: "https://example.com/batata-recheada-calabresa.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Frango",
        description: "Batata recheada com frango porção individual.",
        price: 29.9,
        imageUrl: "https://example.com/batata-recheada-frango.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Alho Poró com Palmito",
        description:
          "Batata recheada com alho poró e palmito porção individual.",
        price: 29.9,
        imageUrl: "https://example.com/batata-recheada-alho-poro.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Carne Seca",
        description: "Batata recheada com carne seca porção individual.",
        price: 29.9,
        imageUrl: "https://example.com/batata-recheada-carne-seca.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Costela",
        description: "Batata recheada com costela porção individual.",
        price: 29.9,
        imageUrl: "https://example.com/batata-recheada-costela.jpg",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Monte sua Fritas
  const monteSuaFritasCategory = await tx.menuCategory.create({
    data: {
      name: "Monte sua Fritas",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Fritas Tradicional 300G",
        description: "Fritas tradicionais 300g.",
        price: 29.9,
        imageUrl: "https://example.com/fritas-tradicional-200g.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Tradicional 500G",
        description: "Fritas tradicionais 500g.",
        price: 39.9,
        imageUrl: "https://example.com/fritas-tradicional-500g.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Tradicional 1KG",
        description: "Fritas tradicionais 1kg.",
        price: 59.9,
        imageUrl: "https://example.com/fritas-tradicional-1kg.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 300G",
        description: "Fritas rústicas/picantes 200g.",
        price: 29.9,
        imageUrl: "https://example.com/fritas-rustica-200g.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 500G",
        description: "Fritas rústicas/picantes 500g.",
        price: 39.9,
        imageUrl: "https://example.com/fritas-rustica-500g.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 1KG",
        description: "Fritas rústicas/picantes 1kg.",
        price: 59.9,
        imageUrl: "https://example.com/fritas-rustica-1kg.jpg",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Acréscimos
  const acrescimosCategory = await tx.menuCategory.create({
    data: {
      name: "Acréscimos",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Bacon",
        description: "Acréscimo de bacon.",
        price: 2.0,
        imageUrl: "https://example.com/acrescimo-cheddar.jpg",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo",
        description: "Acréscimo de queijo.",
        price: 2.0,
        imageUrl: "https://example.com/acrescimo-queijo.jpg",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Catupiry",
        description: "Acréscimo de catupiry.",
        price: 3.0,
        imageUrl: "https://example.com/acrescimo-catupiry.jpg",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cheddar",
        description: "Acréscimo de cheddar.",
        price: 3.0,
        imageUrl: "https://example.com/acrescimo-cheddar.jpg",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedAleanzzaCategories = async (tx: any, restaurantId: string) => {
  // Categoria: Entradinhas
  const entradinhasCategory = await tx.menuCategory.create({
    data: {
      name: "Entradinhas",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Alezzitos de Costela com Catupiry - Porção PP",
        description: "Alezzitos de costela com catupiry, porção mini.",
        price: 30.9,
        imageUrl: "https://example.com/alezzitos-costela-catupiry-pp.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção P",
        description: "Alezzitos de costela com catupiry, porção pequena.",
        price: 57.9,
        imageUrl: "https://example.com/alezzitos-costela-catupiry-p.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção M",
        description: "Alezzitos de costela com catupiry, porção média.",
        price: 67.9,
        imageUrl: "https://example.com/alezzitos-costela-catupiry-m.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção G",
        description: "Alezzitos de costela com catupiry, porção grande.",
        price: 77.9,
        imageUrl: "https://example.com/alezzitos-costela-catupiry-g.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção PP",
        description: "Alezzitos de frango com catupiry, porção mini.",
        price: 20.9,
        imageUrl: "https://example.com/alezzitos-frango-catupiry-pp.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção P",
        description: "Alezzitos de frango com catupiry, porção pequena.",
        price: 46.9,
        imageUrl: "https://example.com/alezzitos-frango-catupiry-p.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção M",
        description: "Alezzitos de frango com catupiry, porção média.",
        price: 56.9,
        imageUrl: "https://example.com/alezzitos-frango-catupiry-m.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção G",
        description: "Alezzitos de frango com catupiry, porção grande.",
        price: 67.9,
        imageUrl: "https://example.com/alezzitos-frango-catupiry-g.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção M",
        description: "Alezzitos de presunto e queijo, porção média.",
        price: 56.9,
        imageUrl: "https://example.com/alezzitos-presunto-queijo-m.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção P",
        description: "Alezzitos de presunto e queijo, porção pequena.",
        price: 46.9,
        imageUrl: "https://example.com/alezzitos-presunto-queijo-p.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção PP",
        description: "Alezzitos de presunto e queijo, porção mini.",
        price: 20.9,
        imageUrl: "https://example.com/alezzitos-presunto-queijo-pp.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção G",
        description: "Alezzitos de presunto e queijo, porção grande.",
        price: 67.9,
        imageUrl: "https://example.com/alezzitos-presunto-queijo-g.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Mix de Sabores",
        description: "Mix de até 2 sabores de Alezzitos. Consulte o valor.",
        price: 0.0, // Valor a ser consultado
        imageUrl: "https://example.com/alezzitos-mix.jpg",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Combos
  const combosCategory = await tx.menuCategory.create({
    data: {
      name: "Combos",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Combo 1 Super Fatia + 1 Mini Porção de Alezzitos",
        description:
          "1 super fatia de pizza de 16,90 e 1 tira pequena de Alezzitos.",
        price: 29.9,
        imageUrl: "https://example.com/combo-super-fatia-alezzitos.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Combo 1 Super Fatia + 1 Mini Porção de Alezzitos",
        description:
          "1 super fatia de pizza de 18,90 e 1 tira pequena de Alezzitos.",
        price: 32.9,
        imageUrl: "https://example.com/combo-super-fatia-alezzitos-2.jpg",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  // Categoria: Pizzas
  const pizzasCategory = await tx.menuCategory.create({
    data: {
      name: "Pizzas",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Especial Aleanzza - 8 Fatias",
        description:
          "Molho de tomate, frango desfiado, cheddar, muçarela, bacon, milho, cebola e orégano.",
        price: 81.9,
        imageUrl: "https://example.com/pizza-especial-aleanzza.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Especial Aleanzza - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, cheddar, muçarela, bacon, milho, cebola e orégano.",
        price: 71.9,
        imageUrl: "https://example.com/pizza-especial-aleanzza.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Especial Aleanzza - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, cheddar, muçarela, bacon, milho, cebola e orégano.",
        price: 18.9,
        imageUrl: "https://example.com/pizza-especial-aleanzza.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - 8 Fatias",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 77.9,
        imageUrl: "https://example.com/pizza-frango-catupiry.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 67.9,
        imageUrl: "https://example.com/pizza-frango-catupiry.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 16.9,
        imageUrl: "https://example.com/pizza-frango-catupiry.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - 8 Fatias",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 77.9,
        imageUrl: "https://example.com/pizza-calabresa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - 6 Fatias",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 67.9,
        imageUrl: "https://example.com/pizza-calabresa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - Super Fatia",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 16.9,
        imageUrl: "https://example.com/pizza-calabresa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - 8 Fatias",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 85.9,
        imageUrl: "https://example.com/pizza-4-queijos.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - 6 Fatias",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 75.9,
        imageUrl: "https://example.com/pizza-4-queijos.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - Super Fatia",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 18.9,
        imageUrl: "https://example.com/pizza-4-queijos.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - 8 Fatias",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 90.9,
        imageUrl: "https://example.com/pizza-costela-alho-poro.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - 6 Fatias",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 80.9,
        imageUrl: "https://example.com/pizza-costela-alho-poro.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - Super Fatia",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 18.9,
        imageUrl: "https://example.com/pizza-costela-alho-poro.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - 8 Fatias",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 79.9,
        imageUrl: "https://example.com/pizza-moda-casa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 68.9,
        imageUrl: "https://example.com/pizza-moda-casa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 16.9,
        imageUrl: "https://example.com/pizza-moda-casa.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Canadense - 8 Fatias",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 76.9,
        imageUrl: "https://example.com/pizza-canadense.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Canadense - 6 Fatias",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 67.9,
        imageUrl: "https://example.com/pizza-canadense.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Canadense - Super Fatia",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 16.9,
        imageUrl: "https://example.com/pizza-canadense.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - 8 Fatias",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 78.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - 6 Fatias",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 68.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - Super Fatia",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 39,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - 8 Fatias",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 89.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - 6 Fatias",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 79.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - Super Fatia",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 18.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },

      {
        name: "Portuguesa - 8 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 78.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Portuguesa - 6 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 68.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Portuguesa - Super Fatia",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 16.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },

      {
        name: "Alcapone - 8 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 83.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alcapone - 6 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 73.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alcapone - Super Fatia",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 18.9,
        imageUrl: "https://example.com/pizza-bacon-tiras.jpg",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });

  const bordasRecheadasCategory = await tx.menuCategory.create({
    data: {
      name: "Bordas Recheadas",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Borda de Catupiry Cremoso - Média",
        description:
          "Borda recheada com catupiry cremoso (para pizzas médias).",
        price: 10.9,
        imageUrl: "https://example.com/borda-catupiry-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry Cremoso - Grande",
        description:
          "Borda recheada com catupiry cremoso (para pizzas grandes).",
        price: 12.9,
        imageUrl: "https://example.com/borda-catupiry-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cheddar Cremoso - Média",
        description: "Borda recheada com cheddar cremoso (para pizzas médias).",
        price: 10.9,
        imageUrl: "https://example.com/borda-cheddar-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cheddar Cremoso - Grande",
        description:
          "Borda recheada com cheddar cremoso (para pizzas grandes).",
        price: 12.9,
        imageUrl: "https://example.com/borda-cheddar-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Costela com Catupiry - Média",
        description:
          "Borda recheada com costela e catupiry (para pizzas médias).",
        price: 15.9,
        imageUrl: "https://example.com/borda-costela-catupiry-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Costela com Catupiry - Grande",
        description:
          "Borda recheada com costela e catupiry (para pizzas grandes).",
        price: 19.9,
        imageUrl: "https://example.com/borda-costela-catupiry-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cream Cheese - Média",
        description: "Borda recheada com cream cheese (para pizzas médias).",
        price: 11.9,
        imageUrl: "https://example.com/borda-cream-cheese-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cream Cheese - Grande",
        description: "Borda recheada com cream cheese (para pizzas grandes).",
        price: 13.9,
        imageUrl: "https://example.com/borda-cream-cheese-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Frango - Média",
        description:
          "Borda recheada com catupiry e frango (para pizzas médias).",
        price: 12.9,
        imageUrl: "https://example.com/borda-catupiry-frango-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Frango - Grande",
        description:
          "Borda recheada com catupiry e frango (para pizzas grandes).",
        price: 14.9,
        imageUrl: "https://example.com/borda-catupiry-frango-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Milho - Média",
        description:
          "Borda recheada com catupiry e milho (para pizzas médias).",
        price: 11.9,
        imageUrl: "https://example.com/borda-catupiry-milho-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Milho - Grande",
        description:
          "Borda recheada com catupiry e milho (para pizzas grandes).",
        price: 13.9,
        imageUrl: "https://example.com/borda-catupiry-milho-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda Metade Catupiry e Metade Cheddar - Média",
        description:
          "Borda recheada metade catupiry e metade cheddar (para pizzas médias).",
        price: 10.9,
        imageUrl: "https://example.com/borda-metade-catupiry-cheddar-media.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda Metade Catupiry e Metade Cheddar - Grande",
        description:
          "Borda recheada metade catupiry e metade cheddar (para pizzas grandes).",
        price: 12.9,
        imageUrl:
          "https://example.com/borda-metade-catupiry-cheddar-grande.jpg",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      const restaurant = await seedRestaurant(tx);
      await seedRefriCategory(tx, restaurant.id);
      await seedCervejaCategory(tx, restaurant.id);
      await seedLongNeckCategory(tx, restaurant.id);
      await seedDrinksEspeciaisCategory(tx, restaurant.id);
      await seedSucosCategory(tx, restaurant.id);
      await seedVinhosCategory(tx, restaurant.id);
      await seedEspumantesCategory(tx, restaurant.id);
      await seedShotsCategory(tx, restaurant.id);
      await seedOutrosCategory(tx, restaurant.id);
      await seedRefri1LCategory(tx, restaurant.id);
      await seedSuco1LCategory(tx, restaurant.id);
      await seedSucoLataCategory(tx, restaurant.id);
      await seedSucoIntegralCategory(tx, restaurant.id);
      await seedChoppPrussiaCategory(tx, restaurant.id);
      await seedCombosCategory(tx, restaurant.id);
      await seedArtesanalCategory(tx, restaurant.id);
      await seedDrinksCategory(tx, restaurant.id);
      const batataRealRestaurant = await seedBatataRealRestaurant(tx);
      await seedBatataRealCategories(tx, batataRealRestaurant.id);
      const aleanzzaRestaurant = await seedAleanzzaRestaurant(tx);
      await seedAleanzzaCategories(tx, aleanzzaRestaurant.id);
    },
    {
      timeout: 30000, // Aumenta o tempo limite para 30 segundos
    }
  );
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
