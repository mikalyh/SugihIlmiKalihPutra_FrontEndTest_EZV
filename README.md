# 📝 Next.js Todo App

This is a todo app built with Next.js for Skill Test PT. EZV Service Indonesia.

## 🚀 Features

- ✅ View todo list in responsive grid layout  (Using SSR with RTK-Query)
- ✅ Detail view with status and metadata  (Using ISR with RTK-Query)
- ✅ Create todo form with Formik + Yup validation  (Using RTK-Query Mutation)
- ✅ Pagination with navigation controls  (Using RTK-Query)
- ✅ Styled with Tailwind CSS  
- ✅ Built using Next.js Page Router  
- ✅ REST API integration with [jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)

---

## 🛠️ Prerequisites

Before running the project, make sure you have:

- **Node.js** `v18` or later  
- **npm** or **yarn**

---

## 📦 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/mikalyh/SugihIlmiKalihPutra_FrontEndTest_EZV.git
   cd SugihIlmiKalihPutra_FrontEndTest_EZV
   ```

2. **Install dependencies**  
    Using npm:
   ```bash
   npm install
   ```
    Or using yarn:
   ```bash
   yarn
   ```
3. **Build The App (One-time)**   
    Using npm:
   ```bash
   npm run build
   ```
    Or using yarn:
   ```bash
   yarn build
   ```
4. **Start The App**   
    Using npm:
   ```bash
   npm run start
   ```
    Or using yarn:
   ```bash
   yarn start
   ```
Then visit: http://localhost:3000

**Start as Development Mode**   
Using npm:
   ```bash
   npm run dev
   ```
   
Or using yarn:
   ```bash
   yarn dev
   ```
## 📂 About the Project

This project is structured to follow clean separation of concerns between components, pages, and logic:
```bash
.
├── assets/              # Assets (Images, Animations, etc)
├── components/          # Reusable UI components (TodoCard, Pagination, Footer, etc.)
├── lib/                 # Redux store setup
├────── features/        # RTK Query API slice for fetching todos
├── pages/               # Next.js page-based routing
├────── index.tsx        # Main Page (Todo List)
├────── create.tsx       # Form Page (Create Todo)
├────── detail/[id].tsx  # Detail Page (The Detail of Todo Task)
├── public/              # Static assets (e.g. .svg files)
├── styles/              # Tailwind config and global CSS
├── types/               # TypeScript type definitions
├── README.md
└── ...
```

## 🧰 Tech Stack

- Next.js – React framework for server/client rendering
- TypeScript – Static type checking
- Lottie – Animations
- Tailwind CSS – Utility-first CSS styling
- RTK Query – Data fetching and caching
- Formik + Yup – Form state and validation
- Redux Toolkit – App-wide state management
- JSONPlaceholder API – Simulated REST API backend

## 🙏 Acknowledgments
- Built by [Sugih Ilmi Kalih Putra](https://github.com/Mikalyh) 
- Special thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com) for free fake APIs

## 💖 Follow Me
- [GitHub](https://github.com/Mikalyh) 
- [Instagram](https://www.instagram.com/mikalyh_/) 
- [Tiktok](https://www.tiktok.com/@_mikalyh) 
- [Youtube](https://www.youtube.com/@mikalyh) 
- [Linkedin](https://www.linkedin.com/in/sugih-ilmi-kalih-putra-8a19a0185/) 

## 🖼️ Screenshots
![S1.](/assets/images/ss_1.jpeg)
![S2.](/assets/images/ss_2.jpeg)
![S3.](/assets/images/ss_3.jpeg)
![S4.](/assets/images/ss_4.jpeg)
![S5.](/assets/images/ss_5.jpeg)