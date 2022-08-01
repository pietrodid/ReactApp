import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';



function App() {
  // Desestructuramos los nuevos datos de nustro custom hook
  return (
  <TodoProvider>  
    <AppUi/>
  </TodoProvider>
  );
}

export default App;