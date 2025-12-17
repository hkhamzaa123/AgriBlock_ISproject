
# AgriBlock: Agricultural Supply Chain Blockchain

![Rust](https://img.shields.io/badge/Backend-Rust-orange)

AgriBlock is a custom **Proof-of-Work blockchain** designed to track agricultural products across the entire supply chain.  
Instead of cryptocurrency balances, AgriBlock stores **immutable data events** such as harvesting, processing, transport, packaging, and more.

---

## 🚀 Key Features

* **Immutable Ledger:** Core blockchain logic implemented in **Rust** for performance and safety.
* **Data-Centric Design:** Replaces financial "Account Balance" checks with **Data Validation** logic.
* **Flexible Payloads:** Supports JSON-based data storage (Crop type, Humidity, Temperature, Quality Grade).
* **Validator Node:** The mining node acts as a system validator, stamping every block with a cryptographic proof of validation.
---

## 🛠️ Installation & Setup

### Prerequisites
* **Rust & Cargo** (For the Blockchain Node)

### 1. Clone the Repository
```bash
git clone [https://github.com/fromearth03/AgriBlock_rust_blockchain.git](https://github.com/fromearth03/AgriBlock_rust_blockchain.git)
cd AgriBlock_rust_blockchain
````

### 2\. Configure the Node (.env)

Ensure a `.env` file exists in the root directory with the following configuration:

```ini
PORT=8000
DIFFICULTY=1
TRANSACTION_WAITING_MS=100
MINER_ADDRESS=0000000000000000000000000000000000000000000000000000000000009999
```

## 🏗️ Architecture

The system uses a hybrid architecture to separate the consensus layer from the application layer:

1.  **The Node (Rust):** Maintains the ledger, pools transactions, and performs Proof-of-Work (SHA-256) mining.
2.  **The API (HTTP/JSON):** Exposes endpoints for data submission and history retrieval.

### Block Structure

Transactions are structured to track batch ownership and state rather than financial value:

```json
{
  "batch_id": "WHEAT-2025-001",
  "event_type": "HARVEST",
  "sender": "000...FARMER_ID",
  "recipient": "000...WAREHOUSE_ID",
  "data": "{\"crop\": \"Wheat\", \"qty\": \"500kg\", \"grade\": \"A\"}"
}
```

-----

## 🔗 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/blocks` | Returns the full chain history. |
| **POST** | `/transactions` | Submits a new event to the mempool. |

**Example POST Payload:**

```json
{
  "batch_id": "WHEAT-001",
  "event_type": "TRANSPORT",
  "sender": "000...111",
  "recipient": "000...222",
  "data": "{\"temp\": \"12C\", \"location\": \"M2 Motorway\"}"
}
```

-----

