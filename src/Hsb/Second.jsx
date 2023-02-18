import { Button, Grid } from '@mui/material'
import { Box, color, height, Stack } from '@mui/system'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import React from 'react'

export default function Second() {
  return (
    <div>
        <Box>
            <Grid container  sx={{ py:2,width:'100%', height:{md:'auto',lg:'200px',sm:'auto',xs:'auto'} ,backgroundColor:'#17a2b8', color:'white', fontSize:'25px'}}>
                <Grid item  md={12} lg={4} sm={12}xs ={12} sx={{display:'flex' , justifyContent:'center'}}>
<Stack   
  direction="column"
position={'relative'}

justifyContent="center"
alignItems="center"
spacing={1}
>
<Button><DomainVerificationIcon  sx={{fontSize:'50px' ,color:'white'}}/></Button>
<h3>Economical</h3>
<p>$0 cost to Employer</p>

</Stack>
                </Grid>
                <Grid item md={12} lg={4} xl={4} sm={12}xs ={12}sx={{display:'flex',alignItems:'center' , justifyContent:'center'}} >
                <Stack   
  direction="column"
position={'relative'}

justifyContent="center"
alignItems="center"
spacing={1}
>
<Button><DomainVerificationIcon  sx={{fontSize:'50px' ,color:'white'}}/></Button>
<h3>Available</h3>
<p>PTE, FTE Contractor</p>

</Stack>
                </Grid>
                <Grid item md={12} lg={4}  sm={12}xs ={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
                <Stack   
  direction="column"
position={'relative'} 

justifyContent="center"
alignItems="center"
spacing={1}
>
<Button><DomainVerificationIcon  sx={{fontSize:'50px' ,color:'white'}}/></Button>
<h3>Easy</h3>
<p>Register in Minuts</p>

</Stack>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
