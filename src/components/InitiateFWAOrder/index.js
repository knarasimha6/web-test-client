import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "50vh"
}));

const InitiateFWAOrder = () => {
    const [suffix, setSuffix] = React.useState('');

    const handleChange = (event) => {
        setSuffix(event.target.value);
    };

    return (
        <Container fixed>
            <Typography variant='h5' style={{ color: "#2196f3" }}>Initiate FWA Order</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        

                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" fullWidth label="Session Id" variant="outlined" />
                        </Grid>
                            <Grid item xs={6}>
                              <FormControl component="fieldset">
                                    <FormLabel component="legend">Is Quote Without Credit</FormLabel>
                                    <FormGroup aria-label="position" row>

                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label="True"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value="start"
                                            control={<Checkbox />}
                                            label="False"
                                            labelPlacement="start"
                                        />

                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                               <FormControl style={{ width: '80%' }}>
                                    <InputLabel id="demo-simple-select-label">Customer Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={suffix}
                                        label="Suffix"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Wireless TN" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Suffix" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Address Lane 1" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Address Lane 2" variant="outlined" />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Zip Code " variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="City " variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Can be reached " variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="State " variant="outlined" />
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

export default InitiateFWAOrder