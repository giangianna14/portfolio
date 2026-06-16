<div align="center">
  <br />
  <h1>🚀 Gian Gianna | Portfolio</h1>
  <p>
    <strong>Software Engineer (Data Automation & Backend API)</strong>
  </p>
  <p>
    A high-performance, engineering-focused personal portfolio website. Designed to showcase enterprise-grade backend systems, automated data pipelines, and intelligent telecommunication monitoring dashboards.
  </p>
  <br />
</div>

## 🌟 Overview

This repository contains the source code for my professional portfolio. It is built using modern frontend technologies to deliver a fast, responsive, and cinematic user experience. The portfolio explicitly highlights my freelance and enterprise experiences across platforms like Upwork, Fiverr, and Sribulancer.

### 🔥 Key Features
- **Cinematic Dark Theme**: Crafted with TailwindCSS, utilizing a sophisticated color palette (`#0a0a0a`, `#141414`) and smooth micro-animations.
- **Live Architecture Diagrams**: Features dynamic architecture visualizations rendered in real-time using [Mermaid.js](https://mermaid.js.org/). 
- **Printable Resume API**: Includes a highly optimized, print-ready HTML resume (`/resume.html`) that automatically triggers the browser's PDF export.
- **Dynamic SEO**: Implemented `react-helmet-async` for robust page metadata, tailored specifically for web crawlers and social media sharing.
- **Responsive Layout**: Fluid design that works flawlessly on mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

This portfolio itself is built with:
- **Core**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Routing**: React Router DOM v7
- **Diagrams**: Mermaid (`mermaid`)

---

## 🚀 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/giangianna14/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🚢 CI/CD & Deployment (Dokploy)

This project is fully containerized and optimized for deployment on [Dokploy](https://dokploy.com/) (or any Docker-compatible PaaS). It utilizes a multi-stage `Dockerfile` to build the Vite app and serve it via an Nginx alpine container, ensuring blazing fast load times and proper SPA routing.

### Steps to Deploy via Dokploy:
1. **Connect Repository**: In your Dokploy dashboard, create a new **Application** and connect this GitHub repository.
2. **Build Type**: Select **Dockerfile** as the build engine.
3. **Branch**: Select your main branch (e.g., `main`).
4. **Port**: Set the exposed container port to `80` (Nginx default).
5. **Auto Deploy**: Enable auto-deploy to trigger CI/CD automatically on every `git push`.
6. Click **Deploy**. Dokploy will handle the rest, including SSL provisioning and routing.

---

## 💼 Core Competencies Highlighted

My actual engineering expertise highlighted in this portfolio includes:
- **Backend API**: Python (FastAPI), Java (Spring Boot), PostgreSQL, Docker.
- **Data Automation**: Pandas, Web Scraping, PDF/Excel Auto-Gen.
- **Integrations**: WhatsApp Bot / Webhooks, SMTP Email Servers.
- **Dashboards**: Streamlit, Plotly Data Visualization.

---

## 📫 Connect With Me

I am actively open for freelance and enterprise opportunities worldwide. 

- **LinkedIn**: [linkedin.com/in/giangianna](https://www.linkedin.com/in/giangianna/)
- **Upwork**: [Gian Gianna on Upwork](https://www.upwork.com/freelancers/~017ee4c45b19924f67)
- **Fiverr**: [giangianna14 on Fiverr](https://www.fiverr.com/giangianna14)
- **Sribu**: [giangianna on Sribu](https://www.sribu.com/id/users/giangianna)
- **Email**: [gian.ule@gmail.com](mailto:gian.ule@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ using React & TailwindCSS.</sub>
</div>
