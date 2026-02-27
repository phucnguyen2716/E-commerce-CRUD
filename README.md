# 🛒 E-Commerce RESTful API

A clean and scalable RESTful API for an E-commerce system built using **Node.js**, **Express**, and **MongoDB**.

This project provides full CRUD operations for:

- 📂 Categories
- 📦 Products

---

# 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

---

# 📁 Project Structure

```
E-commerce-CRUD/
│
├── models/
│   ├── Product.js
│   └── Category.js
│
├── controllers/
│   ├── productController.js
│   └── categoryController.js
│
├── routes/
│   ├── productRoutes.js
│   └── categoryRoutes.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```
git clone https://github.com/your-username/E-commerce-CRUD.git
cd E-commerce-CRUD
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Create Environment File

Create a `.env` file:

```
PORT=8080
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
```

⚠ Do not add spaces around "="

## 4️⃣ Run Development Server

```
npm run dev
```

Server runs at:

```
http://localhost:8080
```

---

# 📌 API Endpoints

## 🗂 Category Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/categories | Create category |
| GET    | /api/categories | Get all categories |
| GET    | /api/categories/:id | Get category by ID |
| PUT    | /api/categories/:id | Update category |
| DELETE | /api/categories/:id | Delete category |

---

## 📦 Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/products | Create product |
| GET    | /api/products | Get all products (populate category) |
| GET    | /api/products/:id | Get product by ID |
| PUT    | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

---

# 🧪 Example Requests

## Create Category

```
POST /api/categories
```

Body:

```
{
  "name": "Laptop"
}
```

---

## Create Product

```
POST /api/products
```

Body:

```
{
  "name": "MacBook Pro M3",
  "price": 2500,
  "description": "Apple laptop",
  "category": "category_object_id_here"
}
```

---

# 🗄 Database

Database name:

```
ecommerce
```

Collections:

- categories
- products

Relationship:

- Product references Category using ObjectId
- Mongoose `.populate()` is used to retrieve category details

---
---

# 🐳 Docker Setup

This project supports containerization using Docker.

## 🏗 Build Docker Image

```
docker build -t ecommerce-api .
```

## ▶ Run Container

```
docker run -p 8080:8080 --env-file .env ecommerce-api
```

Server will be available at:

```
http://localhost:8080
```

---

# ☸ Kubernetes Deployment

This project includes Kubernetes configuration files:

- deployment.yaml
- service.yaml
- mongo-deployment.yaml
- mongo-service.yaml

## 🚀 Deploy MongoDB

```
kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-service.yaml
```

## 🚀 Deploy API

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## 📌 Check Pods

```
kubectl get pods
```

## 📌 Check Services

```
kubectl get services
```

If using NodePort, access the API via:

```
http://localhost:<nodeport>
```

---

# 🗄 MongoDB in Kubernetes

Inside Kubernetes, the API connects to MongoDB using:

```
mongodb://mongo-service:27017/ecommerce
```

⚠ When running in Kubernetes, make sure your `MONGO_URI` is updated accordingly.

---

# 🏗 Deployment Architecture

- Node.js API runs inside a Pod
- MongoDB runs inside a separate Pod
- Kubernetes Service enables communication between them
- NodePort exposes API externally

```
Client → NodePort Service → API Pod → MongoDB Service → MongoDB Pod
```

---

# 🔥 Production Improvements (Recommended)

- Use PersistentVolume for MongoDB
- Use ConfigMap & Secret instead of .env
- Use Ingress Controller
- Use Horizontal Pod Autoscaler (HPA)
- Deploy to Cloud (AWS EKS / GKE / AKS)
---
# 🔥 Features

✔ Clean MVC architecture  
✔ RESTful API design  
✔ MongoDB integration  
✔ Product–Category relationship  
✔ Environment configuration with dotenv  

---

# 📈 Future Improvements

- JWT Authentication
- Pagination
- Search & Filter
- Image Upload
- Role-based Access Control
- Shopping Cart & Order System
- Docker & Kubernetes deployment

---

# 👨‍💻 Author

Nguyễn Hoàng Phúc