//geolocation helps to acquire user's location
// works only in case of secured contexts(HTTPS)
function successCallback(position){
    console.log(position);
}

function errorCallback(error){
    console.error(error)
}


navigator.geolocation.getCurrentPosition(successCallback, errorCallback);