const INITIAL_STATE =
{
    mode : 'bodyLight'
}
export default (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case 'current_mode':
        return {...state, mode: action.payload};
    
        default:
        return state;
    }
};