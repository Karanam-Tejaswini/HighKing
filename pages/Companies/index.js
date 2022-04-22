import React from 'react'
import styles from '../../styles/Companies.module.css'
import Travel_Advisor from '../../assets/assects/icons/Travel Advisor'
import United_Travel from '../../assets/assects/icons/United Travel'
import Travel_channel from '../../assets/assects/icons/Travel_Channel'
import Tripraja from '../../assets/assects/icons/tripraja'
import Booking from '../../assets/assects/icons/Booking'
function index() {
  return (
    <div className={styles.container}>
        <div className={styles.safe_journey}>
        Safe Journey
        </div>
        <div style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            <div className={styles.heading}>Trusted by Big Companies</div>
            <div  className={styles.content}>
                <div className={styles.logos}>
                    <div className={styles.imgL}><Travel_Advisor/></div>
                    <div className={styles.imgL}><United_Travel/></div>
                    <div className={styles.imgL}><Travel_channel/></div>
                </div>
                <div className={styles.logos}>
                    <div className={styles.imgL}><Tripraja/></div>
                    <div className={styles.imgL}><Booking/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default  index