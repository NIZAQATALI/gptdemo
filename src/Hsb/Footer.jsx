import { Button, Grid, Typography } from '@mui/material'
import { Box, color, height, Stack } from '@mui/system'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import React from 'react'
import  makeStyles  from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  root: {
    width:'100%', 
             height:{xs:'300px' ,sm:'200px'},
             backgroundColor:'#53ace9'
, fontWeight:'500',
 color:'white', 

   
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
<Box position={'relative'} top={100}>
            <Grid container
            className={classes.root}
            sx={{ px:{xs:3,} }}

             >

                <Grid item  md={12} lg={12} xl={12} sm={12} xs={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center'  ,px:{sm:0,xs:0,md:2,lg:20}, py:3 }}>
<Stack   
  direction="column"




>
<Typography variant='h3' sx={{textAlign:'left', }}>About</Typography>

        <p>We are the fastest-growing company in the 
    US providing the best in wellness coverage at a fraction of the cost. Join the thousands of businesses partnering with us.</p>

</Stack>
                </Grid>
               
              
            </Grid>
        </Box>

    </div>
  )
}
