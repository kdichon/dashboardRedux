import React, { useState , useEffect } from 'react'
import { addDataToCollection, getAll } from '../../../commonjs/db';

const Ajouter = () => {

  const [ ask , setAsk] = useState("") ;
  const [categories , setCategories ] = useState([]) ;
  const [ selectedCategory , setSelectedCategory ] = useState("") ;


  const handleChangeAsk = (event) => { 

      setAsk(event.target.value)

   }

  const handleDropCategory = (event) => { 

      setSelectedCategory(event.target.value ) ;

   }

   const save = async () => { 


      if(ask != '' && selectedCategory != ''){

        console.log('save') ;

        const data = {
          category : selectedCategory ,
          question :  ask 
        } 

        await addDataToCollection("questions" , data) ;


        setAsk("") ;

      }else{

        console.log('no save') ;

      }

    }

    // gestion des categories

     const initData = async  () => { 
  
        const dataTemp = await getAll('category') ; 
        console.log('dataTemp' , dataTemp) ;
  
        setCategories( dataTemp ) ;
  
     }
  
     useEffect(()=>{
  
      initData() ;
  
     } , [])

  return (
    <div className='flex flex-row gap-4'>

        <select value={selectedCategory} onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">
            <option defaultValue={''} >Selectionnez une categorie</option>
            {categories?.map(data=><option key={data.id} value={data.id}>{data?.name}</option>)}

        </select>

        <input type="text"  value={ask} onChange={handleChangeAsk}  placeholder="Ajouter une question" className="input input-bordered w-full max-w-xs" />
        <button onClick={save} className="btn btn-active btn-primary">Enregistrer</button>


    </div>
  )
}

export default Ajouter