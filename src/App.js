import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, AppBar, Box, Toolbar, Paper, Typography, Modal } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import 'fontsource-roboto';

import TabMenu from './components/TabMenu';
import UploadModal from './components/modals/UploadModal';

var WebHelpers = require('./WebHelpers');

function App() {
	const [ checked, setChecked ] = React.useState(true);
	const [ uploadModal, setUploadModal ] = React.useState(false);

	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<Typography>PLAYLIST</Typography>
				</Toolbar>
			</AppBar>
			<Box minWidth="80%" display="flex" flexDirection="column" justifyContent="center">
				<Box m={2} mt={5}>
					<Button
						onClick={() => setUploadModal(true)}
						startIcon={<SaveIcon />}
						variant="contained"
						color="primary"
						size="medium"
					>
						Upload a song
					</Button>
				</Box>
				<TabMenu />
			</Box>
			<UploadModal uploadModal={uploadModal} setUploadModal={setUploadModal} />
		</Box>
	);
}

export default App;
