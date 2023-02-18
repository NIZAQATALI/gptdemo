
import { Button, Grid, Typography } from '@mui/material'
import { Box, color, height, Stack } from '@mui/system'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React from 'react'
export default function Third() {
  return (
    <div><Box position={'relative'} top={50} sx={{marginBottom:{sm:'660px',xs:'660px',md:'630px', lg:'0px'}}}>
        <Typography variant='h5' sx={{textAlign:'center',color:'#37517e',marginBottom:{sm:5,xs:5,md:0,lg:0 } }}><b>TOP BENEFIT BUNDLES</b></Typography>
    <Grid container  sx={{width:'100%', height:'500px' ,backgroundColor:'white', color:'white', padding:'0px 150px'}} Spacing={1}>
       
        <Grid item  md={12} lg={4} sm={12}  xs={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
<Stack   
direction="column"
position={'relative'}
justifyContent="center"
alignItems="center"
spacing={1}
>
<Box  sx={{backgroundColor:'white' ,padding:'15px' ,marginBottom:'15px', borderRadius:'10px', border:' 1px solid grey'}}>
<div>
<Card sx={{ minWidth:{sm:345,xs:255,md:395,lg:245,xl:295}  , minHeight:350 , backgroundColor:'#e0eaff','&:hover': {
    backgroundColor: '#6c757d'
  }}}>
      <CardContent>
        <Typography  variant='h6'  sx={{textAlign:'center',  mt: 3.5 ,fontSize:'25px'}} gutterBottom>
      Advantage  <br/> <b>
Wellness</b> 
        </Typography>
      
        
        <Typography variant="body2" sx={{ mb: 1.5 ,mt:1.5}}>
       
         <ul>
            <li>Primary Care Doctor</li>
            <li>Urgent Care</li>
            <li>Chronic Illness Care</li>
            <li> All Wellness Benefits</li>
         </ul>
         <Typography variant='h6'  sx={{textAlign:'center', mt:6.5}}><b >$99.95 /mth</b></Typography>
        </Typography>
      </CardContent>
      
    </Card>
</div>
</Box>

</Stack>
        </Grid>
        <Grid item md={12} lg={4} sm={12}  xs={12}  sx={{display:'flex',alignItems:'center' , justifyContent:'center'}} >
        <Stack   
direction="column"
position={'relative'}

justifyContent="center"
alignItems="center"
spacing={1}
>
<Box  sx={{backgroundColor:'white' ,padding:'15px' ,  marginBottom:'15px',borderRadius:'10px', border:' 1px solid gray'}}>
<div>
<Card sx={{ minWidth:{sm:345,xs:255,md:395,lg:245,xl:295}  , minHeight:350 ,backgroundColor:'#e0eaff','&:hover': {
    backgroundColor: '#6c757d'
  }}}>
      <CardContent>
        <Typography  variant='h6'  sx={{textAlign:'center',  mt: 3.5 ,fontSize:'25px'}} gutterBottom>
      Advantage  <br/> <b>
Wellness</b> 
        </Typography>
      
        
        <Typography variant="body2" sx={{ mb: 1.5 ,mt:1.5}}>
       
         <ul>
            <li>Primary Care Doctor</li>
            <li>Urgent Care</li>
            <li>Chronic Illness Care</li>
            <li> All Wellness Benefits</li>
         </ul>
         <Typography variant='h6'  sx={{textAlign:'center', mt:6.5}}><b >$99.95 /mth</b></Typography>
        </Typography>
      </CardContent>
      
    </Card>
</div>
</Box>


</Stack>
        </Grid>
        <Grid item md={12} lg={4}  sm={12}  xs={12}  sx={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
        <Stack   
direction="column"
position={'relative'} 

justifyContent="center"
alignItems="center"
spacing={1}
>
<Box  sx={{backgroundColor:'white' ,padding:'15px' ,marginBottom:'15px',borderRadius:'10px', border:' 1px solid gray'}}>
<div>
<Card sx={{ minWidth:{sm:345,xs:255,md:395,lg:245,xl:295}  , minHeight:350, backgroundColor:'#e0eaff', '&:hover': {
    backgroundColor: '#6c757d'
  },}}>
      <CardContent>
        <Typography  variant='h6'  sx={{textAlign:'center',  mt: 3.5 ,fontSize:'25px'}} gutterBottom>
      Advantage  <br/> <b>
Wellness</b> 
        </Typography>
      
        
        <Typography variant="body2" sx={{ mb: 1.5 ,mt:1.5}}>
       
         <ul>
            <li>Primary Care Doctor</li>
            <li>Urgent Care</li>
            <li>Chronic Illness Care</li>
            <li> All Wellness Benefits</li>
         </ul>
         <Typography variant='h6'  sx={{textAlign:'center', mt:6.5}}><b >$99.95 /mth</b></Typography>
        </Typography>
      </CardContent>
      
    </Card>
</div>
</Box>
</Stack>
        </Grid>
    </Grid>
</Box>
</div>
  )
}
