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
