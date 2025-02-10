
  <div align="center">
  <img height="400" src="https://media.licdn.com/dms/image/v2/D562DAQEL60K-xSwGog/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1739161436217?e=1739768400&v=beta&t=5OJWoanq1ee53IxJKr0zhhIVi-Nf-Q9XhwwhV0lJWNg"  />
</div>

# ⭐ Service Review System  

🚀 **Service Review System** is a full-stack web application where users can **add, manage, and review services**. Users can update or delete their own services and reviews, making the platform **interactive** and **engaging**. The UI is **beautifully designed**, featuring smooth animations powered by **Framer Motion**, and is fully **responsive** across all devices.  

## 🌟 Features  

✅ **User-Added Services** – Users can create and manage their own services.  
✅ **Service Reviews** – Users can leave reviews and update or delete them.  
✅ **Pagination Support** – Services are paginated for a better experience.  
✅ **Public Review System** – Anyone can see all reviews.  
✅ **Dark/Light Mode** – User-friendly theme options.  
✅ **Framer Motion Animations** – Smooth and engaging animations.  
✅ **Mobile-Friendly UI** – Works seamlessly on Mobile, Tablet, and Desktop.  

---

## 🛠 Tech Stack  

### **Frontend**  
- **React.js** – UI framework  
- **React Router** – Client-side routing  
- **Tailwind CSS & DaisyUI** – Modern styling  
- **Framer Motion** – Smooth animations  
- **React Hook Form** – Form handling  
- **React Icons** – Icon library  
- **SweetAlert2** – Beautiful alerts  

### **Backend**  
- **Node.js & Express.js** – API & server  
- **MongoDB** – NoSQL database  
- **Firebase** – Secure authentication  
- **Dotenv** – Environment variable management  

---

## 🚀 Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/service-review-system.git
cd service-review-system
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**  

Create a `.env` file in the root directory and add:  

```sh
# Firebase Configuration
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id

# Backend API URL
VITE_API_URL=https://your-backend-url.com
```

**Replace** `your_firebase_api_key`, `your_firebase_auth_domain`, etc., with actual Firebase credentials.

---

### **4️⃣ Run the Development Server**  
```sh
npm run dev
```
The frontend will be accessible at `http://localhost:5173`.  

---

## 📂 Project Structure  

```
📦 service-review-system
 ┣ 📂 src
 ┃ ┣ 📂 components  # Reusable UI components
 ┃ ┣ 📂 pages       # Application pages
 ┃ ┣ 📂 hooks       # Custom React hooks
 ┃ ┣ 📂 utils       # Utility functions
 ┃ ┣ 📜 main.jsx    # Entry point
 ┃ ┣ 📜 App.jsx     # Main application component
 ┣ 📜 package.json  # Dependencies and scripts
 ┣ 📜 vite.config.js # Vite configuration
 ┣ 📜 .eslintrc.js   # ESLint configuration
 ┣ 📜 tailwind.config.js  # Tailwind CSS settings
 ┣ 📜 README.md     # Documentation
```

---

## 🚀 API Endpoints  

| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| GET    | `/services`      | Fetch all services         |
| POST   | `/services`      | Add a new service          |
| DELETE | `/services/:id`  | Remove a service           |
| GET    | `/reviews`       | Fetch all reviews          |
| POST   | `/reviews`       | Add a new review           |
| PATCH  | `/reviews/:id`   | Update a review            |
| DELETE | `/reviews/:id`   | Remove a review            |

---

## 🎨 UI Preview  

![Service Review System UI](https://your-image-url.com) <!-- Replace with an actual screenshot -->

---

## 🤝 Contributing  

We welcome contributions! 🎉  

### **How to Contribute:**  
1. **Fork the repository** 📌  
2. **Create a feature branch** (`git checkout -b feature-branch`)  
3. **Make your changes** and commit (`git commit -m "Add new feature"`)  
4. **Push your branch** (`git push origin feature-branch`)  
5. **Open a Pull Request** 🚀  

### **Contribution Guidelines:**  
✅ Follow the **code style** defined in `.eslintrc.js`.  
✅ Keep UI changes **responsive** and **accessible**.  
✅ Clearly **describe** your pull request.  
✅ Ensure **no sensitive data** is pushed (check `.env`).  

---

## 📜 License  

This project is licensed under the **ISC License**.  

---

## 🔗 Connect With Me  

- **GitHub**:https://github.com/minhaj-uddin-arif-23
- **Portfolio**:https://malicious-territory.surge.sh/  
  



🚀
