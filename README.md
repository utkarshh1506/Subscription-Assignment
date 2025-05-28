
# 🔐 Subscription-Based Backend Microservice

A scalable, secure, and modular backend microservice that handles **user authentication**, **subscription plans**, and **subscription management** for a SaaS platform. Built with **Node.js**, **Express**, **MongoDB**, **JWT**, and **Redis**.

---

## 🚀 Features

- User registration and login with JWT auth
- Subscription plan creation and retrieval
- Subscribe, update, retrieve, and cancel user subscriptions
- Subscription status (ACTIVE, CANCELLED, EXPIRED)
- Plan caching with Redis
- Clean MVC architecture
- Proper validation and error handling

---

## 🛠️ Tech Stack

| Layer              | Technology                        |
|-------------------|-----------------------------------|
| Language           | Node.js                           |
| Framework          | Express.js                        |
| Database           | MongoDB                           |
| Caching Layer      | Redis                             |
| Auth               | JWT                               |
| Architecture       | MVC                               |
| Environment Config | dotenv                            |
| Validator          | express-validator                 |

---

## 📁 Project Structure

```
.
├── config/
│   └── db.js              # MongoDB and Redis config
├── controllers/
│   ├── auth.controller.js
│   ├── plan.controller.js
│   └── subscription.controller.js
├── middlewares/
│   ├── auth.middleware.js
│   └── error.middleware.js
├── models/
│   ├── Plan.js
│   ├── Subscription.js
│   └── User.js
├── routes/
│   ├── auth.routes.js
│   ├── plan.routes.js
│   └── subscription.routes.js
├── utils/
│   └── subscriptionStatus.js
├── .env
├── app.js
├── server.js
└── README.md
```

---



## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yourname/subscription-service.git
cd subscription-service

# Install dependencies
npm install

# Start MongoDB and Redis servers locally

# Start the app
npm start
```

---

## 📬 API Endpoints

### 🔐 Auth

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | /api/auth/register    | Register a user       |
| POST   | /api/auth/login       | Login and get token   |

---

### 📦 Plans

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | /api/plans     | Get all available plans      |
| (POST) | /api/plans     | *(Optional)* Create a plan   |

---

### 🧾 Subscriptions

| Method | Endpoint                | Description                   |
|--------|-------------------------|-------------------------------|
| POST   | /api/subscriptions      | Subscribe to a plan           |
| GET    | /api/subscriptions      | Get current user's subscription |
| PUT    | /api/subscriptions      | Update subscription plan      |
| DELETE | /api/subscriptions      | Cancel subscription           |

> 🔐 All subscription routes are protected (require JWT)

---

## 🔁 Redis Caching

- Redis is used to cache the `/plans` data for performance.
- TTL (time to live) can be adjusted inside `plan.controller.js`.

---

## 🔒 JWT Authentication

- Generate on login
- Send in header:  
```
Authorization: Bearer <your_token>
```

---

## 🧪 Postman API Testing Guide

1. **Register** – `POST /api/auth/register`  
2. **Login** – `POST /api/auth/login` → get JWT  
3. **Get Plans** – `GET /api/plans`  
4. **Subscribe** – `POST /api/subscriptions` with `planId`  
5. **Update** – `PUT /api/subscriptions` with new `planId`  
6. **Cancel** – `DELETE /api/subscriptions`

---

## 🌐 Sample Plan Document

To insert manually via MongoDB Compass:
```json
{
  "name": "Pro Plan",
  "price": 49,
  "duration": 30,
  "features": ["Priority Support", "Multi-user", "Advanced Analytics"]
}
```

---

## 🧠 Future Improvements

- Payment gateway integration
- Email notifications
- Subscription analytics
- Admin panel for managing plans

---

## 🧑‍💻 Author

Made with ❤️ by [Utkarsh Singh](https://github.com/utkarshh1506)

---

