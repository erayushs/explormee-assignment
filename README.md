# 📦 Subscription Plans App

A responsive React app that showcases subscription pricing plans, allows users to sign up with validation, and confirms their plan selection with a success message.

---

## 🚀 Features

### 1️⃣ Landing Page (Pricing Plans)

- Displays **3 subscription plans**: **Basic, Standard, Premium**
- Each plan includes:
  - Plan Name
  - Price
  - 3–4 Key Features
- **“Recommended” plan highlighted** visually
- **Choose Plan** button → navigates to the signup form
- **Responsive Design**:
  - 🖥️ Desktop → 3 columns side by side
  - 📱 Mobile → stacked vertically

---

### 2️⃣ Signup Form

- Required fields:
  - Full Name
  - Email (**valid format**)
  - Password (**min 6 characters**)
  - Confirm Password (**must match**)
  - Accept Terms (**checkbox**)
- Real-time validation with clear, user-friendly error messages
- Prevents submission if errors exist

---

### 3️⃣ Confirmation Page

- On successful signup, displays:
  - ✅ Success message with user’s **name, email, and selected plan**
  - Selected plan details
  - **Go Back to Home** button

---

## 🛠️ Tech Stack

- ⚛️ **React.js** (functional components + hooks)
- 🟦 **TypeScript**
- 🌐 **React Router** (for navigation)
- 🎨 **TailwindCSS** (responsive UI & styling)
- 💾 **LocalStorage** (retain selected plan and user details)
