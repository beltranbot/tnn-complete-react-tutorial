const {createStore} = Redux

const initState = {
  todos: [],
  posts: []
}

// reducer is a function that interacts with the store
function myreducer (state = initState, action) {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
  return state
}

const store = createStore(myreducer)

store.subscribe(() => {
  console.log('state updated')
  console.log(store.getState())
})

// actions is a javascript object, it has a property
// that describes the action

const action = {
  type: 'ADD_TODO',
  todo: 'sleep some more'
}

store.dispatch(action)

store.dispatch({
  type: 'ADD_TODO',
  todo: 'sleep some more'
})

store.dispatch({
  type: 'ADD_POST',
  post: 'Egg hunt with yoshi'
})
