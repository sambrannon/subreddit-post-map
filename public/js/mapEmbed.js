function initMap() {
  getAllPosts()
  .then(function(posts){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 41.850033, lng: -87.6500523}
    });
    var markers = [];
    for (let post of posts){
      let content = `<h2>${post.title}</h2><br /><img src=${post.image.small.url} />`;
      let infowindow = new google.maps.InfoWindow({
          content: content
        });
      let marker = new google.maps.Marker({
        position: {lat: Number(post.city.latitude), lng: Number(post.city.longitude)},
        title: post.title
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      markers.push(marker);
    }

    // var markers = posts.map(function(post, i) {
    //   return new google.maps.Marker({
    //     position: {lat: Number(post.city.latitude), lng: Number(post.city.longitude)},
    //     title: post.title
    //   });
    // });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    })
  .catch(err => console.log(err));
}