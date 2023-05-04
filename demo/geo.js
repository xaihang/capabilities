function start() {
  // geolocation api
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        document.querySelector("output").textContent = `
            Lat: ${position.coords.latitude} lon: ${position.coords.longitude}`;
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true, //boolean
        maximumAge: 6000, // want new location
        timeout: 6000,
      }
    );
  }
}
