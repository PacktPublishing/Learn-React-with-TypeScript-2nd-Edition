import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return <h1>My React and TypeScript App!</h1>;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
