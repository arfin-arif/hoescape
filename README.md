# Hoescape - Hotel Management System

## Overview

Hoescape is a comprehensive hotel management system designed for hotel owners and administrators. It provides a suite of tools for managing hotels, employees, and bookings efficiently. The system includes several key features such as a dashboard, booking requests management, hotel management, modules, transport management, and settings configuration.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dashboard**: Provides an overview of the hotel operations and key metrics.
- **Booking Request Management**: Allows administrators to view and manage booking requests.
- **Hotel Management**: Enables the addition and management of hotels, including details and services.
- **Modules**: Offers various modules to enhance hotel operations.
- **Transport Management**: Manages transportation services for guests.
- **Settings**: Configures system settings and preferences.

## File Structure

```plaintext
Hoescape
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── backend
│   ├── src
│   ├── package.json
│   └── ...
```

## Technologies Used

### Backend

The backend of Hoescape is built with Node.js and Express, utilizing a range of modern technologies to ensure robust functionality and security.

- **Node.js**
- **Express**
- **Mongoose** (MongoDB)
- **JWT** (Authentication)
- **bcrypt** (Password hashing)
- **Multer** (File uploads)
- **Cors**
- **Dotenv** (Environment variables)
- **Winston** (Logging)
- **Zod** (Validation)

`

### Frontend

The frontend of Hoescape is built using React and Vite, providing a modern and responsive user interface.

- **React**
- **React Router**
- **Redux Toolkit** (State management)
- **React Query** (Data fetching)
- **Axios** (HTTP client)
- **Framer Motion** (Animations)
- **React Beautiful DnD** (Drag and Drop)
- **React Icons**
- **Sass** (Styling)

## Installation

To install and run the Hoescape project, follow these steps:

### Backend

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables by creating a `.env` file based on the `.env.example` provided.
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Usage

After installation, you can access the frontend application in your browser at the URL provided by the development server ( `http://localhost:3000`). Use the admin interface to manage hotels, employees, bookings, and other aspects of hotel operations.
