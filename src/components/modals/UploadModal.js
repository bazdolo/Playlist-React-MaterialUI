import React from 'react';
import { Button, Paper, Typography, Modal, TextField } from '@material-ui/core';
export default function UploadModal({ setUploadModal, uploadModal }) {
	return (
		<Modal
			open={uploadModal}
			onClose={() => setUploadModal(false)}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		>
			{
				<Paper
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '50%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<TextField label="Title" />
					<TextField label="Performer" />
				</Paper>
			}
		</Modal>
	);
}
