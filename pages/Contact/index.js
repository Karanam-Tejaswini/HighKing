import { Button } from '@mui/material'
import React from 'react'
import styles from '../../styles/Subscribe.module.css'
import Contactinfo from './Contactinfo'
function Contact() {
  return (
    <div style={{backgroundColor:"#ECF3FF"}}>
    <div className={styles.container}>
      <div className={styles.heading}>Subscribe to Our Newsletter<br/> For Weekly Article Update.</div>
      <div className={styles.subheading}>we having hiking-related blog so we can share our thought and rutinity<br/> in our blog that updated weekly. We will not spam you, we promise</div>
      <div className={styles.form}>
        <input type="email" className={styles.mail} placeholder="Enter your e-mail address"/>
        <div  className={styles.button}>Subscribe</div>
        {/* <Button variant="contained" className={styles.button}>Subscribe</Button> */}
      </div>
    </div>
    <Contactinfo/>
    </div>
  )
}
export default Contact