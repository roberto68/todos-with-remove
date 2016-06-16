const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
	console.log(action.id);
      return {
        id: action.id, // action.id = 0, nextTodoId =1 in actions/index.js
        text: action.text,
        completed: false
        //selectedmmutable: false
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
	return {
	id: action.id,	
      	selected: !state.selected,
	}  
    default:
      return state
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
      state.map(t => { //approach 1: those where selected === true; app 2: put those in arr and del those - but need to remove/add everytime toggled
        if (todo.selected === true ){
          return splice(state.todo, 1); // mplement immutable and this way not gonna work          }
         }
	})
    default:
      return state
  }
}

export default todos
