import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {categoria} ) => {


const { data:images, loading } = useFetchGifs( categoria );


    

    //const [images, setImages] = useState([]);

    // Leer bien para que sirve
    // useEffect( () => {

    //     getGifs(categoria)
    //     .then( setImages);   

    // }, [categoria])

   
    return (
    <>
        <h2 className="animate__animated animate__rubberBand" > { categoria }</h2>
        
        { loading && <p> Loading </p>}

        <div className='card-grid'>
        {
            
            
            images.map(img => (
    
                    <GifGridItem 
                        key={img.id}
                        { ...img}
                    
                    />
            ))

        }
        </div>




        
        

        
       

    </>
    )
}

//         {/* 

            
// {/* 
//                 
//                     ))
                    
//                     }   */}
                    
//                     {/* // images.map(img => (
                        
//                     //     <li key={img.id}> {img.title} </li>
                        
//                     // )) */}
                
//                     {/* Esto se puede desestructurar, quedando
                    
//                     images.map(({id, title}) => (

//                         <li key={ id }>  {title}  </li>
//                     ))
                    
                
                    
                    

            
        // </div> */
   


// images.map(catt => (

//     <setImages 
//         key={ catt }
//         title = { catt }
                                
//     />