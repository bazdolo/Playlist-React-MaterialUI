import React from 'react';
import { Box } from '@material-ui/core';

export default function TabPanel({ children, tabValue, index }) {
	return <Box>{tabValue === index && <div>{children}</div>}</Box>;
}
