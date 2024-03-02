/* eslint-disable react/prop-types */

import '../styles/FormSearch.css'

export function FormSearch({ handleSumit, handleChange, busqueda }) {
    return (
        <form className="form-search" onSubmit={handleSumit}>
            <input
                className='input-form-search'
                onChange={handleChange}
                value={busqueda}
                name='query'
                type='search'
                placeholder='Busca un artista'
            />
            <button
                className='button-form-search'
                type='submit'  >Buscar</button>
        </form>
    )
}