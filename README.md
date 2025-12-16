# Gtopia

Gtopia is a **blockchain-powered virtual nation** where users can **buy land**, **acquire citizenship**, and **interact with an AI assistant** for seamless on-chain transactions. Built on **Solana**, Gtopia leverages NFTs for ownership, governance and identity.

## Key Features 

### Land Purchasing System

- Users can **buy virtual land** as NFTs, each with **unique metadata** (coordinates, size, tier).
- Interactive **map-based UI** to view and purchase land.
- Ownership stored **on-chain**, updated in **real-time**.

### Citizenship System

- Citizenship is issued as an **NFT**, granting **exclusive perks** (e.g., governance rights, discounts).
- AI chatbot assists users in **applying for citizenship**.

### 🤖 AI Assistant Integration

- **GPT-4-powered AI agent** helps users interact with on-chain assets.
- Users can issue commands like:
  - _"Buy me the cheapest land"_
  - _"What’s my total land worth?"_
  - _"Get me citizenship"_
- Provides **market insights, alerts, and FAQs**.

### Interactive Land Map

- **Map-based UI** (built with **React + Mapbox/Leaflet**) displaying land ownership.
- Users can **zoom, pan, and inspect parcels** before buying.

### 🔗 Wallet Integration

- Supports **Phantom, Solflare, and other Solana wallets**.
- Secure **wallet-based login** and transaction execution.

### Governance (Future Feature)

- Citizens can **propose and vote on platform decisions**.

## Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Blockchain**: Solana (Anchor, Metaplex), IPFS/Arweave for metadata
- **AI**: GPT-4 API
- **Wallets**: Solana wallet adapters
- **Hosting**: Vercel/Netlify (frontend), Solana Devnet (testing)

## Development Roadmap

### Phase 1: MVP (Current)

✔ Smart Contracts (Land & Citizenship NFTs)  
✔ Interactive Map UI  
✔ AI Chatbot Integration  
✔ Wallet Connection

### Phase 2: Expansion

🔹 Governance Mechanism (Citizen Voting)  
🔹 Auctions & Secondary Land Sales  
🔹 Additional AI Capabilities

## Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/NileBit-Labs/gtopia.git
cd gtopia
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

### 4️⃣ Deploy Smart Contracts (Solana Devnet)

```sh
anchor build && anchor deploy
```

## Contributors

- **Ainamaani Douglas Bagambe** ([@NileBit-Labs](https://github.com/NileBit-Labs))
- **Muhangi Eliod** ([@NileBit-Labs](https://github.com/NileBit-Labs))
- **Shema Collins** ([@NileBit-Labs](https://github.com/NileBit-Labs))

## Join the Gtopia Community

- Twitter: [@gtopiaofficial](https://twitter.com/gtopiaofficial)
- Discord: [Join Here](https://discord.gg/gtopia)

---

**Gtopia is shaping the future of digital sovereignty!**
