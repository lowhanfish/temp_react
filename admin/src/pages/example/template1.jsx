import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
// import AddIcon from '@mui/icons-material/Add';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Pagination from '@mui/material/Pagination';

import { Clear, Add, Settings } from '@mui/icons-material';
import FieldSingle from '../../components/items/FieldSingle';
import FieldWithButton from '../../components/items/FieldWithButton';
import FieldAutocomplete from '../../components/items/FieldAutocomplete';
import Anchorx from '../../components/items/Anchorx';








const Template1 = () => {




    // ====== ANCHOR ====== 
    const [anchorEls, setAnchorEls] = React.useState({}); // key = index

    const handleClick = (event, index) => {
        setAnchorEls(prev => ({ ...prev, [index]: event.currentTarget }));
    };

    const handleClose = (index) => {
        setAnchorEls(prev => ({ ...prev, [index]: null }));
    };
    // ====== ANCHOR ====== 



    // ====== MODAL ADD ====== 
    const [openModalAdd, setOpenModal] = React.useState(false);
    // const theme = useTheme();
    const [fullScreen, setFullScreen] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickopenModalAdd = () => {
        setOpenModal(true);
    };

    const handleCloseModalAdd = () => {
        setOpenModal(false);
    };
    // ====== MODAL ADD ====== 

    return (
        <div className="cardx">
            <div className="cardxHeader">
                <Grid container spacing={1}>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <FieldWithButton placeholderx={'Cari Data..'} />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <FieldSingle />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>

                        <FieldAutocomplete />


                    </Grid>
                </Grid>
            </div>
            <div className="cardxBody">


                {/* <Button className='btnAdd' variant="contained" size="small">Small</Button> */}
                <div className='btnContainer'>
                    <button onClick={handleClickopenModalAdd} className='btn md primarySoft shaddow1 width150'>
                        <Add sx={{ fontSize: 18 }} />
                        Add Data
                    </button>
                    {/* <button className='btn danger shaddow1'>Add Data</button> <br /> <br />
                    <button className='btn lg warning fullWidth shaddow2'>Add Data</button> */}
                </div>

                <div className="table-wrap" tabIndex="0">
                    <table className="tabelku shaddow2" style={{ width: '100%' }}>
                        <thead className="h_thead shaddowText">
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
                                    <tr key={index}>
                                        <td>
                                            <Anchorx index={index} />
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

                <div className='paginContainer'>
                    <Pagination count={10} color="primary" variant="outlined" />
                </div>



                <Dialog
                    fullWidth={fullScreen}
                    maxWidth={maxWidth}
                    open={openModalAdd}
                    onClose={handleCloseModalAdd}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        <div className='headerModal'>
                            <div className='headerModalLeft'>Add Data</div>
                            <div className='headerModalRight'>
                                <IconButton onClick={handleCloseModalAdd} aria-label="fingerprint">
                                    <Clear />
                                </IconButton>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                            <FieldSingle Title={'FieldSingle'} />
                            <FieldSingle Title={'FieldSingle'} />
                            <FieldSingle Title={'FieldSingle'} />
                            <FieldWithButton Title={'FieldWithButton'} />
                            <FieldAutocomplete Title={'FieldAutocomplete'} />

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCloseModalAdd}>
                            Disagree
                        </Button>
                        <Button onClick={handleCloseModalAdd} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>




            </div>
        </div>
    )
}

export default Template1