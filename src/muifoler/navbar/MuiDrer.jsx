import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography ,Box} from '@mui/material';
export default function MuiDrer() {
    const[ drewer, setdrewer]=useState(false)
  return (
    <div>
        <Button onClick={()=>setdrewer(true)}>Click Side panel To Open</Button>
        <Drawer anchor='left' open={drewer} onClose={ ()=>setdrewer(false)}  sx={{position:'absolute ' ,marginTop:10}}>
            <Box p ={2}  width='150px' TextAlign= 'center ' role = 'presentation'>
                <Typography variant= 'h6' componrnt ='div'> Side Panel</Typography>
                <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
            </Box>
        </Drawer>
    </div>
  )
}
