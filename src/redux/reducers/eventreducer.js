const eventsmanagedate={}
const AddSchoolEventsManage=(state=eventsmanagedate,action)=>{
    
    switch(action.type){
        case 'AddSchoolEvents':
            return{
                alert:alert('events added Successfully')
            }
        case 'DisplaySchoolEvents':
       
            return (action.eventsmanagedate)?(action.eventsmanagedate):{}
            // return{
            //     eventDate:action.eventsmanagedate.eventDate,
            //     eventTitle:action.eventsmanagedate.eventTitle,
            //     events:action.eventsmanagedate.events,
            // }
        default:
        return state
    }
}

export {AddSchoolEventsManage}