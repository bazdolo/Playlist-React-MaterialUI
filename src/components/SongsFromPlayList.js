import React from 'react';
import { Box, Paper, List, Typography, IconButton } from '@material-ui/core';
import { ArrowUpward, ArrowDownward, Delete } from '@material-ui/icons/';
import { Rating } from '@material-ui/lab';
import 'fontsource-roboto';

export default function SongsFromPlayList({ playLists, songList, songsIndex, setPlayLists, setSongs }) {
	const deleteSong = (id) => {
		let removedArr = [];
		removedArr = playLists[songsIndex].songs.filter((song) => {
			if (song !== id) {
				return song;
			}
		});
		playLists[songsIndex].songs = removedArr;
		setPlayLists([ ...playLists ]);
	};

	const arrangeSongs = (up, down, index) => {
		let tempIndex;
		if (up && index !== 0) {
			tempIndex = playLists[songsIndex].songs[index];

			playLists[songsIndex].songs[index] = playLists[songsIndex].songs[index - 1];
			playLists[songsIndex].songs[index - 1] = tempIndex;
			setPlayLists([ ...playLists ]);
		}
		if (down && index < playLists[songsIndex].songs[index].length) {
			tempIndex = playLists[songsIndex].songs[index];

			playLists[songsIndex].songs[index] = playLists[songsIndex].songs[index + 1];
			playLists[songsIndex].songs[index + 1] = tempIndex;
			setPlayLists([ ...playLists ]);
		}
	};

	const setRating = (rating, index) => {
		if (songList[index]) {
			songList[index].params.rating = rating;
			setSongs([ ...songList ]);
		}
	};

	const renderSongList = () => {
		if (playLists[songsIndex].songs.length === 0) {
			return <p>NO RESULTS FOUND</p>;
		} else {
			return playLists[songsIndex].songs.map((playId, sIndex) => {
				return songList.map((song, index) => {
					if (song.id === playId && song.params) {
						return (
							<Box
								key={song.id}
								display="flex"
								flexDirection="row"
								alignItems="center"
								justifyContent="space-around"
								borderTop={1}
							>
								<Box
									pt={2.5}
									pb={2.5}
									display="flex"
									flexDirection="column"
									alignItems="center"
									justifyContent="center"
									width="120px"
									textAlign="center"
									// bgcolor="secondary.main"
								>
									<Typography variant="h6">Title:</Typography>
									<Typography>{song.params.title}</Typography>
									<Typography variant="h6">Artist: </Typography>
									<Typography>{song.params.performer}</Typography>
								</Box>
								<Rating
									name={song.id + ''}
									size="small"
									onChange={(event) => setRating(parseInt(event.target.value), index)}
									// defaultValue={song.params.rating ? song.params.rating : 0}
									value={song.params.rating ? song.params.rating : 0}
									precision={1}
								/>
								<Box pl={2} />
								<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
									<IconButton>
										<ArrowUpward onClick={() => arrangeSongs(true, false, sIndex)} />
									</IconButton>
									<IconButton>
										<ArrowDownward onClick={() => arrangeSongs(false, true, sIndex)} />
									</IconButton>
								</Box>
								<Box display="flex" alignItems="center" justifyContent="center">
									<IconButton>
										<Delete onClick={() => deleteSong(song.id)} />
									</IconButton>
								</Box>
							</Box>
						);
					}
				});
			});
		}
	};

	return <Paper style={{ maxHeight: '500px', overflow: 'auto' }}>{<List>{renderSongList()}</List>}</Paper>;
}
