# 🛒 E-commerce-CRUD

A simple RESTful API for an E-commerce system built with Node.js, Express, and MongoDB.

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

Create a `.env` file in the root directory:

```
PORT=8080
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
```

⚠ Do not add spaces around "="

## 4️⃣ Run Server

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
| POST   | /api/categories      | Create category |
| GET    | /api/categories      | Get all categories |
| GET    | /api/categories/:id  | Get category by ID |
| PUT    | /api/categories/:id  | Update category |
| DELETE | /api/categories/:id  | Delete category |

---

## 📦 Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/products      | Create product |
| GET    | /api/products      | Get all products (populate category) |
| GET    | /api/products/:id  | Get product by ID |
| PUT    | /api/products/:id  | Update product |
| DELETE | /api/products/:id  | Delete product |

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
  "name": "Macbook Pro M3",
  "price": 2500,
  "description": "Apple laptop",
  "category": "category_object_id_here"
}
```

---

# 🗄 Database

Database Name:

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

---

# 👨‍💻 Author

Nguyễn Hoàng Phúc
