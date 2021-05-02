import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import ReactDOM from 'react-dom';
import  './index.css';

const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['One Piece']);
    
    

    // const handleAdd =  () => {

    //     const nuevaCat = 'SexSex';

    //     setCategorias([ ...categorias, nuevaCat]);


    // }

    return(
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias}/>
    <hr />
    
    <ol>

      {
        
            categorias.map( categoria => (

              <GifGrid 
                key = { categoria }
                categoria = { categoria }
              />

            ))
      }           
        
    </ol>


    </>
    )
};

export default GifExpertApp;