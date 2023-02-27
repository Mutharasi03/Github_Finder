const GithubReducer=(state,action)=>{
    switch(action.type)
    {
        case'GET_USER':
        return {
            ...state,
            users: action.payload,   
            loading:false                    
        }
        case'CLEAR_USER':
        return {
            ...state, 
            users:[]               
        }
        case 'SET_LOADING':
        return{
            ...state,
            loading:true
        }
        case 'USER_AND_PROFILE':
        return{
            ...state,
            user:action.payload.user,
            repos:action.payload.repos,
            loading:false,
        }
        default:
        return state
    }
}
export default GithubReducer;