let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
//export const removeTodo = (...ids) => {
export const removeTodos = (ids) => { //dispatched in footer - remove button
  return {
    type: 'REMOVE_TODO',
    ids
  }
}

export const addSelected = (id) => { //dispatched in TodosList ,Todo
  return {
    type: 'SELECT_TODO',
    id
  }
}
