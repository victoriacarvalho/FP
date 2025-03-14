/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const seedBar = async (tx: any) => {
  await tx.restaurant.deleteMany();
  return await tx.restaurant.create({
    data: {
      name: "Food Park Bar",
      slug: "food-park-bar",
      description: "O Maior complexo de gastronomia da região",
      avatarImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkR5yrhZqSf1uzk4neBcwvJY3UI0PHaDb9lqEg",
      coverImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjBra8MVbsyARHKBco8O6kx0MYqptdfea5um",
    },
  });
};

const seedBatataRealRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "A Batata Real",
      slug: "batata-real",
      description: "Realmente fabulosa",
      avatarImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkCEuX1HT0MWxSRv7GZ5euNJOzoIyDk96Hsgnb",
      coverImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjBra8MVbsyARHKBco8O6kx0MYqptdfea5um",
    },
  });
};

const seedAleanzzaRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "Aleanzza",
      slug: "aleanzza",
      description: "Pizzas artesanais e entradinhas deliciosas",
      avatarImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkBugeISadb2qJzoupaZYNPwrQSRg1GlVejU78",
      coverImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjBra8MVbsyARHKBco8O6kx0MYqptdfea5um",
    },
  });
};

const seedAppassionatoRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "Appassionato",
      slug: "appassionato",
      description: "O sabor da felicidade",
      avatarImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkewyDPPuPTzngDlX2pirm7MLRUEte0shGJjuQ",
      coverImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjBra8MVbsyARHKBco8O6kx0MYqptdfea5um",
    },
  });
};

const seedArmazemCarneRestaurant = async (tx: any) => {
  return await tx.restaurant.create({
    data: {
      name: "Armazém da Carne",
      slug: "armazem-da-carne",
      description: "Carnes premium e pratos típicos gaúchos",
      avatarImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkMf3vDziLQiJoWp4kzjqarBfGFb6YeLUV3gx5",
      coverImageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjBra8MVbsyARHKBco8O6kx0MYqptdfea5um",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWeRJw1MVbsyARHKBco8O6kx0MYqptdfea5um",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fanta",
        description: "Refrigerante Fanta gelado.",
        price: 6.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk5SpXLMohbIiwYE08DJMUdQHVcsozC1XfKluW",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Sprite",
        description: "Refrigerante Sprite gelado.",
        price: 6.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkFhE9ECzl5i3u4zTZlOkR6VtCQqSbnfomv9X2",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Guaraná / Zero",
        description: "Refrigerante Guaraná gelado.",
        price: 6.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkYxOl6uBt9dgvtUJWmfzjQMOKeiyRSnrp4o7I",
        menuCategoryId: refriCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Schwepps",
        description: "Refrigerante Schwepps gelado.",
        price: 6.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkCt1opN0MWxSRv7GZ5euNJOzoIyDk96HsgnbQ",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkSh57P7NGBLXdv5f8lrbROwQaP4UpNDH7J6eZ",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Brahma",
        description: "Cerveja Brahma 600ml.",
        price: 13.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkAhSv8L2EouUNOFVKfkz70GBiICqsptW2dm5M",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Original",
        description: "Cerveja Original 600ml.",
        price: 16.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk7WRrcn3ekErbg6tXPs0faZpWlBF84evSDdCU",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Spaten",
        description: "Cerveja Spaten 600ml.",
        price: 16.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkSFxhcWNGBLXdv5f8lrbROwQaP4UpNDH7J6eZ",
        menuCategoryId: cervejaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken",
        description: "Cerveja Heineken 600ml.",
        price: 18.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkOLqKVUINFgscrbhezZVDY7va6d3p4uE5JMCI",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvtFH74Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Brahma Zero",
        description: "Cerveja Brahma zero álcool.",
        price: 8.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkCEMzzGQ0MWxSRv7GZ5euNJOzoIyDk96Hsgnb",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken",
        description: "Cerveja Heineken .",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk4ciWRwMdWEyLATi1Om05U8PF3X42IclQqHrG",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Heineken Zero",
        description: "Cerveja Heineken zero álcool.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk6wwTE2qAcG9Fk4OuyAiTBDZChHlr3NVWU0EX",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Stella s/ glúten",
        description: "Cerveja Stella s/ glúten .",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkksAstjcXUds3EzFLy0oIw9YtaHjZWx8Peqif",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Corona",
        description: "Cerveja Corona .",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvRORseQ0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: longNeckCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cerveja Corona zero",
        description: "Cerveja Corona zero álcool.",
        price: 18.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkkAENhcXUds3EzFLy0oIw9YtaHjZWx8Peqifh",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk7f9iHOekErbg6tXPs0faZpWlBF84evSDdCUy",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Margarita",
        description: "Tequila, suco de limão, licor de laranja e sal na borda.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkBL5bNsadb2qJzoupaZYNPwrQSRg1GlVejU78",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Pina Colada",
        description: "Rum, leite condensado, leite de coco e suco de abacaxi.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fkh095rxBKrUPIM6nFevgykW4bAD8EHzJZ9xs2",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Maracujack",
        description: "Whisky Jack Daniels, Açúcar e polpa de maracujá.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk9HSg3OEepL3SVTjXc5xEdzsZIGAJabwlkKro",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Gin Tônica",
        description: "Gin, Tônica e especiarias.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fktch1bXUpeYVL7kvZTimRx1c0noQGy3CDWb5I",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Gin Tropical",
        description: "Gin, energético tropical e especiarias.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkEAWjNP7QHJdzxFAhNDBo4nmqKPMg3XaYyZ7v",
        menuCategoryId: drinksEspeciaisCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cozumel",
        description: "Suco de limão, cerveja (Corona / Heineken), sal.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fkpj7Co7cWYk7UmwNqB2vfSTrizVtERlPngMu1",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Uva",
        description: "Suco de Uva.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Goiaba",
        description: "Suco de Goiaba.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Morango",
        description: "Suco de morango.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Acerola",
        description: "Suco de Acerola.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco de Maracujá",
        description: "Suco de Maracujá.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Manga com morango",
        price: 13.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Manga com maracujá",
        price: 13.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Misto",
        description: "Morango com maracujá",
        price: 13.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk07NKQPx9XgfL5ziPEtw1NFnOrVAkoqdlbjWM",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Detox",
        description: "Abacaxi, couve, limão, hortelã e gengibre.",
        price: 13.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkPPSEw2Rf89Dhc3nWIlUJwBA4RVxkasL6F0Ni",
        menuCategoryId: sucosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Suco Kids 300ml",
        description:
          "Manga, uva, goiaba, acerola, morango ou maracujá. Acompanha copo de brinde",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkxIv0JLik9RN3ILKe4dSUAbPg5ucjrWZ0OJX7",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk0MgrGp9XgfL5ziPEtw1NFnOrVAkoqdlbjWMv",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Reservado Concha Y Toro",
        description: "Vinho tinto reservado.",
        price: 58.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk9QPg6XEepL3SVTjXc5xEdzsZIGAJabwlkKro",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Atlântico",
        description: "Vinho tinto de alta qualidade.",
        price: 79.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkEyLIYG7QHJdzxFAhNDBo4nmqKPMg3XaYyZ7v",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Casal Garcia",
        description: "Vinho branco refrescante.",
        price: 85.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fks6SeToBvKceQTqEyCx9dD8pjFo2ZhltwR1iL",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Quinta de Bons Ventos",
        description: "Vinho tinto encorpado.",
        price: 85.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkAvw84nQ2EouUNOFVKfkz70GBiICqsptW2dm5",
        menuCategoryId: vinhosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cordero Con Piel de Lobo",
        description: "Vinho tinto premium.",
        price: 88.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkliDDwbjntCXPL3Vokg8ZaJYR95HudK4qcQvD",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkS6SUgFNGBLXdv5f8lrbROwQaP4UpNDH7J6eZ",
        menuCategoryId: espumantesCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Chandon Brut",
        description: "Espumante brut de alta qualidade.",
        price: 160.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkstKXUZBvKceQTqEyCx9dD8pjFo2ZhltwR1iL",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkYxOz0bvt9dgvtUJWmfzjQMOKeiyRSnrp4o7I",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Téquila José Cuervo",
        description: "Téquila tradicional mexicana.",
        price: 18.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkW353QzcMVbsyARHKBco8O6kx0MYqptdfea5u",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cachaça Seleta",
        description: "Cachaça brasileira de alta qualidade.",
        price: 10.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkRvGKRpSf1uzk4neBcwvJY3UI0PHaDb9lqEgh",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Campari",
        description: "Bitter italiano.",
        price: 10.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkjwnpS6hrLe2ifJmBp8Ob7gc43nSDz1X9hVQM",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Smirnoff",
        description: "Vodka Smirnoff.",
        price: 10.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkAdklpt2EouUNOFVKfkz70GBiICqsptW2dm5M",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Seagers",
        description: "Gin Seagers.",
        price: 10.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkbOwiOK8yruVnqgdEU7NIGYAKHiF4P9e6cD02",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Tangueray",
        description: "Gin Tangueray.",
        price: 15.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkJ8zSQ14LY5S9eizxIwZWKlhCVcNasgpmOkjA",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Red Label",
        description: "Whisky Red Label.",
        price: 15.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkRxCx4PSf1uzk4neBcwvJY3UI0PHaDb9lqEgh",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Black Label",
        description: "Whisky Black Label.",
        price: 20.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk0cEzc79XgfL5ziPEtw1NFnOrVAkoqdlbjWMv",
        menuCategoryId: shotsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Jack Daniels",
        description: "Whisky Jack Daniels.",
        price: 20.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkR5g6GEXSf1uzk4neBcwvJY3UI0PHaDb9lqEg",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkJpGvGi4LY5S9eizxIwZWKlhCVcNasgpmOkjA",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água com Gás",
        description: "Água mineral com gás.",
        price: 5.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fksqw6zDBvKceQTqEyCx9dD8pjFo2ZhltwR1iL",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água de Coco Integral",
        description: "Água de coco.",
        price: 10.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkognwnOnDtaCyxhSsTgNReZdYcm6JkuM05iKG",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Água Tônica/Zero",
        description: "Água tônica ou zero açúcar.",
        price: 6.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkE9tSnF7QHJdzxFAhNDBo4nmqKPMg3XaYyZ7v",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "H2O Limão",
        description: "Água saborizada com limão.",
        price: 8.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkuLnDyw1WzLsZTKunvoy6QRda25CpimqEIgh7",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "H2O Limoneto",
        description: "Água saborizada com limoneto.",
        price: 8.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWjAGTtMVbsyARHKBco8O6kx0MYqptdfea5um",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Skol Beats",
        description: "Energético Skol Beats.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkunL6PYWzLsZTKunvoy6QRda25CpimqEIgh7V",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Redbull",
        description: "Energético Redbull.",
        price: 17.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fka8YnR76EcubZPrmxSC2o30YRkNWfFDdUVaBG",
        menuCategoryId: outrosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Redbull Sabores",
        description: "Energético Redbull com sabores.",
        price: 17.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkuSSwkuWzLsZTKunvoy6QRda25CpimqEIgh7V",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk702dxsekErbg6tXPs0faZpWlBF84evSDdCUy",
        menuCategoryId: refri1LCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Guaraná",
        description: "Refrigerante Guaraná 1L.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkaDrpmg6EcubZPrmxSC2o30YRkNWfFDdUVaBG",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk9tWoZwEepL3SVTjXc5xEdzsZIGAJabwlkKro",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkMCCrbvLQiJoWp4kzjqarBfGFb6YeLUV3gx58",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk3Fn7OGf4Kgp9btj68GaCSFhuymQk23PVLlJc",
        menuCategoryId: sucoIntegralCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Integral Le Verger",
        description: "Suco integral Le Verger.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkcUHaI2TYihVFEocw6NjxqZ05TLkraKXBbSRP",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkhrQ8IpKrUPIM6nFevgykW4bAD8EHzJZ9xs2X",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Vinho Lata",
        description: "Vinho em lata.",
        price: 12.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk2jujXwYMdLCpRw5Oh3j19gASZHPQJF6kWzUn",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre 1,5L",
        description: "Torre de chopp Prussia 1,5L.",
        price: 45.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fkog6mY3sDtaCyxhSsTgNReZdYcm6JkuM05iKG",
        menuCategoryId: choppPrussiaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre 2,5L",
        description: "Torre de chopp Prussia 2,5L.",
        price: 75.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fkog6mY3sDtaCyxhSsTgNReZdYcm6JkuM05iKG",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FklFOCoJjntCXPL3Vokg8ZaJYR95HudK4qcQvD",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Brahma 600ml",
        description: "Combo com cerveja Brahma 600ml.",
        price: 36.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkW3VweIOMVbsyARHKBco8O6kx0MYqptdfea5u",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Amstel 600ml",
        description: "Combo com cerveja Amstel 600ml.",
        price: 40.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkhgXQADKrUPIM6nFevgykW4bAD8EHzJZ9xs2X",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Spaten 600ml",
        description: "Combo com cerveja Spaten 600ml.",
        price: 42.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkNb6O3V5DjaxHVU9sBt1yEKbC7ikqwu4Z6rTl",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Original 600ml",
        description: "Combo com cerveja Original 600ml.",
        price: 45.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FktW8EeHUpeYVL7kvZTimRx1c0noQGy3CDWb5I",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Heineken 600ml",
        description: "Combo com cerveja Heineken 600ml.",
        price: 50.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk1IC8hkumOIF9GxS6l5jMC0q4cayXkbmQUBuo",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkIGFnuA3ZkCPQTF0MD7GpNHYi1g39OKAzdmJh",
        menuCategoryId: artesanalCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Wals Lagoinha",
        description: "Cerveja artesanal Wals Lagoinha.",
        price: 18.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkcTzzJSYihVFEocw6NjxqZ05TLkraKXBbSRPH",
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
          "Drink sem álcool com sabores de limão, morango, abacaxi ou maracujá.",
        price: 18.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk9DMQ8GEepL3SVTjXc5xEdzsZIGAJabwlkKro",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caipirinha",
        description:
          "Caipirinha tradicional com limão, morango, abacaxi ou maracujá.",
        price: 20.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWsb0kmMVbsyARHKBco8O6kx0MYqptdfea5um",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caipvodka",
        description:
          "Caipirinha com vodka, limão, morango, abacaxi ou maracujá.",
        price: 24.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWsb0kmMVbsyARHKBco8O6kx0MYqptdfea5um",
        menuCategoryId: drinksCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Caip Gin",
        description: "Caipirinha com gin, limão, morango, abacaxi ou maracujá.",
        price: 28.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkWsb0kmMVbsyARHKBco8O6kx0MYqptdfea5um",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkVPSxzD1bf4uY5nqt9IVjUyTSK2zxCR0Fbgi8",
        menuCategoryId: batataConeCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Cone M",
        description: "Batata tamanho M.",
        price: 19.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkVPSxzD1bf4uY5nqt9IVjUyTSK2zxCR0Fbgi8",
        menuCategoryId: batataConeCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Cone G",
        description: "Batata cone tamanho G.",
        price: 25.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkVPSxzD1bf4uY5nqt9IVjUyTSK2zxCR0Fbgi8",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkjC7bzcwhrLe2ifJmBp8Ob7gc43nSDz1X9hVQ",
        menuCategoryId: batataChipsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Chips M",
        description: "Batata chips tamanho M.",
        price: 19.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkjC7bzcwhrLe2ifJmBp8Ob7gc43nSDz1X9hVQ",
        menuCategoryId: batataChipsCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Chips G",
        description: "Batata chips tamanho G.",
        price: 25.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkjC7bzcwhrLe2ifJmBp8Ob7gc43nSDz1X9hVQ",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Calabresa G",
        description: "Batata recheada com calabresa tamanho G.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Frango G",
        description: "Batata recheada com frango tamanho G.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Alho Poró com Palmito G",
        description: "Batata recheada com alho poró e palmito tamanho G.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Carne Seca G",
        description: "Batata recheada com carne seca tamanho G.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Costela G",
        description: "Batata recheada com costela tamanho G.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Bacon com Alho",
        description: "Batata recheada com bacon e alho porção individual.",
        price: 25.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Calabresa",
        description: "Batata recheada com calabresa porção individual.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Frango",
        description: "Batata recheada com frango porção individual.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Alho Poró com Palmito",
        description:
          "Batata recheada com alho poró e palmito porção individual.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Carne Seca",
        description: "Batata recheada com carne seca porção individual.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
        menuCategoryId: batataRecheadaCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Batata Recheada Costela",
        description: "Batata recheada com costela porção individual.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkvhHXN7Q0c3nhGkBiaUuQD79FeWr4VZfpTAgl",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk6wmMYIwAcG9Fk4OuyAiTBDZChHlr3NVWU0EX",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Tradicional 500G",
        description: "Fritas tradicionais 500g.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk6wmMYIwAcG9Fk4OuyAiTBDZChHlr3NVWU0EX",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Tradicional 1KG",
        description: "Fritas tradicionais 1kg.",
        price: 59.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk6wmMYIwAcG9Fk4OuyAiTBDZChHlr3NVWU0EX",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 300G",
        description: "Fritas rústicas/picantes 200g.",
        price: 29.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkV6AHWwbf4uY5nqt9IVjUyTSK2zxCR0Fbgi8X",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 500G",
        description: "Fritas rústicas/picantes 500g.",
        price: 39.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkV6AHWwbf4uY5nqt9IVjUyTSK2zxCR0Fbgi8X",
        menuCategoryId: monteSuaFritasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Fritas Rústica/Picante 1KG",
        description: "Fritas rústicas/picantes 1kg.",
        price: 59.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkV6AHWwbf4uY5nqt9IVjUyTSK2zxCR0Fbgi8X",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9Fk4iAw4NdWEyLATi1Om05U8PF3X42IclQqHrGx",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo",
        description: "Acréscimo de queijo.",
        price: 2.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkSoaMIMyNGBLXdv5f8lrbROwQaP4UpNDH7J6e",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Catupiry",
        description: "Acréscimo de catupiry.",
        price: 3.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkSJmjGdNGBLXdv5f8lrbROwQaP4UpNDH7J6eZ",
        menuCategoryId: acrescimosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Cheddar",
        description: "Acréscimo de cheddar.",
        price: 3.0,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkNuOnCr5DjaxHVU9sBt1yEKbC7ikqwu4Z6rTl",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção P",
        description: "Alezzitos de costela com catupiry, porção pequena.",
        price: 57.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção M",
        description: "Alezzitos de costela com catupiry, porção média.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Costela com Catupiry - Porção G",
        description: "Alezzitos de costela com catupiry, porção grande.",
        price: 77.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção PP",
        description: "Alezzitos de frango com catupiry, porção mini.",
        price: 20.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção P",
        description: "Alezzitos de frango com catupiry, porção pequena.",
        price: 46.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção M",
        description: "Alezzitos de frango com catupiry, porção média.",
        price: 56.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Frango com Catupiry - Porção G",
        description: "Alezzitos de frango com catupiry, porção grande.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção M",
        description: "Alezzitos de presunto e queijo, porção média.",
        price: 56.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção P",
        description: "Alezzitos de presunto e queijo, porção pequena.",
        price: 46.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção PP",
        description: "Alezzitos de presunto e queijo, porção mini.",
        price: 20.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Presunto e Queijo - Porção G",
        description: "Alezzitos de presunto e queijo, porção grande.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
        menuCategoryId: entradinhasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alezzitos de Mix de Sabores",
        description: "Mix de até 2 sabores de Alezzitos. Consulte o valor.",
        price: 0.0, // Valor a ser consultado
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkdZFF3xpueHdqFImVhMsnyfECTx28QwiPSX4R",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkbI72SW8yruVnqgdEU7NIGYAKHiF4P9e6cD02",
        menuCategoryId: combosCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Combo 1 Super Fatia + 1 Mini Porção de Alezzitos",
        description:
          "1 super fatia de pizza de 18,90 e 1 tira pequena de Alezzitos.",
        price: 32.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkbI72SW8yruVnqgdEU7NIGYAKHiF4P9e6cD02",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Especial Aleanzza - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, cheddar, muçarela, bacon, milho, cebola e orégano.",
        price: 71.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Especial Aleanzza - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, cheddar, muçarela, bacon, milho, cebola e orégano.",
        price: 18.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - 8 Fatias",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 77.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Frango com Catupiry - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, catupiry, muçarela, milho e orégano.",
        price: 16.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - 8 Fatias",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 77.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - 6 Fatias",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Calabresa - Super Fatia",
        description: "Molho de tomate, muçarela, calabresa, cebola e orégano.",
        price: 16.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - 8 Fatias",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 85.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - 6 Fatias",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 75.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "4 Queijos - Super Fatia",
        description:
          "Molho de tomate, muçarela, catupiry, parmesão, provolone e orégano.",
        price: 18.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - 8 Fatias",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 90.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - 6 Fatias",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 80.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Costela com Alho Poró - Super Fatia",
        description:
          "Molho de tomate, muçarela, costela, catupiry, alho poró e orégano.",
        price: 18.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - 8 Fatias",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 79.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - 6 Fatias",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 68.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "À Moda da Casa - Super Fatia",
        description:
          "Molho de tomate, frango desfiado, presunto, muçarela, pimentão, cebola, azeitona e orégano.",
        price: 16.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Lombo Canadense - 8 Fatias",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 76.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Lombo Canadense - 6 Fatias",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 67.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Lombo Canadense - Super Fatia",
        description:
          "Molho de tomate, muçarela, lombo canadense, catupiry, cebola e orégano.",
        price: 16.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - 8 Fatias",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 78.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - 6 Fatias",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 68.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Bacon em Tiras - Super Fatia",
        description: "Molho de tomate, muçarela, bacon em tiras e orégano.",
        price: 39,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - 8 Fatias",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 89.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - 6 Fatias",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 79.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Queijo e Geleia de Frutas Vermelhas - Super Fatia",
        description:
          "Molho de tomate, deliciosa camada de muçarela, cream cheese, fatias finas de provolone, saborosa geleia de frutas vermelhas e orégano.",
        price: 18.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },

      {
        name: "Portuguesa - 8 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 78.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Portuguesa - 6 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 68.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Portuguesa - Super Fatia",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 16.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },

      {
        name: "Alcapone - 8 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 83.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alcapone - 6 Fatias",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 73.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: pizzasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Alcapone - Super Fatia",
        description:
          "Molho de tomate, presunto, deliciosa camada de muçarela, pimentão, tomate fatiado, cebola em anéis, azeitona, ovo e orégano.",
        price: 18.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
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
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry Cremoso - Grande",
        description:
          "Borda recheada com catupiry cremoso (para pizzas grandes).",
        price: 12.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cheddar Cremoso - Média",
        description: "Borda recheada com cheddar cremoso (para pizzas médias).",
        price: 10.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cheddar Cremoso - Grande",
        description:
          "Borda recheada com cheddar cremoso (para pizzas grandes).",
        price: 12.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Costela com Catupiry - Média",
        description:
          "Borda recheada com costela e catupiry (para pizzas médias).",
        price: 15.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Costela com Catupiry - Grande",
        description:
          "Borda recheada com costela e catupiry (para pizzas grandes).",
        price: 19.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cream Cheese - Média",
        description: "Borda recheada com cream cheese (para pizzas médias).",
        price: 11.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Cream Cheese - Grande",
        description: "Borda recheada com cream cheese (para pizzas grandes).",
        price: 13.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Frango - Média",
        description:
          "Borda recheada com catupiry e frango (para pizzas médias).",
        price: 12.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Frango - Grande",
        description:
          "Borda recheada com catupiry e frango (para pizzas grandes).",
        price: 14.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Milho - Média",
        description:
          "Borda recheada com catupiry e milho (para pizzas médias).",
        price: 11.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda de Catupiry com Milho - Grande",
        description:
          "Borda recheada com catupiry e milho (para pizzas grandes).",
        price: 13.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda Metade Catupiry e Metade Cheddar - Média",
        description:
          "Borda recheada metade catupiry e metade cheddar (para pizzas médias).",
        price: 10.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
      {
        name: "Borda Metade Catupiry e Metade Cheddar - Grande",
        description:
          "Borda recheada metade catupiry e metade cheddar (para pizzas grandes).",
        price: 12.9,
        imageUrl:
          "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkpyoPN6cWYk7UmwNqB2vfSTrizVtERlPngMu1",
        menuCategoryId: bordasRecheadasCategory.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const seedComumCategory = async (tx: any, restaurantId: string) => {
  const category = await tx.menuCategory.create({
    data: {
      name: "Comum",
      restaurantId: restaurantId,
    },
  });

  // Produto principal
  await tx.product.create({
    data: {
      name: "Comum",
      description:
        "Leite em Pó eLeite condensado + 3 adicionais grátis. Escolha a massa: Chocolate, Morango ou Baunilha",
      price: 24.9,
      imageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkNDDn66v5DjaxHVU9sBt1yEKbC7ikqwu4Z6rT",
      menuCategoryId: category.id,
      restaurantId: restaurantId,
    },
  });

  // Complementos
  const complementos = [
    "Bis",
    "Sonho de valsa",
    "Ouro Branco",
    "Nutella",
    "Biscoito Óreo",
    "Churros",
    "Ovomaltime",
    "Banana",
    "Morango",
    "Prestígio",
    "Chokito",
    "Talento",
    "Paçoca",
    "Kit Kat",
    "Marshmallow",
    "Granulado",
    "Bola de sorvete",
    "Mini confete",
    "Doce de leite",
    "Jujuba",
    "Balas fini em geral",
    "Trento",
    "Calda quente de chocolate branco e preto",
  ];

  await tx.product.createMany({
    data: complementos.map((nome) => ({
      name: nome,
      description: "Adicional para comum",
      price: 0.0,
      imageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkNDDn66v5DjaxHVU9sBt1yEKbC7ikqwu4Z6rT",
      menuCategoryId: category.id,
      restaurantId: restaurantId,
    })),
  });
};

const seedPremiumCategory = async (tx: any, restaurantId: string) => {
  const category = await tx.menuCategory.create({
    data: {
      name: "Premium",
      restaurantId: restaurantId,
    },
  });

  // Chocolates Premium
  const chocolates = [
    { nome: "Ferrero Rocher", preco: 29.9 },
    { nome: "Kinder Ovo", preco: 29.9 },
    { nome: "Kinder Bueno", preco: 29.9 },
    { nome: "Chocolate Milka", preco: 29.9 },
    { nome: "Rafaello", preco: 29.9 },
    { nome: "Bolo Brownie", preco: 29.9 },
  ];

  await tx.product.createMany({
    data: chocolates.map((chocolate) => ({
      name: chocolate.nome,
      description: "Chocolate premium selecionado",
      price: chocolate.preco,
      imageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkNDDn66v5DjaxHVU9sBt1yEKbC7ikqwu4Z6rT",
      menuCategoryId: category.id,
      restaurantId: restaurantId,
    })),
  });

  // Trufas Premium
  const trufas = [
    "Morango em calda",
    "Bis branco",
    "Bis preto",
    "Creme de ninho",
    "Abacaxi ao vinho",
    "Paçoca",
    "Prestígio",
    "Oreo",
    "Kinder Bueno",
    "Maracujá",
  ];

  await tx.product.createMany({
    data: trufas.map((trufa) => ({
      name: `Trufa ${trufa}`,
      description: "Trufa artesanal premium",
      price: 24.9,
      imageUrl:
        "https://ubgvu032x1.ufs.sh/f/6YLRKSAcG9FkumjosAWzLsZTKunvoy6QRda25CpimqEIgh7V",
      menuCategoryId: category.id,
      restaurantId: restaurantId,
    })),
  });
};

const seedCarnesCategory = async (tx: any, restaurantId: string) => {
  const category = await tx.menuCategory.create({
    data: {
      name: "Carnes e Churrasco",
      restaurantId: restaurantId,
    },
  });

  await tx.product.createMany({
    data: [
      {
        name: "Picanha c/ Mandioca na Manteiga",
        description:
          "300g picanha bovina in natura ao ponto do cliente + 300g mandioca na manteiga",
        price: 89.0,
        imageUrl: "https://example.com/picanha-bovina.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Picanha  c/ Mandioca na Manteiga (Família)",
        description:
          "500g picanha acompanhada de batatas e mandioca na manteiga",
        price: 129.9,
        imageUrl: "https://example.com/picanha-familia.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Picanha Suína c/ Mandioca na Maneiga",
        description:
          "400g picanha suína ao ponto do cliente + 300g fritas com molho agridoce",
        price: 75.9,
        imageUrl: "https://example.com/picanha-suina.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Coraçãozinho ao Vinho c/ Farofa e Pimenta Biquinho",
        description:
          "300g coraçãozinho ao ponto + farofa crocante e pimenta biquinho",
        price: 39.9,
        imageUrl: "https://example.com/coracao.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Chorizo (primeiro corte contr filé) c/ fritas e molho",
        description:
          "300g de chorizo ao ponto do cliente in natura + 300g fritas com molho especial da casa",
        price: 79.9,
        imageUrl: "https://example.com/chorizo.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },

      {
        name: "Cabeça de Lombo c/ fritas ",
        description: "Cabeça de lombo + 300g fritas",
        price: 65.9,
        imageUrl: "https://example.com/chorizo.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Filé de Peixe c/ Fritas",
        description: "500g de peixe in natura + 300g batata",
        price: 99.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Filé de Peixe",
        description: "500g de peixe in natura",
        price: 69.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Pão de Alho Poró (unidade)",
        description: "Pão de Alho Poró",
        price: 13.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Pão de Alho Poró c/ Linguiça de Pernil",
        description: "Pão de Alho Poró recheado de linguiça de Pernil",
        price: 24.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Chapa Mineira",
        description:
          "300G de Panceta no Lemon Peper in natura, 200G de linguiça defumada in natura acompanhada c/ mandioca na manteiga",
        price: 69.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },

      {
        name: "Mix Armazém (chorizo, picanha suína, linguiça calabresa e fritas)",
        description:
          "150G de Chorizo in natura, 150G de picanha súina in natua, 150G de  linguiça de costela in natura + 200G de fritas",
        price: 75.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Peróa c/ Fritas",
        description: "02 Peroás empanados + 300G de fritas",
        price: 65.9,
        imageUrl: "https://example.com/peixe.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },

      {
        name: "Barca de Churrasco 1Kg",
        description:
          "1 com pão de alho, 150g alcatra, 150g contra filé, 150g picanha suína, 150g linguiça grill + farofa, fritas e mandioca na manteiga",
        price: 95.9,
        imageUrl: "https://example.com/barca-churrasco.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 1kg",
        description:
          "Torre com queijo, 150g chorizo, 150g picanha suína, 150g linguiça de lombo + cobertura aligot",
        price: 89.9,
        imageUrl: "https://example.com/torre-batata.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
      {
        name: "Torre de Batata 2kg",
        description:
          "Torre monstra com queijo, 300g chorizo, 300g picanha suína, 300g linguiça de lombo + cobertura aligot",
        price: 149.9,
        imageUrl: "https://example.com/torre-batata.jpg",
        menuCategoryId: category.id,
        restaurantId: restaurantId,
      },
    ],
  });
};

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      const bar = await seedBar(tx);
      await seedRefriCategory(tx, bar.id);
      await seedCervejaCategory(tx, bar.id);
      await seedLongNeckCategory(tx, bar.id);
      await seedDrinksEspeciaisCategory(tx, bar.id);
      await seedSucosCategory(tx, bar.id);
      await seedVinhosCategory(tx, bar.id);
      await seedEspumantesCategory(tx, bar.id);
      await seedShotsCategory(tx, bar.id);
      await seedOutrosCategory(tx, bar.id);
      await seedRefri1LCategory(tx, bar.id);
      await seedSuco1LCategory(tx, bar.id);
      await seedSucoLataCategory(tx, bar.id);
      await seedSucoIntegralCategory(tx, bar.id);
      await seedChoppPrussiaCategory(tx, bar.id);
      await seedCombosCategory(tx, bar.id);
      await seedArtesanalCategory(tx, bar.id);
      await seedDrinksCategory(tx, bar.id);
      const batataRealRestaurant = await seedBatataRealRestaurant(tx);
      await seedBatataRealCategories(tx, batataRealRestaurant.id);
      const aleanzzaRestaurant = await seedAleanzzaRestaurant(tx);
      await seedAleanzzaCategories(tx, aleanzzaRestaurant.id);
      const appassionatoRestaurant = await seedAppassionatoRestaurant(tx);
      await seedComumCategory(tx, appassionatoRestaurant.id);
      await seedPremiumCategory(tx, appassionatoRestaurant.id);
      const armazemRestaurant = await seedArmazemCarneRestaurant(tx);
      await seedCarnesCategory(tx, armazemRestaurant.id);
    },
    {
      timeout: 30000, // Aumenta o tempo limite para 30 segundos
    },
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
