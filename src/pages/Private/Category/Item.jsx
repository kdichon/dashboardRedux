import React from 'react'

const Item = ({category}) => {


  return (
    <tr>
      <th></th>
      <td>{category?.name}</td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default Item