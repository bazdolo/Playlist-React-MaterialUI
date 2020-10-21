import React, { useState } from 'react';
import { Button, AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import 'fontsource-roboto';

import TabMenu from './components/TabMenu';
import UploadModal from './components/modals/UploadModal';

function App() {
	const [ uploadModal, setUploadModal ] = useState(false);

	return (
		<Box>
			<AppBar position="static">
				<Toolbar>
					<Typography>PLAYLIST</Typography>
				</Toolbar>
			</AppBar>
			<Box display="flex" flexDirection="column" justifyContent="center">
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
				<Box width="100%" display="flex" alignItems="center" justifyContent="center">
					<TabMenu />
				</Box>
			</Box>
			<UploadModal uploadModal={uploadModal} setUploadModal={setUploadModal} />
		</Box>
	);
}

export default App;
