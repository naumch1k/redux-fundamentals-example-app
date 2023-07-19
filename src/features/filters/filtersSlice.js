const initialState = {
  status: 'All',
  colors: [],
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      }
    }
    default:
      return state
  }
}

export default filtersReducer
