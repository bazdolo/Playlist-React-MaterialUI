import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Tabs, Tab, Box, CircularProgress, Button } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import TabPanel from './TabPanel';
import PlayList from './PlayList';
import SongsFromPlayList from './SongsFromPlayList';
import NewPlayListModal from './modals/NewPlayListModal';
var WebHelpers = require('../WebHelpers');

export default function TabMenu() {
	const [ songList, setSongs ] = useState([]);
	const [ playLists, setPlayLists ] = useState([]);
	const [ tabValue, setTabValue ] = useState(0);
	const [ spinner, setSpinner ] = useState(true);
	const [ playListModal, setPlayListModal ] = useState(false);
	const [ songsIndex, setSongIndex ] = useState(0);

	useEffect(() => {
		WebHelpers.getSongsAndPlayLists(setSongs, setPlayLists, setSpinner);
	}, []);

	return (
		<Box m={2} minWidth={'340px'} width="70%">
			<AppBar position="static">
				<Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
					<Tabs value={tabValue}>
						<Tab onClick={() => setTabValue(0)} label="Playlists" />
						<Tab label="Songs" />
					</Tabs>
					<Button onClick={() => setPlayListModal(true)} color="inherit" endIcon={<AddCircleOutline />}>
						Create Playlist
					</Button>
				</Box>
			</AppBar>
			{spinner ? (
				<Box style={{ height: '500px' }} display="flex" alignItems="center" justifyContent="center">
					<CircularProgress />
				</Box>
			) : (
				<Fragment>
					<TabPanel tabValue={tabValue} index={0}>
						<PlayList
							playLists={playLists}
							setTabValue={setTabValue}
							setSongIndex={setSongIndex}
							setPlayLists={setPlayLists}
						/>
					</TabPanel>
					<TabPanel tabValue={tabValue} index={1}>
						<SongsFromPlayList
							playLists={playLists}
							songList={songList}
							songsIndex={songsIndex}
							setPlayLists={setPlayLists}
							setSongs={setSongs}
						/>
					</TabPanel>
				</Fragment>
			)}
			<NewPlayListModal
				setPlayListModal={setPlayListModal}
				playListModal={playListModal}
				songList={songList}
				setPlayLists={setPlayLists}
			/>
		</Box>
	);
}
