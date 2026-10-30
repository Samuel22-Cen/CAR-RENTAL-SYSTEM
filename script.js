function cancelReservation(time){

let now=new Date()
let booking=new Date(time)

let hours=(now-booking)/1000/60/60

if(hours<24){

alert("Reservation cancelled")

}else{

alert("24h passed. Cancellation fee required")

}

}