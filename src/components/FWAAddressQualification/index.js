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

const FWA_AddressQualification=()=> {
    return (
        <Container fixed>
            <Typography variant='h5' style={{color:"#2196f3"}}>FWA Address Qualification</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Session Id" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Wireless TN" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="State" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Address Lane1" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Address Lane2" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Building Id" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Latitude" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Longitude" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="AddrId (Wholesale)" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Include C Band" />
                                </FormGroup>
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

export default FWA_AddressQualification