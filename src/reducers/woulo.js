//Woulo Reducer

const WouloReducerDefaultState= [] ;

export default (state = WouloReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_WOULO':
        return [
            ...state,
            action.woulo
        ];
        case 'SET_WOULO':
          return action.woulo;
    default:
        return state;
    }
};