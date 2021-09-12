//import React, {useState, useEffect} from 'react'
import  {GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {
   
 
//    const [images, setimages] = useState([])    ;
const { data:images, loading } = useFetchGifs( category );
console.log(loading);
//console.log(data)

//Este hook "useEffect" sera movido al custom hook "useFetchGifs"
//    useEffect( () => {
//        getGifs( category )
//             .then( setimages );
//    }, [ category ]) 
   

  // getGifs();

    return (
        <>
        <h3 className="animate__animated animate__fadeInTopRight"> {category} </h3>
        
        
        
        
        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
        
            <ol> 
                {
                    //images.map( img => (
                        //ó
                        //Podemos desestrucurar
                    images.map( img => (
                       <GifGridItem 
                         key={ img.id }
                         {...img}//agregando las propiedades de esta forma podemos emplear cada propiedad de forma independiente
                       /> 
                    ))
                }      
            </ol>
        </div>
        </>  
    )
}
