import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One punch man', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One punch man'])
    
    // const handleAdd = () => {
    //     //setcategories([...categories, 'Hunter X Hunter']);
    //     //setcategories([ 'Hunter X Hunter', ...categories ]);
    //     //ó
    //     setcategories(cats => [...cats, 'Hunter X Hunter']);
    //  } 
    
    return (
        <>
        
        {/* <button onClick = { handleAdd } >Add category</button> */}
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr />
        
        <ol>
         {
            categories.map(category => {
                return <GifGrid 
                        category={category}
                        key = {category}
                        />
            })
        }
        </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
