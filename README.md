# Barbershop Project

A full-stack web application for barbershop management, built with React.js frontend and Spring Boot backend.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Team Members](#team-members)
- [License](#license)

## Overview

This application provides a comprehensive solution for barbershop management, including appointment scheduling, user registration and authentication, service management, and more.

## Features

- User authentication and registration
- Appointment scheduling and management
- Service catalog with pricing
- Barber profiles and availability
- Admin dashboard for business management
- Responsive design for mobile and desktop

## Project Structure

The project is organized with the following structure:

```
barbershop-project/
├── frontend/            # React.js frontend application
├── backend/             # Spring Boot backend application
├── .idea/               # IntelliJ IDEA configuration files
├── .vscode/             # Visual Studio Code configuration files
├── node_modules/        # Node.js dependencies
├── README.md            # This file
└── package.json         # Project configuration and dependencies
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Java JDK 11 or higher
- Node.js (v14.x or higher) and npm (v6.x or higher)
- Maven (for backend build)
- MySQL/PostgreSQL (or your preferred database)
- Git

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install Maven dependencies:
   ```
   mvn install
   ```

3. Configure database connection:
   - Open `src/main/resources/application.properties`
   - Update database credentials and URL as needed

4. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```
   
The backend server will start at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install npm dependencies:
   ```
   npm install
   ```

3. Create `.env` file in the frontend directory with the following:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   ```

4. Start the React development server:
   ```
   npm start
   ```

The frontend application will be available at `http://localhost:3000`.

## Running the Application

### Development Mode

1. Start the backend server from the backend directory:
   ```
   cd backend
   mvn spring-boot:run
   ```

2. In a separate terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Access the application at `http://localhost:3000`

### Production Build

1. Build the frontend:
   ```
   cd frontend
   npm run build
   ```

2. Copy the contents of the `frontend/build` directory to the `backend/src/main/resources/static` directory

3. Build and run the Spring Boot application:
   ```
   cd backend
   mvn clean package
   java -jar target/barbershop-0.0.1-SNAPSHOT.jar
   ```

4. Access the application at `http://localhost:8080`

## API Documentation

The API endpoints are documented using Swagger UI. Once the backend is running, you can access the API documentation at:

```
http://localhost:8080/swagger-ui.html
```

### Main API Endpoints

- **Authentication**
  - POST `/api/auth/login` - User login
  - POST `/api/auth/register` - User registration

- **Appointments**
  - GET `/api/appointments` - List all appointments
  - POST `/api/appointments` - Create new appointment
  - PUT `/api/appointments/{id}` - Update appointment
  - DELETE `/api/appointments/{id}` - Cancel appointment

- **Services**
  - GET `/api/services` - List all services
  - POST `/api/services` - Add new service (admin only)
  - PUT `/api/services/{id}` - Update service (admin only)

- **Barbers**
  - GET `/api/barbers` - List all barbers
  - GET `/api/barbers/{id}` - Get barber details
  - GET `/api/barbers/{id}/availability` - Get barber availability

## Contributing

1. Create a feature branch:
   ```
   git checkout -b feature/your-feature-name
   ```

2. Commit your changes:
   ```
   git commit -m "Add your feature description"
   ```

3. Push to your branch:
   ```
   git push origin feature/your-feature-name
   ```

4. Create a pull request to the `structure` branch

## Team Members

- [Suhrobbek Erkinov] - Project Manager
- [Sogdian Ravshanova] - Frontend Developer
- [Sanjar Yusupjonov] - Backend Developer
- [Malika Ibadlayeva] - UI/UX Designer
- [Saidmurod Xamidov] - Backend Developer

## License

This project is licensed under the MIT License - see the LICENSE file for details.
