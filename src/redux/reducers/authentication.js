
const user='anil';
const loginstate=user?{logginIn:false}:{}
 const Authentication=(state=loginstate,action)=>{
    
    switch(action.type){
        case 'LOGGED_IN':
          return {
                logginIn:true,
                user:action.user,
                password:action.password,
            }
        case 'LOGGED_OUT':
            return {
                logginIn:false,
               
             }
        default:
            return state
    }

        

}

export default Authentication