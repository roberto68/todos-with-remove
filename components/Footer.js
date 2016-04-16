import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = (removeTodos) =>  {

return(
<div>
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
  <p><button onClick = { e => {
     e.preventDefault()
     removeTodos()
    }}
type="submit" name="delete">Delete selected todos</button></p>
</div>
  )
}

export default Footer
