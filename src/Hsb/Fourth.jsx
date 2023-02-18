
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
const useStyles = makeStyles({
  root: {
    width:'100%',
    backgroundColor:'white',
    color:'white',
  },
  cardstyle:{


  }
});
export default function Fourth() {
  const classes= useStyles();
  return (
    <div><Box position={'relative'} top={100}>
 
<Grid container className={classes.root} sx={{ height:{ xl:'500px',md:'500px',lg:'500px',xs:'auto',sm:'auto' }, padding:{xs:'0px 15px',sm:'0px 15px',md:'0px 100px ', lg:'0px 15px', xl:'0px 100px'},marginBottom:{sm:'0px',xs:'0px',md:'530px', lg:'50px'}}} >
   
    <Grid item  md={12} lg={6}  sm={12} xs={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
<Stack   
direction="column"
position={'relative'}
justifyContent="center"
alignItems="center"

>

<div>
<Card    sx={{ minWidth:{sm:'580px',xs:'250px',md:'880px', lg:'580px', xl:'350'} , marginBottom:{sm:'35px',xs:'35px',md:'35px', lg:'0px'} ,minHeight:150 , boxShadow:'1px 1px  6px grey',}}     variant={'outlined'}>
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
    <Grid item md={12} lg={6}   sm={12} xs={12} sx={{display:'flex',alignItems:'center' , justifyContent:'center'}} >
    <Stack   
direction="column"
position={'relative'}

justifyContent="center"
alignItems="center"

>

<div>
<Card sx={{ minWidth:{sm:'580px',xs:'250px',md:'880px', lg:'580px', xl:'250'},marginBottom:{sm:'35px',xs:'35px',md:'35px', lg:'0px'} , minHeight:150 , boxShadow:'1px 1px  6px grey'}} variant={'outlined'}>
  <CardContent>

 <Button><ThumbUpAltIcon sx={{fontSize:'75px',color:'#37517e'}}/></Button><br/>
  
  <Typography variant='paragraph' gutterBottom>
  <b> 
The Best Products and Services</b>
  </Typography>
    
    <Typography variant="body2" sx={{ mb: 3.5, mt:2 }}>
   
    Only best-in-class, nationwide services used by millions of people.
     
    </Typography>
  </CardContent>
  
</Card>
</div>



</Stack>
    </Grid>
    <Grid item md={12} lg={6} sm={12} xs={12}  sx={{display:'flex',alignItems:'center' , justifyContent:'center'}}>
    <Stack   
direction="column"
position={'relative'} 

justifyContent="center"
alignItems="center"

>
<div>
<Card sx={{ minWidth:{sm:'580px',xs:'250px',md:'880px', lg:'580px', xl:'250'} , marginBottom:{sm:'35px',xs:'35px',md:'35px', lg:'0px'} , minHeight:150 , boxShadow:'1px 1px  6px grey'}} variant={'outlined'}>
  <CardContent>

 <Button><BookmarkAddedIcon sx={{fontSize:'75px',color:'#37517e'}}/></Button><br/>
  
  <Typography variant='paragraph' gutterBottom>
  <b> Save hundreds a month per employee</b>
  </Typography>
    
    <Typography variant="body2" sx={{ mb: 3.5, mt:2 }}>
   
    We help your business to be recognized customers and grow more
     
    </Typography>
  </CardContent>
  
</Card>
</div>

</Stack>
    </Grid>
    <Grid item md={12} lg={6}  sm={12} xs={12}  sx={{display:'flex',alignItems:'center' , justifyContent:'center'}} >
    <Stack   
direction="column"
position={'relative'}

justifyContent="center"
alignItems="center"

>

<div>
<Card sx={{ minWidth:{sm:'580px',xs:'250px',md:'880px', lg:'580px', xl:'250'} , marginBottom:{sm:'35px',xs:'35px',md:'35px', lg:'0px'} , minHeight:150 , boxShadow:'1px 1px  6px grey'}} variant={'outlined'}>
  <CardContent>

 <Button><RotateLeftIcon sx={{fontSize:'75px' ,color:'#37517e'}}/></Button><br/>
  
  <Typography variant='paragraph' gutterBottom>
  <b> We're changing everything</b>
  </Typography>
    
    <Typography variant="body2" sx={{ mb: 3.5, mt:2 }}>
   
    We help your business to be recognized  customers and grow more
    </Typography>
  </CardContent>
  
</Card>
</div>



</Stack>
    </Grid>
  
    
</Grid>
</Box>
</div>
  )
}
