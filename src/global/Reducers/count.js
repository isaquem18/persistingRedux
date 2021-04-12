export default function count(state = 0, action) {
    switch (action.type) {
        case 'addCount':
            return state + 1;
        default:
            return state;
    }
}