import { Box } from '@mui/material'
import { Container, width } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Firsta() {
  return (
    <div>
<Grid Container>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<Box sx={{backgroundColor:'red',  width: 300,
    height: 300, textAlign:'center'}}>

</Box>

    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <Box sx={{backgroundColor:'blue',  width: 300,
    height: 300, textAlign:'center'}}>

</Box>

    </Grid>
</Grid>

       
    </div>
  )
}
