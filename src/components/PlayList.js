import React from 'react';
import { Button, Box, Paper, List, Typography, ButtonGroup } from '@material-ui/core';
import 'fontsource-roboto';

export default function PlayList({ playLists, setTabValue, setSongIndex }) {
	const renderPlayList = () => {
		return playLists.map((listItem, index) => {
			if (listItem.params) {
				return (
					<Box
						key={listItem.id}
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
							width="200px"
							textAlign="center"
							// bgcolor="secondary.main"
						>
							<Typography variant="caption">Name:</Typography>
							<Typography variant="subtitle1">{listItem.params.name}</Typography>
							<Typography variant="caption">
								Number of songs: <div>{listItem.songs.length}</div>
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column" pl={2} justifyContent="space-between">
							<ButtonGroup orientation="vertical">
								{/* <Button variant="contained" color={'primary'} size="small" endIcon={<AddCircle />}>
									Add Songs
								</Button> */}
								<Button
									onClick={() => {
										setTabValue(1);
										setSongIndex(index);
									}}
									variant="outlined"
									color={'primary'}
									size="small"
								>
									View Songs
								</Button>
							</ButtonGroup>
						</Box>
					</Box>
				);
			}
		});
	};

	return (
		<Paper style={{ maxHeight: '500px', overflow: 'auto' }}>
			<List>{renderPlayList()}</List>
		</Paper>
	);
}
