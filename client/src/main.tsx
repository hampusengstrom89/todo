import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodoProvider from './utils/providers/TodoContext.tsx';
import Todos from './views/Todos';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <Todos />
    </TodoProvider>
  </StrictMode>,
);
