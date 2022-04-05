import React from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';


export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <AnalyticsTwoToneIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sentiment Analysis of Product Reviews
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}