import { TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
export default function Muidatepicker() {
    const[ selecteDate , setselecteDate] = useState(null)
    const[ selecteTime , setselecteTime] = useState(null)
    console.log(selecteTime)
  return (
    <div><Stack spacing={4}sx={{width:'250px'}}>
        
       <DatePicker   label='Date Picker' renderInput={(params)=><TextField  {...params} 
       
       />}
       value={selecteDate}
       onChange={(newVal)=>{
        setselecteDate(newVal);
       }}
       ></DatePicker>
        <TimePicker   label='Time Picker' renderInput={(params)=><TextField  {...params} 
       
       />}
       value={selecteTime}
       onChange={(newVal1)=>{
        setselecteTime(newVal1);
       }}
       ></TimePicker>
        </Stack></div>
  )
}
