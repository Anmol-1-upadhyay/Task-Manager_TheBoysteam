
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
   ```

2. **Steps to Run Server:**
   - Open the project in any editor of choice.
   - Navigate into the server directory:
     ```bash
     cd server
     ```
   - Run `npm install` to install the packages:
     ```bash
     npm install
     ```
   - Run `npm start` to start the server. If configured correctly, you should see a message indicating that the server is running successfully and DB Connected.

### Client-Side Setup

1. **Environment Variables:**
   Create the `.env` file in the client folder. The `.env` file should contain the following environment variables:
   ```env
   VITE_APP_BASE_URL=http://localhost:8800
   VITE_APP_FIREBASE_API_KEY=Firebase api key
   ```

2. **Steps to Run Client:**
   - Navigate into the client directory:
     ```bash
     cd client
     ```
   - Run `npm install` to install the packages:
     ```bash
     npm install
     ```
   - Run `npm start` to start the app:
     ```bash
     npm start
     ```

3. Open `http://localhost:3000` to view it in your browser.

## Previews

### Login Page Preview
![Login Page Preview](/image.png)

### Admin Dashboard Preview
![Admin Dashboard Preview](/image2.png)

### User Dashboard Preview
![User Dashboard Preview](/image3.png)


## Notes:
- Make sure to replace the placeholders in `.env` files with your actual values.
- Update the image paths to reflect the correct location if needed.

