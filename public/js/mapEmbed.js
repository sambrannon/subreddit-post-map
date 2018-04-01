function initMap() {
  getAllPosts()
  .then(function(posts){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 41.850033, lng: -87.6500523}
    });



    var markers = posts.map(function(post, i) {
      return new google.maps.Marker({
        position: {lat: Number(post.city.latitude), lng: Number(post.city.longitude)},
        title: post.title
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    })
  .catch(err => console.log(err));
}


