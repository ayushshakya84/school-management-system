# School Management System

This is a comprehensive School Management System built with **React**, **Node.js**, **Express**, and **MySQL**, all containerized with **Docker**.

---

## 📁 Project Structure

```
school-management-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js               # Sequelize DB connection
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── adminController.js
│   │   │   ├── teacherController.js
│   │   │   └── studentController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js         # JWT verification & role checks
│   │   │   └── validationMiddleware.js   # Input validation
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Student.js
│   │   │   ├── Teacher.js
│   │   │   ├── Course.js
│   │   │   ├── Attendance.js
│   │   │   ├── Grade.js
│   │   │   ├── Timetable.js
│   │   │   └── index.js                  # Model associations
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   ├── teacherRoutes.js
│   │   │   └── studentRoutes.js
│   │   ├── seeders/
│   │   │   └── seed.js                   # Sample data
│   │   └── server.js                     # Express app entry point
│   ├── .env.example                      # Environment variables template
│   └── Dockerfile
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── index.js                  # API call functions
│   │   ├── assets/                       # Images, icons, etc.
│   │   ├── components/
│   │   │   ├── common/                   # Reusable components (buttons, modals)
│   │   │   ├── layout/                   # Sidebar, Navbar
│   │   │   └── dashboard/                # Dashboard specific components
│   │   ├── context/
│   │   │   └── AuthContext.js            # React Context for auth
│   │   ├── hooks/                        # Custom hooks
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.js
│   │   │   │   ├── ManageStudents.js
│   │   │   │   └── ManageTeachers.js
│   │   │   ├── teacher/
│   │   │   │   ├── TeacherDashboard.js
│   │   │   │   └── MarkAttendance.js
│   │   │   └── student/
│   │   │       ├── StudentDashboard.js
│   │   │       └── ViewGrades.js
│   │   ├── services/                     # Auth service, etc.
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env.example
│   └── Dockerfile
│
├── .gitignore
└── docker-compose.yml
```

---

## 🛠 How to Run the Application

### ✅ Prerequisites

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

---

### ⚙️ Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/ayushshakya84/school-management-system.git
cd school-management-system
```

*(Or create the file structure above and populate it with the code.)*

---

#### 2. Configure Environment Variables

**Backend:**

Copy the `.env.example` in the backend and rename it to `.env`, then fill in your own values.

```env
# backend/.env
NODE_ENV=development
PORT=5000
DB_HOST=mysql_db
DB_USER=root
DB_PASSWORD=your_strong_password
DB_NAME=school_db
JWT_SECRET=your_jwt_secret_key
```

**Frontend:**

```env
# frontend/.env
REACT_APP_API_URL=http://localhost:5000/api
```

---

#### 3. Build and Run with Docker Compose

From the project root directory, run:

```bash
docker-compose up --build
```

> The `--build` flag is only needed the first time or when you change the Dockerfile or dependencies.

This command will:

* Pull the `mysql:8.0` image
* Build backend and frontend Docker images
* Start MySQL, backend, and frontend containers
* Run DB migrations and seed initial data

---

## 🌐 Access the Application

* **Frontend (React App)**: [http://localhost:3000](http://localhost:3000)
* **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Sample Login Credentials

You can use the seeded data to log in:

### Admin

* **Email**: `admin@school.com`
* **Password**: `password123`

### Teacher

* **Email**: `teacher1@school.com`
* **Password**: `password123`

### Student

* **Email**: `student1@school.com`
* **Password**: `password123`

---

## 📍 Stopping the Application

To stop all running containers, press `CTRL+C` in the terminal, or run:

```bash
docker-compose down
```

To also remove volumes and delete MySQL data:

```bash
docker-compose down -v
```

---

## 📋 License

This project is open-source. You can use and modify it as needed.
