// getCurrentPosition()
function curSuccess(pos) {
	const coords = pos.coords;
	console.log(`Latitude: ${coords.latitude}`);
	console.log(`Longitude: ${coords.longitude}`);
	console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
	console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
	enableHighAccuracy: true, // use GPS if available
	timeout: 5000, // time to wait to stop trying for location
	maximumAge: 0, // do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()
const target = {
	latitude: 34.0351588,
	longitude: -84.6060449
}

function watchSuccess(pos) {
	const coords = pos.coords;

	if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
		console.log('You have reached your destination');
		navigator.geolocation.clearWatch(id);
	}
	
}

function watchError(err) {
	console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
	enableHighAccuracy: true, // use GPS if available
	timeout: 5000, // time to wait to stop trying for location
	maximumAge: 0, // do not use a cached position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);