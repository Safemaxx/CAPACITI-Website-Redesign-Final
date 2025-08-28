
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './pages/AboutPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const render = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#about')) {
    root.render(
      <React.StrictMode>
        <AboutPage/>
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

render();
window.addEventListener('hashchange', render);
