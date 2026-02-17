# Food Delivery App UI (REACT.JS) 🍔

A functional food delivery web application built with **React** that fetches live restaurant data, featuring search, filtering, and client-side routing. This project demonstrates core React concepts including hooks, component composition, routing, and efficient DOM manipulation.

## 🚀 Features

- **Live Data Fetching**: Fetches real-time restaurant data from Swiggy's public API using a CORS proxy.
- **Search Functionality**: Users can search for restaurants by name dynamically.
- **Top Rated Filter**: Filter restaurants with a rating of 4.5+ with a single click.
- **Dynamic Routing**: View detailed menu for each restaurant.
- **Shimmer UI**: Implements a shimmer loading effect for a better user experience while data is being fetched.
- **Lazy Loading**: Optimized performance by lazy loading the Grocery and RestaurantMenu components (Code Splitting).
- **Online Status**: Detects and displays the user's internet connection status.
- **Context API**: Manages global state for logged-in user information.
- **Higher-Order Components**: Enhances restaurant cards with labels (e.g., "Open").
- **Client-Side Routing**: Single Page Application (SPA) navigation using **React Router v7**.
    - **Home**: Displays the list of restaurants.
    - **About**: Project/Author information.
    - **Contact**: Contact details.
    - **Grocery**: A separate section for grocery items (Lazy Loaded).
    - **Restaurant Menu**: Displays menu items for a specific restaurant.
    - **Developer**: Developer profile using Class Components.
    - **Error Page**: Custom error handling for invalid routes.
- **Responsive Design**: Mobile-friendly restaurant card grid layout.

## 🛠️ Tech Stack

- **React 19**: Component-based UI library.
- **Parcel**: Zero-configuration build tool/bundler.
- **React Router**: For handling routing and navigation.
- **ES6+ JavaScript**: Modern JS features.
- **CSS3**: Custom styling for layout and components.

## ⚙️ Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Food-Delivery-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   This will run the app using Parcel at `http://localhost:1234` (or another available port).

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
Food-Delivery-App/
├── src/
│   ├── components/
│   │   ├── About.jsx           # About page component
│   │   ├── Body.jsx            # Main container with search & list logic
│   │   ├── Contact.jsx         # Contact page component
│   │   ├── Developer.jsx       # Developer page (Class Component)
│   │   ├── Error.jsx           # Error page for 404s
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Grocery.jsx         # Grocery page (Lazy Loaded)
│   │   ├── Header.jsx          # Navigation header
│   │   ├── RestaurantCard.jsx  # Individual restaurant display card
│   │   ├── RestaurantMenu.jsx  # Restaurant menu page
│   │   └── Shimmer.jsx         # Loading state component
│   │   └── UserClass.jsx       # User class component
│   ├── utils/
│   │   └── constants.jsx       # Hardcoded strings/URLs
│   │   ├── useOnlineStatus.js  # Custom hook for online status
│   │   └── UserContext.js      # Context for user data
│   └── App.jsx                 # Root component & Router config
├── images/                     # Static assets
├── index.css                   # Global styles
├── index.html                  # Entry HTML file
├── package.json                # Dependencies and scripts
└── ReadMe.md                   # Documentation
```

## 👨‍💻 Author
Mokarram Shahban