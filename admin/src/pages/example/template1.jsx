import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BootstrapInput, Fieldx, Autocompletex, Popperx } from '../../assets/styling/style';



const Template1 = () => {



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

                        {/* <div>{`value: ${value !== null ? `'${value.id}'` : 'null'}`}</div>
                        <div>{`inputValue: '${inputValue}'`}</div>
                        <br /> */}

                    </Grid>
                </Grid>
            </div>
            <div className="cardxBody">


                {/* <Button className='btnAdd' variant="contained" size="small">Small</Button> */}
                <div className='btnContainer'>
                    <button className='btn sm primary shaddow1 width150'>Add Data</button>
                    {/* <button className='btn danger shaddow1'>Add Data</button> <br /> <br />
                    <button className='btn lg warning fullWidth shaddow2'>Add Data</button> */}
                </div>

                <div className="table-wrap" tabIndex="0">
                    <table className="tabelku">
                        <thead className="h_thead">
                            <tr>
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                <th scope="col">Kota</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="h_body">
                            <tr>
                                <td>Rina Saputri</td>
                                <td>rina@example.com</td>
                                <td>Bandung</td>
                                <td><span className="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Galang Aditya</td>
                                <td>galang@example.com</td>
                                <td>Jakarta</td>
                                <td><span className="badge warn">Menunggu</span></td>
                            </tr>
                            <tr>
                                <td>Devi Maharani</td>
                                <td>devi@example.com</td>
                                <td>Makassar</td>
                                <td><span className="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Rafi Pratama</td>
                                <td>rafi@example.com</td>
                                <td>Yogyakarta</td>
                                <td><span className="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Nadia Lestari</td>
                                <td>nadia@example.com</td>
                                <td>Surabaya</td>
                                <td><span className="badge warn">Menunggu</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    )
}

export default Template1