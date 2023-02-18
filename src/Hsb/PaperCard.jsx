import { Button, Grid, Typography } from '@mui/material'
import { Box, color, height, Stack } from '@mui/system'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import React from 'react'
import  makeStyles  from '@mui/styles/makeStyles';


export default function PaperCard() {
  return (
    <>

  <Grid container>
<Grid item  md={12} lg={6}  sm={12} xs={12}>
<Stack   
direction="column"
position={'relative'}
justifyContent="center"
alignItems="center"

>

<div>
<Card    sx={{ minWidth:{sm:'270px',xs:'250px',md:'350px', lg:'650px', xl:'350'} , marginBottom:{sm:'35px',xs:'35px',md:'35px', lg:'0px'} ,minHeight:160 , boxShadow:'1px 1px  6px grey',}}     variant={'outlined'}>
  <CardContent>

 <Button><HandshakeIcon sx={{fontSize:'75px',color:'#37517e'}}/></Button><br/>
  
  <Typography variant='paragraph' gutterBottom>
  <b> Boost Recruiting and Retention</b>
  </Typography>
    
    <Typography variant="body2" sx={{ mb: 3.5, mt:2 }}>
   
    We help your business to be recognized customers and grow more
     
    </Typography>
  </CardContent>
  
</Card>
</div>

</Stack>

</Grid>
<Grid item md={12} lg={6}  sm={12} xs={12}>

    2
</Grid>

  </Grid>

    
    </>
  )
}
