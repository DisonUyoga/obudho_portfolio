

export async function getLocation(){
    let lat;
    let lon;
    await navigator.geolocation.getCurrentPosition(function(position){
      console.log('yyy',position.coords.latitude);
      lat=  position.coords.latitude
      lon= position.coords.longitude
    }
    )
  return [lat, lon]
}