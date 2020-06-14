// Add form - new resource using marker (form in marker popup) 

var template = '<form id="popup-form">\
  <table class="popup-table">\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Name:</th>\
      <td id="value-name">\
      <input id="name" type="text" /></td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Type:</th>\
      <td id="value-type">\
        <select id="typeVal"><option value="Grocery Shop">Grocery shop</option><option value="Hospital">Hospital</option><option value="Gas station">Gas station</option></select>\
      </td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Opening time:</th>\
      <td id="value-opening">\
      <input id="opening" type="time"/></td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Closing time:</th>\
      <td id="value-closing">\
      <input id="closing" type="time"/></td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Phone number:</th>\
      <td id="value-phone">\
      <input id="phone" type="text" value="None"/></td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Added by:</th>\
      <td id="value-addedby">\
      <input id="addedby" type="text"/></td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Remarks:</th>\
      <td id="value-remarks">\
      <input id="remarks" type="text" /></td>\
    </tr>\
  </table>\
  <button id="button-submit" type="button">Save Changes</button>\
  <button id="button-delete" type="button">Delete marker</button>\
</form>';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlPeuVOGwc1N6SvIhoaqdFDAzR-FHT3Rs",
  authDomain: "covid-crisis-map.firebaseapp.com",
  databaseURL: "https://covid-crisis-map.firebaseio.com",
  projectId: "covid-crisis-map",
  storageBucket: "covid-crisis-map.appspot.com",
  messagingSenderId: "834271687564",
  appId: "1:834271687564:web:e8808a2ba2f14692b39ca9",
  measurementId: "G-S0B6BSJ6LM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

 
// Read data from firebase
var geojsonData = database.ref('geojson');
geojsonData.on("value", function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();
  var id=childData.id;

  marker = L.geoJson({
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [childData.lat, childData.lng]
        },
        "properties": {
        }
      }]
    },
    {
      onEachFeature: function (feature, layer) {
    layer.bindPopup('<table class="popup-table">\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Name:</th>\
      <td id="value-name">\
      ' + childData.name + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Type:</th>\
      <td id="value-type">\
        ' + childData.type + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Opening time:</th>\
      <td id="value-opening">\
      ' + childData.opening + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Closing time:</th>\
      <td id="value-closing">\
      ' + childData.closing + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Phone number:</th>\
      <td id="value-phone">\
      ' + childData.phone + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Added by:</th>\
      <td id="value-addedby">\
      ' + childData.addedby + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Added on:</th>\
      <td id="value-addedon">\
      ' + childData.addedon + '</td>\
    </tr>\
    <tr class="popup-table-row">\
      <th class="popup-table-header">Remarks:</th>\
      <td id="value-remarks">\
      ' + childData.remarks + '</td>\
    </tr>\
  </table>\
  ');
  }
    }).addTo(map);
 }); 
 
});

// Works on clicking a layer
function layerClickHandler (e) {

  var marker = e.target,
      properties = e.target.feature.properties;
  
  // Check if the marker is already added
  if (marker.hasOwnProperty('_popup')) {
    console.log('has prop');

    marker.bindPopup(template);
    marker.openPopup();

     // Delete the marker upon clicking on Delete marker button
    var buttonDelete = L.DomUtil.get('button-delete');
    L.DomEvent.addListener(buttonDelete, 'click', function (e) {
      confirm("Are you sure want to delete this marker?");
      map.closePopup();
      map.removeLayer(marker);
    });
    L.DomUtil.get('value-name').textContent = marker.feature.properties.name;
    L.DomUtil.get('value-type').textContent = marker.feature.properties.type;
    L.DomUtil.get('value-remarks').textContent = marker.feature.properties.remarks;
    L.DomUtil.get('value-opening').textContent = marker.feature.properties.opening;
    L.DomUtil.get('value-closing').textContent = marker.feature.properties.closing;
    L.DomUtil.get('value-phone').textContent = marker.feature.properties.phone;    
    L.DomUtil.get('value-addedby').textContent = marker.feature.properties.addedby;
    L.DomUtil.get('button-submit').style.display = "none";
    marker.unbindPopup();
  }
  // Check if the marker is not added
  else
  {
    marker.bindPopup(template);
    marker.openPopup();

    var buttonSubmit = L.DomUtil.get('button-submit');
    L.DomEvent.addListener(buttonSubmit, 'click', function (e) {
      // Get the values entered in the popup form
      var entity_name = L.DomUtil.get('name').value;
      var entity_type = L.DomUtil.get('typeVal').value;
      var entity_remarks = L.DomUtil.get('remarks').value;
      var entity_opening = L.DomUtil.get('opening').value;
      var entity_closing = L.DomUtil.get('closing').value;
      var entity_phone = L.DomUtil.get('phone').value;
      var entity_addedby = L.DomUtil.get('addedby').value;
      var entity_addedon = new Date().toISOString().slice(0,10);

      L.DomUtil.get('value-name').textContent = entity_name;
      L.DomUtil.get('value-type').textContent = entity_type;
      L.DomUtil.get('value-remarks').textContent = entity_remarks;
      L.DomUtil.get('value-opening').textContent = entity_opening;
      L.DomUtil.get('value-closing').textContent = entity_closing;
      L.DomUtil.get('value-phone').textContent = entity_phone;
      L.DomUtil.get('value-addedby').textContent = entity_addedby;
      L.DomUtil.get('button-submit').style.display = "none";

      // Add the entered data to marker properties
      marker.feature.properties.name = entity_name;
      marker.feature.properties.type = entity_type;
      marker.feature.properties.remarks = entity_remarks;
      marker.feature.properties.opening = entity_opening;
      marker.feature.properties.closing = entity_closing;
      marker.feature.properties.addedby = entity_addedby;
      marker.feature.properties.addedon = entity_addedon;
      marker.feature.properties.phone = entity_phone;

      // Add new entry to firebase
      firebase.database().ref('geojson').push({
        lat: marker.feature.geometry.coordinates[0],
        lng: marker.feature.geometry.coordinates[1],
        name: entity_name,
        type: entity_type,
        opening: entity_opening,
        closing: entity_closing,
        phone:  entity_phone,
        addedby:  entity_addedby,
        addedon: entity_addedon,
        remarks: entity_remarks
      });


      
    });

    // Delete the marker upon clicking on Delete marker button
    var buttonDelete = L.DomUtil.get('button-delete');
    L.DomEvent.addListener(buttonDelete, 'click', function (e) {
      confirm("Are you sure want to delete this marker?");
      map.removeLayer(marker);
    });
  }
}


// Initialize the map and assign it to a variable for later use
var map = L.map('map', {
    // Set latitude and longitude of the map center (required)
    center: [20.5937, 78.9629],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 5
});


// Code for search bar
L.control.scale().addTo(map);

// Create a Tile Layer and add it to the map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var searchControl = new L.esri.Controls.Geosearch().addTo(map);

  var results = new L.LayerGroup().addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      // results.addLayer(L.marker(data.results[i].latlng));
    }
  });

setTimeout(function(){$('.pointer').fadeOut('slow');},3400);
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  console.log(latlng);
  // map.panTo(new L.LatLng(latlng.lat, latlng.lng), 18 );
  map.setView(new L.LatLng(latlng.lat, latlng.lng), 9);

});
// --- Code for search bar ends here

// Works on mouseclick on the map
map.on('click', 
  function(e){
    L.geoJson({
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [e.latlng.lng,e.latlng.lat]
        },
        "properties": {
        }
      }]
    },
    {
      onEachFeature: function (feature, layer) {
        layer.on('click', layerClickHandler);
      }
    }).addTo(map);
});

