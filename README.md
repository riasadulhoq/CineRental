# 🎬 CineRental - Movie Rental Application

A modern React-based movie rental application featuring dark mode, shopping cart functionality, and a responsive UI built with Tailwind CSS.

## 🚀 Features

- 📱 Responsive design that works on desktop and mobile
- 🌓 Dark mode support with class-based implementation
- 🛒 Shopping cart functionality with reducer pattern
- 🎯 Movie catalog with details modal
- 💫 Modern UI with Tailwind CSS
- 🔄 Context API for state management
- 🎨 Custom reducers for cart operations

## 🛠️ Technologies Used

- React 19
- Tailwind CSS 3
- Vite 7
- React Context API
- React Hooks (useState, useContext, useReducer)
- React Toastify for notifications

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/riasadulhoq/CineRental.git
cd CineRental
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit the local development URL (typically http://localhost:5173)

## 🎮 Usage

- Browse the movie collection on the main page
- Click on a movie to view detailed information in a modal
- Use the cart icon to manage your movie rentals
- Toggle dark mode using the moon icon
- View cart contents using the shopping cart panel

## 📂 Project Structure

```
src/
├── assets/         # Static assets (icons, movie covers)
├── cine/          # Movie-related components
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   └── MovieDetailsModal.jsx
├── context/       # React Context setup
├── data/         # Movie data and utilities
├── reducers/     # Cart state management
└── components/   # Core UI components
```

## ⚡ Vite Configuration

The project uses Vite with the following official plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) with Fast Refresh
- Tailwind CSS for styling
- ESLint for code quality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.
