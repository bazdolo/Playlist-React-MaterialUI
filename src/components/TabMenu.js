import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Tabs, Tab, Box, CircularProgress } from '@material-ui/core';
import TabPanel from './TabPanel';
import SongList from './SongList';
var WebHelpers = require('../WebHelpers');

export default function TabMenu() {
	const [ songList, setSongs ] = React.useState([]);
	const [ playList, setPlayLists ] = React.useState([]);
	const [ tabValue, setTabValue ] = useState(0);
	const [ spinner, setSpinner ] = useState(true);

	useEffect(() => {
		WebHelpers.getSongsAndPlayLists(setSongs, setPlayLists, setSpinner);
	}, []);
	console.log(songList);
	console.log(playList);

	const handleTabs = (e, value) => {
		setTabValue(value);
	};
	return (
		<Box m={2} minWidth="80%">
			<AppBar position="static" onChange={handleTabs}>
				<Tabs onChange={handleTabs} value={tabValue}>
					<Tab label="Songs" />
					<Tab label="Playlists" />
				</Tabs>
			</AppBar>
			{spinner ? (
				<Box style={{ height: '500px' }} display="flex" alignItems="center" justifyContent="center">
					<CircularProgress />
				</Box>
			) : (
				<Fragment>
					<TabPanel tabValue={tabValue} index={0}>
						<SongList songList={songList} />
					</TabPanel>
					<TabPanel tabValue={tabValue} playList={playList} index={1}>
						item 2
					</TabPanel>
				</Fragment>
			)}
		</Box>
	);
}
