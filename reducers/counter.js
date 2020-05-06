const initial = {
      message:'START',
      count: 0
    }

export default function counter(state = initial, action) {
    console.table(state);
    switch (action.type) {
    case 'INCREMENT':
        return Object.assign({}, state, {
            count: state.count + 1
            });
    case 'DECREMENT':
        return Object.assign({}, state, {
            count: state.count - 1
            });
    case 'RESET':
        return Object.assign({}, state, {
            count: 0
            });
    default:
        return state;
    }
}