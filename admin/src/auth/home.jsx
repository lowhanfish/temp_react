import React from 'react'
// import { Grid } from '@mui/material'
import Grid from '@mui/material/Grid';



function Home() {
    return (
        <div className='singlePage'>
            <Grid container spacing={1}>

                <Grid size={{ md: 6, xs: 12 }}>
                    <div className='singlePageContainer' style={{ paddingLeft: '20%', paddingRight: '10%' }}>
                        <div className='singlePageTextContainer'>
                            <div className='h_Home1'>Welcome to</div>
                            <div className='h_Home5'>Temp-React</div>
                            <div style={{ marginTop: 2 }} className='h_Home2'>This is an admin version template built with ReactJS. This template is a frontend that can be used as a basis for developing your application.</div>
                            <div style={{ marginTop: 15 }} className='h_Home3'>
                                You can also contribute to the development of this application on the page
                            </div>
                            <div className='h_Home4'>
                                <a className='h_Home4' href="https://github.com/lowhanfish/temp_react">https://github.com/lowhanfish/temp_react</a>
                            </div>

                        </div>
                    </div>
                </Grid>

                <Grid size={{ md: 6, xs: 12 }}>
                    <div className='singlePageContainer'>
                        <div>
                            <div>Manual Book</div>
                            <div>referensi text</div>
                        </div>
                    </div>
                </Grid>

            </Grid>


        </div>
    )
}

export default Home

