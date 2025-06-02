# 👶🧔‍♂️ Pais & Filhos: O RPG de Turnos Mais Caótico do Mundo Real

Bem-vindo ao **Pais & Filhos**, um jogo em turnos desenvolvido em **Next.js**, onde um pai (ou mãe) enfrenta o maior desafio da vida adulta: **um bebê indomável**! Com ataques imprevisíveis, choros explosivos e muita fralda suja, você vai precisar de mais que café para vencer essa batalha.

> 🎮 Feito com Next.js + React + criatividade de quem claramente não dorme bem à noite.

---

## 🧠 Conceito

Neste RPG, o jogador assume o papel de um pai desesperado tentando sobreviver a uma madrugada de caos infantil. A cada rodada, você decide se:
- Troca a fralda do bebê (ataque)
- Se prepara para desviar de uma possível explosão de cocô (defesa)
- Toma café pra recuperar a sanidade (poção)
- Ou simplesmente foge pro banheiro (fuga = derrota)

Enquanto isso, o bebê revida com:
- Choros ensurdecedores
- Explosões de fralda
- Birras triplicadas

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** com `app/` router
- **React (useState)** para controle de estado
- **Hooks customizados** (`gameManager`) para gerenciar lógica de batalha
- **CSS Modules** e **imagens locais** para ambientação
- **HTML5 Audio API** para efeitos sonoros realistas
- **Estilo inspirado em RPGs clássicos** (layout tipo Pokémon)

---
🎮 Como Jogar
Clone o projeto:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/pais-vs-bebes.git
cd pais-vs-bebes
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o projeto:

bash
Copiar
Editar
npm run dev
Abra http://localhost:3000 e prepare-se para trocar fraldas com estratégia!

🖼️ Recursos Visuais e Sonoros
Certifique-se de ter os seguintes arquivos em /public:

🎵 Sons (em /public/sounds)
PaiNaMerda.mp3

Choro1.mp3

ChoroBravo.mp3

Choro3.mp3

Cafeee.mp3

PaiSuperCansado.mp3

🖼️ Imagens (em /public)
fralda.jpg

deuMerda.jpg

choro.png

escudo.png

vitoria.jpg

derrota.jpg

fuga.webp

Cafeee.jpg

🔄 Mecânicas
Ataques do pai causam dano entre 10 e 30, mas o bebê pode desviar.

Poção (Café) restaura 30 pontos de vida.

Bebê ataca automaticamente após cada ação do jogador, com danos variados.

Game Over ocorre quando qualquer personagem atinge 0 de vida (ou quando rola aquela fugidinha pro banehiro para chorar em posição fetal -- aah a ironia).

📌 Roadmap Futuro
 Animações com Framer Motion

 Sistema de níveis

 Ranking dos jogadores (quem sobrevive mais tempo)

 Variações de bebês (Gêmeos, Bebê do capeta, etc.)

 Versão mobile responsiva e jogável com uma mão (pra quem segura o bebê com a outra)

🤝 Contribuição
Se você já trocou uma fralda às 3 da manhã, você é qualificado o suficiente para contribuir!
