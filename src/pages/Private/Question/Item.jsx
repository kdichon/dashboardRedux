import React, { useEffect } from 'react'
import { useState } from 'react'
import { getOneById } from '../../../commonjs/db';

const Item = ({question}) => {

  const [category , setCategory] = useState({}) ;

  const getCategory = async () => { 

    const dataCategory =await getOneById('category' , question.category ) ;

    setCategory(dataCategory) ;

   }

   useEffect(()=>{

    getCategory();

   },[])


  return (
    <tr>
      <th>{category?.name}</th>
      <td>{question?.question}</td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default Item