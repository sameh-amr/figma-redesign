    // src/main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App'; // This will be your main application component (content from page.tsx)
    import './globals.css'; // Import your global styles from the src directory

    // Find the root element in index.html
    const container = document.getElementById('root');

    // Create a root for concurrent rendering
    // Using non-null assertion (!) here assuming the 'root' element exists in index.html
    const root = ReactDOM.createRoot(container!);

    // Render your main application component
    root.render(
      <React.StrictMode>
        <App /> {/* Render your main application component */}
      </React.StrictMode>,
    );
    