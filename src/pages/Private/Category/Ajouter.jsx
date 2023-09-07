import React, { useState } from 'react'
import { addDataToCollection } from '../../../commonjs/db';

const Ajouter = () => {

  const  [ catName , setCatName] = useState("") ;

  const handleChangeCategory = (event) => { 

      setCatName(event.target.value)

   }

   const save = async () => { 


      if(catName != ''){

        console.log('save') ;

        const data = { name :  catName } // 

        await addDataToCollection("category" , data) ;



        setCatName("") ;

      }else{

        console.log('no save') ;

      }



    }

  return (
    <div className='flex flex-row gap-4'>

     
        <input type="text" name='formCategory'   value={catName} onChange={handleChangeCategory} placeholder="Ajouter une catégorie" className="input input-bordered w-full max-w-xs" />
        <button onClick={save} className="btn btn-active btn-primary">Enregistrer</button>


    </div>
  )
}

export default Ajouter