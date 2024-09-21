function initMap() {
    const location = { lat: 12.9716, lng: 77.5946 }; // Example location (Bangalore)

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });

    // Add a marker at the specified location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
