const initial = {
  light: false,
  ts: Date.now(),
  lastUpdate: 0
}

const clock = (state = initial, action) => {
    switch (action.type) {
      case 'TICK':
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        });
      default: return state
    }
  }

  export default clock;