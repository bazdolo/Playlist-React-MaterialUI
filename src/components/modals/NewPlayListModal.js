import React from 'react';
import { Button, Paper, Modal, TextField, Box } from '@material-ui/core';
import SongList from '../SongList';
var WebHelpers = require('../../WebHelpers');

export default function NewPlayListModal({ setPlayListModal, playListModal, songList, setPlayLists }) {
	const savedSongs = {};
	let name = 'hi';

	const setName = (text) => {
		name = text;
	};

	const saveSongs = (id) => {
		if (id in savedSongs) {
			delete savedSongs[id];
		} else {
			savedSongs[id] = true;
		}
	};

	const saveButtonOnClick = async () => {
		let songArray = Object.keys(savedSongs);

		let result = await WebHelpers.createNewPlaylist(name, songArray, setPlayListModal);

		setPlayLists((prev) => {
			return [ ...prev, result ];
		});
	};

	return (
		<Modal
			open={playListModal}
			onClose={() => setPlayListModal(false)}
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		>
			{
				<Paper
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '60%',
						alignItems: 'center',
						justifyContent: 'center',
						minWidth: '340px'
					}}
					elevation={3}
				>
					{' '}
					<Box pb={2}>
						<TextField label="Title" onChange={(event) => setName(event.target.value)} />
					</Box>
					<SongList songList={songList} saveSongs={saveSongs} />
					<Box p={2}>
						<Button
							onClick={() => setPlayListModal(false)}
							variant="contained"
							color="secondary"
							size="medium"
						>
							Back
						</Button>
						<Button onClick={saveButtonOnClick} variant="contained" color="primary" size="medium">
							Save
						</Button>
					</Box>
				</Paper>
			}
		</Modal>
	);
}
