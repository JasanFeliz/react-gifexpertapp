import React, {useState} from 'react'
//import GifExpertApp from '../GifExpertApp'
import PropTypes from 'prop-types'


export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('')
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //Validacion para no agrrgar compos vacios ni inferiores a 2 caracteres
        if ( inputValue.trim().length > 2) {
        setcategories( cats => [inputValue, ...cats]);
        setinputValue('');
        }

    }

    return (
        <form onSubmit = {handleSubmit}>
         <input
           type = "text"
           value = {inputValue}
           onChange = {handleInputChange}
           />  
        </form>
    )
}


AddCategory.propTypes = {
setcategories: PropTypes.func.isRequired
}

