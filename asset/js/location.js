
    document.addEventListener("DOMContentLoaded", function() {
        const currentLocationBtn = document.getElementById('currentLocationBtn');
        
        currentLocationBtn.addEventListener('click', function() {
            
            // Check if Geolocation is supported
            if ("geolocation" in navigator) {
                // Request current position
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    
                    // Fetch location name using reverse geocoding (Google Maps Geocoding API)
                    fetch(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=your_username`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === "OK" && data.results[0]) {
                                const locationName = data.results[0].formatted_address;
                                console.log('Location Name:', data);
                            } else {
                                console.error('Unable to fetch location name:', data.status);
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching location name:', error);
                        });
                }, function(error) {
                    console.error('Error getting current location:', error.message);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        });
    });

