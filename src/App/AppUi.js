import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoS } from '../TodoS';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
// Desescructuramos las nuesvas props
function AppUi() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoS />

        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

            {!!openModal && (
              <Modal>
            
                <TodoForm/>
         
              </Modal>
            )}
    
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUi };