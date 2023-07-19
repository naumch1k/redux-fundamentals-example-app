const initialState = {
  todos: [
    { id: 0, text: 'LearnReact', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
