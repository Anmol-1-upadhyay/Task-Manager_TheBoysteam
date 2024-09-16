# TaskWave

## Overview

TaskWave is a web application designed to streamline team task management. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this platform provides a user-friendly interface for efficient task assignment, tracking, and collaboration. The application caters to both administrators and regular users, offering comprehensive features to enhance productivity and organization.

## Features

### Admin Features:
- **User Management:**
  - Create admin accounts.
  - Add and manage team members.
- **Task Assignment:**
  - Assign tasks to individual or multiple users.
  - Update task details and status.
- **Task Properties:**
  - Label tasks as todo, in progress, or completed.
  - Assign priority levels (high, medium, normal, low).
- **User Account Control:**
  - Disable or activate user accounts.
  - Permanently delete or trash tasks.

### User Features:
- **Task Interaction:**
  - Change task status (in progress or completed).
  - Add comments or chat to task activities.

### General Features:
- **Authentication and Authorization:**
  - User login with secure authentication.
  - Role-based access control.
- **Profile Management:**
  - Update user profiles.
- **Password Management:**
  - Change passwords securely.
- **Dashboard:**
  - Provide a summary of user activities.
  - Filter tasks into todo, in progress, or completed.

## Technologies Used

### Frontend:
- **React** (Vite)
- **Redux Toolkit** for State Management
- **Headless UI**
- **Tailwind CSS**

### Backend:
- **Node.js** with **Express.js**

### Database:
- **MongoDB** for efficient and scalable data storage

## Setup Instructions

### Server Setup

1. **Environment Variables:**
   Create a file named `.env` in the `server` directory and include the following variables:
   ```env
   MONGODB_URI=your MongoDB URL
   JWT_SECRET=your-secret-key
   PORT=8800
   NODE_ENV=development
