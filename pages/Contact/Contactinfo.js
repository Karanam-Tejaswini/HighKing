import React from 'react'
import styles from '../../styles/Contact.module.css'
import Logo from '../../assets/assects/icons/logo.js'
import Fb from '../../assets/assects/icons/facebook'
import Twitter from '../../assets/assects/icons/twitter.js'
import Insta from '../../assets/assects/icons/insta.js'
 function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.highking}>
        <div className={styles.heading}><Logo/></div>
        <div className={styles.text}>we envision a world where everyone feels welcome in the American hiking community</div>
        <div className={styles.icons}>
          <div className={styles.icon}><Fb/></div>
          <div className={styles.icon}><Twitter/></div>
          <div className={styles.icon}><Insta/></div>
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.subheading}>Location</div>
          <div className={styles.text1}>America</div>
          <div className={styles.text1}>Asia</div>
          <div className={styles.text1}>Europe</div>
          <div className={styles.text1}>Africa</div>
        </div>
        <div className={styles.contact}>
          <div className={styles.subheading}>Contact</div>
          <div className={styles.text1}>About Me</div>
          <div className={styles.text1}>Teams</div>
          <div className={styles.text1}>Profile</div>
          <div className={styles.text1}>FAQ</div>
        </div>
        <div className={styles.contact}>
          <div className={styles.subheading}>Legals</div>
          <div className={styles.text1}>Privacy</div>
          <div className={styles.text1}>Disclaimer</div>
          <div className={styles.text1}>Terms</div>
          <div className={styles.text1}>Company</div>
        </div> 
      </div>
    </div>
  )
}
export default Contact