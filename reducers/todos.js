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
      if (state.id !== action.id) {  // if not the toggled todo
        return state
      }
      return Object.assign({}, state, { //... instead Obejct.assign ???
        completed: !state.completed
      })
    case 'ADD_SELECTED':
      if (state.id !== action.id) {
        return state
      }
      selected: !state.selected,
      console.log(state.selected)
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
        todo(t, action) // ??
      )
    case 'ADD_SELECTED':
      return state.map(t =>
        todo(t, action)
      )
    case 'REMOVE_TODOS':
      state.selected.map((id) => {
        if (todo.id === id ){
          return splice(state.todo, 1) // * keep todos in immutable not just state
          }
        })
    default:
      return state
  }
}

export default todos
