import { Box } from '@mui/material'
import { Container, width } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Firsta() {
  return (
    <div>
<Grid container>
    <Grid item  xs={12}sm={12} md={12} lg={6} xl={6} sx={{backgroundColor:'red'}} >
    <div style={{ display:'block',alignContent:'center', justifyContent:'center' , direction:'column'}}>
 <Typography display={'block'}> 
<b> Employee Benefits Staring at Just $29.5995/month</b></Typography>
<Box><Button>12</Button></Box>

    </div>
    
    </Grid>
    <Grid item xs={12}sm={12} md={12} lg={6} xl={6}  sx={{backgroundColor:'green'}} >2</Grid>
   
</Grid>
    </div>
  )
}
