export const getSongsAndPlayLists = (songsCallback, playListCallback, spinnerCallback) => {
	fetch('https://bonsai-playlist.herokuapp.com/songs', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'access-token: v0EgKtabt6ExfVH0'
		}
	})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			songsCallback(responseJson);
			fetch('https://bonsai-playlist.herokuapp.com/playlists', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'access-token: v0EgKtabt6ExfVH0'
				}
			})
				.then((response) => response.json())
				.then((responseJson) => {
					playListCallback(responseJson);
					spinnerCallback(false);
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getSongs = () => {
	fetch('https://bonsai-playlist.herokuapp.com/songs', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'access-token: v0EgKtabt6ExfVH0'
		}
	})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			return responseJson;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getPlayLists = () => {
	fetch('https://bonsai-playlist.herokuapp.com/playlists', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'access-token: v0EgKtabt6ExfVH0'
		}
	})
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.log(error);
		});
};
