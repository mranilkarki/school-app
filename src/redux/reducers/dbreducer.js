

// const studentinfo={};



const DatabaseManage=(state={},action)=>{
    
    
    switch(action.type){
        case 'AddStudentRecords':
        console.log('recorded successfully');
       
            return{
                
               
                alert:alert('recorded successfully')

            }
        case 'DisplayStudentBio':
        
          
            return action.payload;
            default:
            return state
     
    }
    
}

export {DatabaseManage}