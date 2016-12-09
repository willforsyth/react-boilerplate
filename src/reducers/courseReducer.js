export default function courseReducer(state = [], action){
  switch(action.type){
    case 'CREATE_COURSE':
      /// ...state expodes out the state
      return [...state,
        /// ...assign remakes the object with the 'action.course' updated
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
