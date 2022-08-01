import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submmit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};