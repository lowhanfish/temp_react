import React from 'react'
// import { Grid } from '@mui/material'
import Grid from '@mui/material/Grid';



function Home() {
    return (
        <div className='singlePage'>
            {/* <Grid container spacing={1}>
                <Grid size={{ md: 6, sx: 12 }}>
                    <h1>Test</h1>
                </Grid>
                <Grid size={{ md: 6, sx: 12 }}>
                    <h1>Test</h1>
                </Grid>

            </Grid> */}

            <Grid container spacing={1}>
                <Grid size={{ md: 4, xs: 12 }}>
                    {/* <FieldWithButton placeholderx={'Cari Data..'} /> */}
                    1
                </Grid>
                <Grid size={{ md: 4, xs: 12 }}>
                    2
                    {/* <FieldSingle /> */}
                </Grid>
                <Grid size={{ md: 4, xs: 12 }}>
                    3

                    {/* <FieldAutocomplete /> */}


                </Grid>
            </Grid>
        </div>
    )
}

export default Home

