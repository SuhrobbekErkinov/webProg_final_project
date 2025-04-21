# Hair Salon Website

A modern, responsive salon website built with React that allows customers to browse services, learn about the team, and book appointments online.


## ✨ Features

### 🌐 Website Features
- **Gender-Based Services**: Separate sections for male and female clients
- **Team Showcase**: Display of salon professionals with bios and photos
- **Service Cards**: Visual presentation of available services with pricing
- **Responsive Design**: Fully adaptable layout for all device sizes
- **Interactive UI**: Hover effects and smooth transitions for better UX
- **Feedback System**: Form for clients to submit reviews and feedback
- **Contact Information**: Address, hours, and communication channels
- **Newsletter Subscription**: Email collection for marketing purposes

### 💇‍♀️ Booking System
- **Gender-based filtering** of services and stylists
- **Interactive calendar** with automatic date validation
- **Dynamic time slots** based on service duration
- **Step-by-step booking process** with clear instructions
- **Form validation** for all user inputs
- **Service duration management** affecting available time slots
- **Mobile-friendly booking interface**

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with gender-based sections
│   ├── BookingPage.js     # Appointment booking system
│   ├── Footer.js          # Contact information and links
│   ├── HomePage.jsx       # Main landing page
│   ├── MalePage.js        # Male services and masters
│   └── FemalePage.js      # Female services and masters
│
├── styles/
│   ├── BookingPage.css    # Styling for booking functionality
│   ├── MalePage.css       # Styling for male services page
│   └── Navbar.css         # Navigation styling
│
├── data/
│   └── services.js        # Service definitions and pricing
│
├── App.js                 # Main routing and layout
└── index.js               # Entry point
```

## 💻 Technical Implementation

### Dependencies
- **React**: Frontend library for building the user interface
- **React Router DOM**: For navigation and routing between pages
- **CSS**: Custom styling with responsive design principles

### Key Components
- **Navigation System**: Dynamic navbar that adjusts based on current page
- **Booking Form**: Multi-step process for appointment scheduling
- **Service Cards**: Interactive cards displaying service information
- **Team Cards**: Profiles for salon professionals
- **Feedback Form**: Customer review submission
- **Calendar Component**: Custom date picker for appointments

## 📱 Pages

### Home Page
- Hero section with salon introduction
- Featured services showcase
- Quick access to booking
- Team highlights
- Testimonials and statistics

### Male/Female Service Pages
- Gender-specific service offerings
- Team members specializing in respective services
- Service cards with:
  - Service name
  - Duration
  - Price
  - Description
  - Booking button

### Booking Page
- Step-by-step booking process:
  1. Gender selection
  2. Service selection
  3. Stylist selection
  4. Date and time selection
  5. Personal information
  6. Confirmation

## 🔧 Booking System

### Overview
The booking system enables users to schedule appointments with service providers through a responsive, user-friendly interface with a step-by-step process.

### Features

#### 1. Gender-based Service Selection
- Users select gender (male/female)
- Services and masters filtered by gender
- Each service has associated duration affecting time slots

#### 2. Service Provider Selection
- Male masters: Will Smith, Theo James, Ma Dong Seok, Kerem Bursin, Johnny Depp, Ji Chang Wook
- Female masters: Emma Watson, Hande Ercel, Kim Ji Won, Selena Gomez, Son Hye Kyo, Tyla

#### 3. Service Type Selection
- Male services: Beard Trim (15 min), Shaving (20 min), Haircuts (30 min)
- Female services: Hairstyles (60 min), Haircut (45 min), Coloring (120 min), Hair Treatments (90 min)

#### 4. Interactive Calendar
- Dynamic calendar with month navigation
- Automatic disabling of past dates and Sundays
- Visual indication of selected date

#### 5. Dynamic Time Slots
- Generated based on service duration
- Business hours: 9 AM to 9 PM
- Slots adjust when service selection changes

#### 6. Form Validation
- Validation for all required fields
- Visual error indicators and messages
- Prevents submission of incomplete data

### Key Functions

#### Form Handling
- `handleSubmit()`: Validates and processes booking

#### Calendar Management
- `getMonthData()`: Generates calendar data
- `previousMonth()`: Navigates to previous month
- `nextMonth()`: Navigates to next month
- `handleDateClick()`: Handles date selection

#### Time Slot Generation
- `generateTimeSlots()`: Creates time slots based on service duration

## 🚀 Setup & Installation

1. **Clone the repository**
   ```
   git clone https://github.com/your-username/minerva-salon-website.git
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the development server**
   ```
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```


This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
