import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"50vh"
}));

const SaveFWADevice=()=> {
    return (
        <Container fixed>
            <Typography variant='h5' style={{color:"#2196f3"}}>Save FWA Device</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Session Id" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Depletion Type" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Contract Term TN" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Qty" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
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
        </Container>

    )
}

export default SaveFWADevice