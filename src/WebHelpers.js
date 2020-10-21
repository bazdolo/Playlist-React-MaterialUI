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
			// console.log(responseJson);
			songsCallback(responseJson.songs);
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
					playListCallback(responseJson.playlists);
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
			// console.log(responseJson);
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

export const addNewSong = (title, performer, rating, callBack) => {
	fetch('https://bonsai-playlist.herokuapp.com/songs', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'access-token: v0EgKtabt6ExfVH0'
		},
		body: JSON.stringify({
			params: {
				title: title,
				performer: performer,
				rating: rating
			}
		})
	})
		.then((response) => response.json())
		.then((responseJson) => {
			// console.log(responseJson);
			callBack(false);
			return responseJson;
		})
		.catch((error) => {
			console.log(error);
		});
};

export const createNewPlaylist = (name, songs, callBack) => {
	return new Promise((resolve, reject) => {
		fetch('https://bonsai-playlist.herokuapp.com/playlists', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'access-token: v0EgKtabt6ExfVH0'
			},
			body: JSON.stringify({
				params: {
					name: name
				},
				songs: songs
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				// console.log(responseJson);
				callBack(false);
				resolve(responseJson);
			})
			.catch((error) => {
				resolve();
				console.log(error);
			});
	});
};

export const deleteSong = (playId, songId, callBack) => {
	console.log(playId, songId);

	return new Promise((resolve, reject) => {
		fetch('https://bonsai-playlist.herokuapp.com/playlists/' + playId + '/songs/' + songId + '', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'access-token: v0EgKtabt6ExfVH0',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'Access-Control-Allow-Methods': 'DELETE'
			}
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				resolve(responseJson);
			})
			.catch((error) => {
				console.log(error);
				resolve();
			});
	});
};
