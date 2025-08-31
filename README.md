# 📝 MindFulBytes - Blog Website (Frontend)

MindFulBytes is a modern blog platform where **admins can post blogs** and **users can read and comment** on them.  
This repository contains the **frontend part** of the project built with React.

---
## 📂 Project Structure

``` bash
└── 📁client
    └── 📁public
        ├── favicon.svg
    └── 📁src
        └── 📁assets
            └── 📁logo
                ├── MindFulBytes.png
            └── 📁MindFulBytes-assests
                ├── add_icon.svg
                ├── arrow.svg
                ├── assets.js
                ├── bin_icon.svg
                ├── blog_icon.png
                ├── blog_pic_1.png
                ├── blog_pic_10.png
                ├── blog_pic_2.png
                ├── blog_pic_3.png
                ├── blog_pic_4.png
                ├── blog_pic_5.png
                ├── blog_pic_6.png
                ├── blog_pic_7.png
                ├── blog_pic_8.png
                ├── blog_pic_9.png
                ├── comment_icon.svg
                ├── cross_icon.svg
                ├── dashboard_icon_1.svg
                ├── dashboard_icon_2.svg
                ├── dashboard_icon_3.svg
                ├── dashboard_icon_4.svg
                ├── email_icon.png
                ├── facebook_icon.svg
                ├── favicon.svg
                ├── googleplus_icon.svg
                ├── gradientBackground.png
                ├── home_icon.svg
                ├── index.js
                ├── list_icon.svg
                ├── logo_light.svg
                ├── logo.svg
                ├── rich-text-css.txt
                ├── star_icon.svg
                ├── tick_icon.svg
                ├── twitter_icon.svg
                ├── upload_area.svg
                ├── user_icon.svg
        └── 📁components
            └── 📁admin
                ├── BlogTableItem.jsx
                ├── CommentTableItem.jsx
                ├── Login.jsx
                ├── Sidebar.jsx
            ├── BlogCard.jsx
            ├── BlogList.jsx
            ├── Footer.jsx
            ├── Header.jsx
            ├── Loader.jsx
            ├── Navbar.jsx
            ├── Newsletter.jsx
        └── 📁pages
            └── 📁admin
                ├── AddBlog.jsx
                ├── Comment.jsx
                ├── Dashboard.jsx
                ├── Layout.jsx
                ├── ListBlog.jsx
            ├── Blog.jsx
            ├── Home.jsx
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```

---

## 🚀 Features

- 📰 Users can **read blogs** categorized into Lifestyle, Finance, Technology, and Startup.  
- 💬 Users can **comment on blogs**.  
- ✍️ Only **admins can post and manage blogs**.  
- 📱 **Responsive UI** with modern design (works on desktop & mobile).  
- ⚡ Built with **React + TailwindCSS + React Router**.

---

## 🛠️ Tech Stack

- **React.js** – Frontend library  
- **React Router DOM** – Navigation  
- **Tailwind CSS** – Styling  
- **Axios / Fetch API** – API integration (for backend in future)  

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi1224/MindFulBytes.git
   cd MindFulBytes/client

2. Install dependencies:
    ```bash
    npm install

3. Run the project:
    ```bash
    npm run dev

4. Open in browser:
    ```bash
    http://localhost:5173

---

## 📌 Future Improvements

- 🔐 Authentication & Authorization (JWT, OAuth)
- 🗄️ Backend with Node.js + Express + MongoDB
- 📊 Dashboard for Admin to manage blogs & comments
---