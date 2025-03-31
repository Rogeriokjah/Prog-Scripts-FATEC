# 🥟 Pastelaria dos Infernos

Landing page interativa construída com **Next.js** para exibir o cardápio digital da fictícia "Pastelaria do Seu Zé". A interface é responsiva, moderna e oferece uma experiência diferenciada tanto para clientes quanto para administradores.

---

## 🔥 Funcionalidades

### 🍽️ Exibição de Sabores
- Cardápio dinâmico com sabores de pastéis listados em cards individuais.
- Cada card exibe:
  - Nome do pastel;
  - Imagem ilustrativa;
  - Preço;
  - Ingredientes (visíveis ao clicar no card).

### 👁️ Visualização de Ingredientes
- Ao clicar em um sabor de pastel, a lista de ingredientes é expandida no próprio card.
- Ingredientes são ocultos por padrão para manter uma visual mais limpo.

### 🛠️ Visualização Admin
- Um botão **“Visualização Admin”** ativa o modo de administração.
- No modo admin, o usuário pode:
  - Visualizar todos os ingredientes cadastrados no sistema;
  - Marcar ingredientes como **indisponíveis**.

### 🚫 Controle de Disponibilidade
- Sabores que possuem ingredientes indisponíveis são:
  - Exibidos em **tons de cinza**;
  - Têm o nome **tachado** (⚠️ visual feedback);
  - Continuam visíveis, mas o cliente entende que não estão disponíveis no momento.

---

## 📱 Responsividade

O layout foi desenvolvido com foco em dispositivos móveis e desktops:

- ✅ Grid flexível para os cards dos pastéis;
- ✅ Estilos adaptados com `flex-wrap` e espaçamentos em `rem`;
- ✅ Botões grandes e acessíveis para interação em telas pequenas;
- ✅ Texto e imagens ajustáveis conforme o tamanho da tela.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** (App Router - `/app`)
- **React** com **TypeScript**
- CSS customizado (`globals.css`)
- Hooks React para controle de estado
____
