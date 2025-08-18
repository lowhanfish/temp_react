import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from '@mui/icons-material/Add';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import { AccessAlarm, ThreeDRotation, Add, Settings } from '@mui/icons-material';
import { BootstrapInput, Fieldx, Autocompletex, Popperx } from '../../assets/styling/style';



const Template1 = () => {


    // ====== AUTO COMPLETE ====== 
    const top100Films = [
        { id: 1, label: 'The Shawshank Redemption', year: 1994 },
        { id: 2, label: 'The Godfather', year: 1972 },
        { id: 3, label: 'The Godfather: Part II', year: 1974 },
        { id: 4, label: 'The Dark Knight', year: 2008 },
        { id: 5, label: '12 Angry Men', year: 1957 },
        { id: 6, label: "Schindler's List", year: 1993 },
    ];

    const [value, setValue] = React.useState(top100Films[0]);
    const [inputValue, setInputValue] = React.useState('');
    // ====== AUTO COMPLETE ====== 

    // ====== ANCHOR ====== 
    const [anchorEls, setAnchorEls] = React.useState({}); // key = index

    const handleClick = (event, index) => {
        setAnchorEls(prev => ({ ...prev, [index]: event.currentTarget }));
    };

    const handleClose = (index) => {
        setAnchorEls(prev => ({ ...prev, [index]: null }));
    };
    // ====== ANCHOR ====== 



    // ====== MODAL ====== 
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [fullScreen, setFullScreen] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };
    // ====== MODAL ====== 

    return (
        <div className="cardx">
            <div className="cardxHeader">
                <Grid container spacing={1}>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <Fieldx
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Cari sesuatu..."
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <Fieldx size='small' fullWidth id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <Autocompletex
                            value={value}
                            onChange={(event, newValue) => setValue(newValue)}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                            size="small"
                            options={top100Films}
                            PopperComponent={Popperx}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="cardxBody">


                {/* <Button className='btnAdd' variant="contained" size="small">Small</Button> */}
                <div className='btnContainer'>
                    <button onClick={handleClickOpenModal} className='btn md primaryDark shaddow1 width150'>
                        <Add sx={{ fontSize: 18 }} />
                        Add Data
                    </button>
                    {/* <button className='btn danger shaddow1'>Add Data</button> <br /> <br />
                    <button className='btn lg warning fullWidth shaddow2'>Add Data</button> */}
                </div>

                <div className="table-wrap" tabIndex="0">
                    <table className="tabelku" style={{ width: '100%' }}>
                        <thead className="h_thead">
                            <tr>
                                <th style={{ width: '5%' }} scope="col">set</th>
                                <th style={{ width: '5%' }} scope="col">No</th>
                                <th style={{ width: '30%' }} scope="col">Nama</th>
                                <th style={{ width: '20%' }} scope="col">Email</th>
                                <th style={{ width: '20%' }} scope="col">Kota</th>
                                <th style={{ width: '20%' }} scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="h_body">
                            {
                                [...Array(10)].map((_, index) => (
                                    <tr>
                                        <td>
                                            <div className='settingContainer'>
                                                <button
                                                    className="btn rad primaryDark sm"
                                                    onClick={(e) => handleClick(e, index)}
                                                >
                                                    <Settings sx={{ fontSize: 14 }} />
                                                </button>

                                                <Menu
                                                    id={`menu-${index}`}
                                                    anchorEl={anchorEls[index]}
                                                    open={Boolean(anchorEls[index])}
                                                    onClose={() => handleClose(index)}
                                                    slotProps={{
                                                        list: {
                                                            'aria-labelledby': `basic-button-${index}`,
                                                        },
                                                    }}
                                                >
                                                    <MenuItem sx={{ fontSize: 12 }} onClick={() => handleClose(index)}>Detail</MenuItem>
                                                    <MenuItem sx={{ fontSize: 12 }} onClick={() => handleClose(index)}>Edit</MenuItem>
                                                    <MenuItem sx={{ fontSize: 12 }} onClick={() => handleClose(index)}>Delete</MenuItem>
                                                </Menu>
                                            </div>
                                        </td>
                                        <td className='center'>{index + 1}</td>
                                        <td>Galang Aditya</td>
                                        <td>galang@example.com</td>
                                        <td>Jakarta</td>
                                        <td><span className="badge warn">Menunggu</span></td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>
                </div>



                <Dialog
                    fullWidth={fullScreen}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCloseModal}>
                            Disagree
                        </Button>
                        <Button onClick={handleCloseModal} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>




            </div>
        </div>
    )
}

export default Template1