import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const getSelectedTodos = (Selectedtodos) => {
 // selected poslat cez state ??
}

const mapStateToProps = (state) => {
   return {
     todos: getActualTodos(state.todos)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onClick: (id) => {
       dispatch(removeTodos(ids)) // ids selected checkboxes
     }
   }
}
