# Srajan_Portfolio

A modern, responsive portfolio website built with React and Sanity.io. This project showcases professional skills, work experience, and projects with dynamic content management.

## 🚀 Features

- **Dynamic Content:** Managed via Sanity.io CMS.
- **Responsive Design:** Optimized for all devices using SCSS.
- **Animations:** Smooth transitions and effects powered by Framer Motion.
- **Components:** Modular structure including About, Skills, Work, Testimonials, and Contact sections.

## 🛠 Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [SCSS](https://sass-lang.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Backend / CMS:**
  - [Sanity.io](https://www.sanity.io/)

## 📂 Project Structure

```bash
Sr_Portfolio/
├── frontend-react/      # The React frontend application
│   ├── src/
│   │   ├── component/   # Reusable UI components
│   │   ├── container/   # Main page sections (Header, About, Work, etc.)
│   │   └── client.js    # Sanity client configuration
└── backend_sanity/      # Sanity Studio configuration
    └── portfolio/       # Sanity project files
```

## ⚙️ Installation & Run

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### 1. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend-react
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in `frontend-react` and add your Sanity credentials:

```env
REACT_APP_SANITY_PROJECT_ID=your_project_id
REACT_APP_SANITY_TOKEN=your_api_token
```

Start the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

### 2. Backend (Sanity) Setup

Navigate to the sanity project directory:

```bash
cd backend_sanity/portfolio
```

Install dependencies:

```bash
npm install
```

Start the Sanity Studio:

```bash
npm run dev
# or if using sanity cli directly
sanity start
```

The Studio will run at `http://localhost:3333`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the information in `package.json`.
