import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './Styles/GlobalStyle';
import { GlobalProvider } from './Context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>

  </React.StrictMode>
);
















/*NOTES
1)axios->Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It's often used in React to interact with APIs, allowing you to fetch, post, update, or delete data from a server.
2)moment->oment.js is a library for parsing, validating, manipulating, and displaying dates and times in JavaScript. It's especially useful for formatting dates in React applications.
3) React-Chartjs-2-> is a React wrapper for Chart.js, a popular JavaScript library for creating charts. It allows you to create various types of charts (e.g., line, bar, pie) in your React application.
4)React-Datepicker-> is a customizable date picker component for React. It provides a user-friendly interface for selecting dates in forms or applications.
5)
*/