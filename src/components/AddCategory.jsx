import { useState } from "react"

//recibe un props, por lo que hay que desestructurarlo
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories(categories=>[...categories, inputValue]);
    setInputValue('');
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //lo de abajo es el codigo completo, sintetizamos y queda lo no comentado
        // onChange={(event)=>onInputChange(event)}
        onChange={onInputChange}
      />
    </form>

  )
}
