let ids = [];
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
	console.log(action.id);
      return {
        id: action.id, // action.id = 0, nextTodoId =1 in actions/index.js
        text: action.text,
        completed: false 
        //selected: false
      }

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'SELECT_TODO':
      if (state.id !== action.id) {
        return state
      }
      ids.push(id);
      return ids
    default:
    return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'REMOVE_TODO':
      ids.map( (id) => { // treba do statu
        if (todo.id === id ){
          return splice(state.todo.id, 1) // dorobit
          }
        }) //remove action is dispatched in the footer
    default:
      return state
  }
}

export default todos
