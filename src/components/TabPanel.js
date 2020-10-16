import React from 'react';
import { Box } from '@material-ui/core';
import SongList from './SongList';

export default function TabPanel({ children, tabValue, index, songList }) {
	console.log(children);

	return <Box>{tabValue === index && <div>{children}</div>}</Box>;
}
