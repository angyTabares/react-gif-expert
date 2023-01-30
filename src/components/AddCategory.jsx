import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')

    //aqui el argumento se está desestructurando desde el event.target
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit= ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

    return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
