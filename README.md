# FSW Food Park

FSW Food Park é uma aplicação web full-stack para pedidos de comida, permitindo que clientes selecionem um restaurante, escolham produtos do cardápio, adicionem ao carrinho e finalizem a compra com pagamento via Stripe.

## Funcionalidades Principais

* **Seleção de Restaurante**: A aplicação utiliza rotas dinâmicas (`[slug]`) para exibir páginas específicas de cada restaurante.
* **Método de Consumo**: O cliente pode escolher entre "Para comer aqui" (DINE_IN) ou "Para levar" (TAKEAWAY) antes de ver o cardápio.
* **Cardápio e Categorias**: Exibe o cardápio do restaurante, agrupado por categorias.
* **Gestão de Carrinho**: Utiliza React Context (`CartContext`) para gerenciamento de estado do carrinho, permitindo adicionar produtos, incrementar/decrementar quantidades e remover itens.
* **Criação de Pedidos**: Uma Server Action (`createOrder`) é usada para salvar o pedido no banco de dados com os dados do cliente e os produtos.
* **Pagamento com Stripe**: Integração com o Stripe para processamento de pagamentos. Uma Server Action (`createStripeCheckout`) gera uma sessão de checkout.
* **Confirmação de Pagamento**: Um endpoint de API (`/api/webhooks/stripe`) recebe webhooks do Stripe para atualizar o status do pedido para `PAYMENT_CONFIRMED` ou `PAYMENT_FAILED`.

## Stack de Tecnologia

* **Framework**: [Next.js](https://nextjs.org/) (com App Router)
* **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
* **ORM**: [Prisma](https://www.prisma.io/)
* **Pagamentos**: [Stripe](https://stripe.com/)
* **UI**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
* **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
* **Validação**: [Zod](https://zod.dev/)

## Modelo do Banco de Dados (Prisma)

O esquema do banco de dados inclui os seguintes modelos:
* `Restaurant`: Armazena informações dos restaurantes.
* `MenuCategory`: Define as categorias do cardápio (ex: "Bebidas", "Lanches").
* `Product`: Detalhes dos produtos, incluindo preço e ingredientes.
* `Order`: Registra os pedidos, status, total e dados do cliente.
* `OrderProducts`: Tabela de junção para relacionar produtos e pedidos.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone (https://github.com/victoriacarvalho/fp)
    cd fsw-food-park
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    
    STRIPE_SECRET_KEY=sk_...
    STRIPE_WEBHOOK_SECRET_KEY=whsec_...
    ```

4.  **Execute as Migrações do Banco:**
    ```bash
    npx prisma migrate dev
    ```

5.  **(Opcional) Popule o banco com dados:**
    O projeto está configurado com um script de seed.
    ```bash
    npx prisma db seed
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.
