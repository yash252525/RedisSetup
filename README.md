# ⚡ Redis Implementation with Node.js

![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A lightweight project demonstrating high-performance caching and data structure manipulation using **Redis** and **Node.js**. This repository provides examples of connecting a Node.js client to a Redis server and performing standard operations on **Strings** and **Lists**.

---

## 📂 Project Structure

| File | Purpose |
| :--- | :--- |
| **`client.js`** | **Connection Module**: Singleton configuration for connecting to the Redis host (port 6379). |
| **`server.js`** | **Application Entry**: Main server logic (likely API or execution entry point). |
| **`string.js`** | **Caching Demo**: Demonstrates `SET`, `GET`, and `EXPIRE` operations (Standard Key-Value caching). |
| **`list.js`** | **Queue Demo**: Demonstrates `LPUSH` and `RPOP` operations (Message Queue implementation). |

---

## 🛠️ Prerequisites

1.  **Node.js** (v14+) installed.
2.  **Redis Server** running locally or via Docker.

### Quick Redis Setup (Docker)
If you don't have Redis installed, run this single command:
```bash
docker run -d --name my-redis -p 6379:6379 redis
```

---

## 🚀 Installation & Usage

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yash252525/RedisSetup.git](https://github.com/yash252525/RedisSetup.git)
    cd RedisSetup
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Examples:**

    * **Test Connection & Caching (Strings):**
        ```bash
        node string.js
        ```
        > *Expected Output:* Sets a key (e.g., `user:1`) and retrieves it. Demonstrates basic caching.

    * **Test Queues (Lists):**
        ```bash
        node list.js
        ```
        > *Expected Output:* Pushes items to a list and pops them. Simulates a FIFO (First-In-First-Out) queue.

---

## 🧠 Technical Concepts

### 1. Caching Strategy (String Data Type)
The `string.js` file demonstrates how to reduce database load by storing frequent queries in Redis.
* **Command:** `SET key value EX 10`
* **Concept:** TTL (Time to Live) is used to automatically expire stale data.

### 2. Message Queues (List Data Type)
The `list.js` file demonstrates how to use Redis as a lightweight message broker.
* **Commands:** `LPUSH` (Producer) and `RPOP` (Consumer).
* **Use Case:** Useful for background job processing (e.g., sending emails asynchronously).

---

## 👤 Author

**Yash**
* [GitHub Profile](https://github.com/yash252525)
