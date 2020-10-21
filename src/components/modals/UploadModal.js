import React, { useState } from 'react';
import { Button, Paper, Typography, Modal, TextField, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

var WebHelpers = require('../../WebHelpers');

export default function UploadModal({ setUploadModal, uploadModal }) {
	const [ rating, setRating ] = useState(0);
	const [ title, setTitle ] = useState('');
	const [ performer, setPerformer ] = useState('');

	return (
		<Modal
			open={uploadModal}
			onClose={() => setUploadModal(false)}
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		>
			{
				<Paper
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '30%',
						alignItems: 'center',
						justifyContent: 'center',
						minWidth: '300px'
					}}
					elevation={3}
				>
					<TextField label="Title" onChange={(event) => setTitle(event.target.value)} />
					<TextField label="Performer" onChange={(event) => setPerformer(event.target.value)} />
					<Box p={2}>
						<Rating
							name="hover-feedback"
							value={rating}
							precision={1}
							onChange={(event, newValue) => {
								setRating(newValue);
							}}
						/>
					</Box>
					<Box p={2}>
						<Button
							onClick={() => WebHelpers.addNewSong(title, performer, rating, setUploadModal)}
							variant="contained"
							color="primary"
							size="medium"
						>
							Save
						</Button>
					</Box>
				</Paper>
			}
		</Modal>
	);
}
