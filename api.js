// FRONT-END ONLY API ADAPTER.
// Replace these demo methods with calls to your existing database-backed REST API.
// Never put database credentials in frontend JavaScript.
const ClinicAPI={
 async getAppointments(){return[
  {id:1,date:'17',month:'SEP',time:'10:30 AM',service:'General Check-up',doctor:'Dr. Maria Santos',status:'Confirmed'},
  {id:2,date:'24',month:'SEP',time:'2:00 PM',service:'Medical Certificate',doctor:'Clinic Staff',status:'Confirmed'}
 ]},
 async createAppointment(data){return {...data,id:Date.now(),queueNumber:'A-019',status:'Confirmed'}},
 async cancelAppointment(id){return {success:true,id}},
 async saveProfile(data){return {success:true,data}}
};
