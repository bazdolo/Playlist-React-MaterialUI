import React from 'react';
import { Box, Paper, List, Typography, Checkbox } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import 'fontsource-roboto';

export default function SongList({ songList, saveSongs }) {
	const renderSongList = () => {
		return songList.map((song) => {
			// Filter out incomplete data
			if (song.params) {
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
							onClick={() => console.log('called')}
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
						<Rating size="small" value={song.params.rating ? song.params.rating : 0} precision={1} />
						<Box pl={2}>
							{/* <Button variant="contained" color={'primary'} size="small" endIcon={<AddCircle />}>
								Add
							</Button> */}
							<Checkbox onChange={() => saveSongs(song.id)} value={false} />
						</Box>
					</Box>
				);
			}
		});
	};

	return (
		<Paper style={{ maxHeight: '500px', overflow: 'auto', width: '70%' }}>
			<Box>
				<List>{renderSongList()}</List>
			</Box>
		</Paper>
	);
}
