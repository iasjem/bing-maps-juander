var API_BASE_URL = "https://techinnovationresearch-eval-test.apigee.net/bing-maps-api";
var user_data = {
    "email": "jemimahberyl.sai@cebupacificair.com",
    "givenName": "Jemimah Beryl",
    "familyName": "Sai",
    "displayName": "Jemimah Beryl Sai",
    "jobTitle": "",
    "mobileNumber": "917 142 7527",
    "address": "NCR, Fourth District, City of Muntinlupa, Tunasan",
    "landmark": "Mightie Mart",
    "kmZero": 30.032,
    "lat": "14.367997",
    "lng": "121.031169",
    "scoreboard": {
        "points": 63,
        "dtp": 0,
        "badges": 0,
        "items": 0
    },
    "createdAt": "2022-06-08T15:17:03.26Z"
}
var mock_data = {
    "email": "jemimahberyl.sai@cebupacificair.com",
    "fullname": "Jemimah Beryl Sai",
    "department": "Cebu Pacifir Air, Inc.",
    "phone": "639171427527",
    "origin": "NCR, Fourth District, City of Muntinlupa, Tunasan",
    "seats": 2,
    "tripType": 0,
    "riders": [],
    "status": 0,
    "departTime": "2022-10-13T23:05:00.000Z",
    "landmark": "Mightie Mart",
    "points": [
        {
            "landmark": "Caltex Soldier's Hill",
            "address": "NCR, Fourth District, City of Muntinlupa, Putatan",
            "lat": "14.40185",
            "lng": "121.036959",
            "kmZero": 25.806
        },
        {
            "landmark": "Starmall Alabang",
            "address": "NCR, Fourth District, City of Muntinlupa, Alabang",
            "lat": "14.414985",
            "lng": "121.048435",
            "kmZero": 26.737
        }
    ]
};

var AOC_POINT = "14.522471878338152, 121.00129429262697";
var origin = user_data.lat + ", " + user_data.lng;
var points = mock_data.points.map(point => point.lat + ", " + point.lng).join('|');
var waypoints = origin + "|" + points + "|" + AOC_POINT;

fetch(API_BASE_URL + "/imagery?key=route_map&mapSize=1080,780&mapLayer=Basemap,Buildings&declutter=1&waypoints=" + waypoints)
    .then(res => res.json())
    .then(res => {
        if (res && res.status === 200) {
            document.getElementById('bing_map').src = res.data.map_image_url;
        } else {
            console.error("Ooops! an error occured!", res);
        }
    })
    .catch(err => {
        console.error(err);
    });