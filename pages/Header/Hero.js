import React from 'react'
// import { Button } from '@material-ui/core'
import Button from '@mui/material/Button';
function Hero() {
  return (
    <div>Hero
        <div>
        Be prepared for the mountains and beyond.
        </div>
        <div>
        Are you looking for amazing hiking travel? Don’t worry! We got it for you!
        </div>
        <Button variant="contained" >Contact Us</Button>
        <Button variant="outlined">Watch Video</Button>
        {/* <Button variant="contained" color="secondary">About</Button> */}
    </div>
  )
}
export default Hero