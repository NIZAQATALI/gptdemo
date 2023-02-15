import { Button, Grid, Stack } from '@mui/material'
import { Box, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { borderLeftColor, borderRadius, margin } from '@mui/system'
import img from '../images/thump.png'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
export default function Main() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Box  >
        <Grid container  sx={{
          
          width:'100%'  ,
          height:{lg:'650px',md:'500px',xs:'auto', xl:'650px'}, 
          padding:{md:'30px 30px',sm:'30px 30px',xs:'30px 50px', xl:'30px 30px'}, 
          marginBottom:'50px'
          }}>
            <Grid item md={12} lg={6} sm={12} xs={12}   sx={{
              display:'flex',  
              direction:"column", 
              alignItems: "Center",
              justifyContent:'Center',
               padding:'200px 60px 50px', 
               position:'relative', 
               left:50, 
               right:0 
               }}>
            <Typography
              variant="para"
              color="initial"
              position={'relative'}
              sx={{ 
                 color:'#212b54',  
                  padding:'200px 60px 60x 0x', 
                  fontSize:{sm:'35px',xs:'35px',md:'50px', lg:'50px', xl:'50px'} 
                }}
            >
              <Box position={'relative'} sx={{
                right:{xs:'40px', sm:'40'
                }}} alignContent={'center'}> <b> Employee Benefits Staring at Just $29.5995/month</b></Box> 
               <Stack  direction="row"
               position={'relative'}
            
            sx={{textAlign:'center',top:{sm:'20',xs:'20px',md:'20px', lg:'50px',xl:'50px'},right:{sm:'45px',xs:'45px',md:'120px', lg:'120px'}}}
  justifyContent="center"
  alignItems="center"
  spacing={1} >
    <Button   sx={ {borderRadius:'50px', backgroundColor:'#212b54', padding:'10px 30px', color:'white','&:hover': {
    backgroundColor: '#212b54', 
  },fontSize:{sm:'12px',xs:'12px',md:'15px', lg:'15px'},  }} onClick={handleClickOpen}><b>Get Started</b></Button>
    <Button  sx={ {borderRadius:'50px', backgroundColor:'#212b54',padding:'10px 30px', color:'white','&:hover': {
    backgroundColor: '#212b54'
  }}}  onClick={handleClickOpen}><b> Get Quote</b></Button>
</Stack>   
            </Typography>
            
            </Grid>
             <Grid item sx={{ textAlign:'Center',  display: { xs: 'none', sm: 'none',md:'none', lg:'block',xl:'block' }}}sm={12} xs={12} md={6} lg={6} >
<img src={img} style={{width:'100%',height:'auto',  verticalAlign:'middle' }} />

             </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}  fullWidth={'md'}>
          <DialogActions sx={{backgroundColor:'lightgrey',}}><Avatar onClick={handleClose}  sx={{backgroundColor:'white',textAlign:'center',  position:'relative',top:-5 ,right:-5 }}><CloseIcon sx={{color:'red',}}/></Avatar></DialogActions>
        <DialogTitle sx={{backgroundColor:'lightgrey'}}>  <Typography variant='h5' sx={{textAlign:'center'}}> Get Started</Typography> </DialogTitle>
        <DialogContent  sx={{backgroundColor:'lightgrey'}}>
          <DialogContentText>
       
            
          </DialogContentText>
          <TextField
          
            autoFocus
            margin="dense"
            id="First Name"
            label="FirstName"
            type="FirstName"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />

         <TextField
            autoFocus
            margin="dense"
            id="LastName "
            label="LastName "
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
         <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
         <TextField
            autoFocus
            margin="dense"
            id="Phone Number"
            label="Phone Number"
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="Company Name"
            label="Company Name"
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="Company Address"
            label="Company Address"
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="Number of Employees"
            label="Number of Employees"
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="State"
            label="State"
            type="text"
          
            variant="outlined"
            sx={{marginLeft:'35px'}}
          />
        </DialogContent>
        <DialogActions  sx={{backgroundColor:'lightgrey',}}>
          
          <Button fullWidth onClick={handleClose} sx={{textAlign:'center', color:'white', backgroundColor:'#0099ff', TouchRipple:'disabled', '&:hover':{backgroundColor:'#0099ff'}}}>sign In</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
  )
}
