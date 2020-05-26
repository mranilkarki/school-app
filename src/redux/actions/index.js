
import * as firebase from 'firebase';
  const loginHandler=(email,password)=>{
   return(dispatch,getState)=>{
  
    
      firebase.auth().signInWithEmailAndPassword(email,password)
       
      .then(()=>{
        dispatch({type: 'LOGGED_IN',user:email,password:password})

      })
      .catch(()=>{
       console.log('Not signed In ...error in logging in')
      });
    
  }
   
}
const signOut = () => {
  return dispatch=>{
     firebase.auth().signOut()
    
    .then(() => {
      dispatch({type: 'LOGGED_OUT'})
     })
     .catch(error => console.log('error:'+ error))
   }  
     


    }
 
 


  export  {loginHandler,signOut}
  