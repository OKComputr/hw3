// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  /*  
  Parse data and create variables
  Number passengers, purple request binary, First & last name, 
  phone number, pickup location, dropoff location */

  let numberPassengers = ride.numberOfPassengers
  let purpleRequest = ride.purpleRequested
  let firstName = ride.passengerDetails.first
  let lastName = ride.passengerDetails.last
  let phoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip
    
  /*  
  name variable nooberType
  Create conditional statement for Purple request and XL need
  (if # passengers > 3 then XL else X, if Purple then always Purple) */
  
  let nooberType

  if (purpleRequest == true) 
    nooberType = `Purple`
  else if (numberPassengers > 3)
    nooberType = `XL`
  else 
    nooberType = `X`

  
  // Print to console

  console.log(`Noober ${nooberType} Passenger: ${firstName} ${lastName} - ${phoneNumber}. 
  Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. 
  Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`)







  // 🔥 YOUR CODE ENDS HERE 🔥
})
