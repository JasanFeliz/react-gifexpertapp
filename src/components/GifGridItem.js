import React from 'react';
import "animate.css"

//El componente GifGridItem lo que hace es obtener los gifs en informacion ya 
//desestructurada y llevarlos a formato de imagen para presentar en nuestra pagina
export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__bounceInLeft">
            <img src ={ url } alt= {title } />
            <p> { title } </p>
        </div>
    )
}
