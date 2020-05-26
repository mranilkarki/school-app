import * as firebase from 'firebase';
import Firebase from '../../../config/config'
// to add events to database
 const AddStudentRecords=()=>{
    // To Await 5 seconds to insert a new user
        return(dispatch,getState)=>{
    
               firebase.database()
                 .ref('StudentRecords/003')
                   .push({
                      name:'Ramesh Dahal',
                       age:29,
                       gender:'Female'
                   })
               .then(() => {
                   console.log('INSERTED !');
                   dispatch({type:'AddStudentRecords'})
               }).catch((error) => {
                   console.log(error);
               });
            }
           
 
       }
    //    extract data from database
    const DispalyStudentBio=(id)=>{
      
        // To Await 5 seconds to insert a new user
            return(dispatch,getState)=>{
               
            var info;
            try{
                firebase.database().ref('StudentRecords/'+id).on('value', (data) => {
                
                       var findKey=data.val()?data.val():{}
                      var keys=Object.keys(findKey)
                      for(var i=0;i<keys.length;i++){
                            info=findKey[keys];
                          
                          
                      }
                     
                    
                     
                })
                dispatch({type:'DisplayStudentBio', payload:info}) 
            }
            catch(error){console.log(error)}
                
               
                  
                       
           
                
                    }
                
                }
// for events management==============================================events Management==========================================
const AddSchoolEvents=(showDate,eventTitle,event)=>{
    return(dispatch,getState)=>{
    firebase.database()
    .ref('Teachers/Events')
      .push({
          eventDate:showDate,
          eventTitle: eventTitle,
          events:event,
      })
  .then(() => {
      console.log('INSERTED events !');
      dispatch({type:'AddSchoolEvents'})
  }).catch((error) => {
      console.log(error);
  });


}
} 
    //to display school events
    const DispalySchoolEvents=()=>{
       
        // To Await 5 seconds to insert a new user
            return(dispatch,getState)=>{
               
            var eventsinfo;
            try{
                firebase.database().ref('Teachers/Events').on('value', (data) => {
                
                       var findKey=data.val()?data.val():{}
                      var keys=Object.keys(findKey)
                    //   console.log(findKey);
                    //   for(var i=0;i<keys.length;i++){
                    //         eventsinfo=findKey[keys];
                          
                          
                    //   }
                    eventsinfo=findKey;
                     
                    
                     
                })
            
                dispatch({type:'DisplaySchoolEvents', eventsmanagedate:eventsinfo}) 
            }
            catch(error){console.log(error)}
                
               
                  
                       
           
                
                    }
                
                }   
                  
            
               
                
               
     
           
export {DispalyStudentBio,AddStudentRecords,AddSchoolEvents,DispalySchoolEvents};