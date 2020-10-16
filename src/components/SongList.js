import React from 'react';
import { AppBar, Tabs, Tab, Box, Paper, List, Typography } from '@material-ui/core';

export default function SongList({ songList }) {
	const renderSongList = () => {
		return songList.songs.map((song) => {
			console.log(song);
			if (song.params) {
				return (
					<Box
						key={song.id}
						onClick={() => console.log('called')}
						borderTop={1}
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
					>
						<Typography>Title: {song.params.title}</Typography>
						<Typography>Performer: {song.params.performer}</Typography>
					</Box>
				);
			}
		});
	};

	return (
		<Paper style={{ maxHeight: '500px', overflow: 'auto' }}>
			<List>{renderSongList()}</List>
		</Paper>
	);
}
