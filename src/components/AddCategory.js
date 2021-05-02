import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');   //Aqui se coloca el esta inicial en comillas porque si se deja en 
                                                        //blanco entrega undefined.

    const handleInputChange = (e) => {

        setInputValue ( e.target.value )

    };

const   handleSubmit = (e) => {

    e.preventDefault()  // Esto se hace para prevenir el comportamiento del formulario
                        // por defecto.\

        if (inputValue.trim().length > 2){

            
            setCategorias ( cats => [inputValue, ...cats]);
        
            setInputValue('');
        }
};


//onSubmit se hace para que ejecute algo de JS cuando se envie el 
// formulario. En esta ejemplo se ejecuta un function
    return(
        
        <form onSubmit={ handleSubmit }> 

            <input
            type='text'         
            value={ inputValue }
            onChange={ handleInputChange }
            />

        </form>
       
    )
}

// Aqui se coloca  un ProTypes donde debe asegurarse que AddCategory reciba una funcion en este caso

AddCategory.propTypes = {

    setCategorias: PropTypes.func.isRequired  

}



