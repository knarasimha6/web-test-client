import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import { Typography,FormControl } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"50vh"
}));

const FWARefreshCreditCheck=()=> {
    const [suffix, setSuffix] = React.useState('');

    const handleChange = (event) => {
        setSuffix(event.target.value);
    };
    return (
        <>
            <Typography variant='h5' style={{color:"#2196f3"}}>FWA Refresh Credit Check</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" fullWidth label="Session Id" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" fullWidth label="Cart Creator Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" fullWidth label="Cart Id" variant="outlined" />
                            </Grid>
                         
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" fullWidth label="Credit Approval Number" variant="outlined" />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Item>xs=8</Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

export default FWARefreshCreditCheck