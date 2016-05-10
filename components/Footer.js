import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = (selected) =>  {

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
  <p><button onClick = { () => removeSelected(selected) }
type="submit" name="delete">Delete selected todos</button></p>
</div>
  )
}

export default Footer
