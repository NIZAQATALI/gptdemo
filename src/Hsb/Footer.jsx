import { Button, Grid, Typography } from '@mui/material'
import { Box, color, height, Stack } from '@mui/system'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import React from 'react'

export default function Footer() {
  return (
    <div>
<Box position={'relative'} top={100}>
            <Grid container  sx={{width:'100%', height:'200px' ,backgroundColor:'#53ace9', color:'white'}}>
                <Grid item  md={12} lg={12} xl={12} sm={12} xs={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center' ,px:{sm:2,xs:2,md:2,lg:20}, py:5 }}>
<Stack   
  direction="column"




>
<Typography variant='h3'>About</Typography>

<p>We are the fastest-growing company in the 
    US providing the best in wellness coverage at a fraction of the cost. Join the thousands of businesses partnering with us.</p>

</Stack>
                </Grid>
               
              
            </Grid>
        </Box>

    </div>
  )
}
