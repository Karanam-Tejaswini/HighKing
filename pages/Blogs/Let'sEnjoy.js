// import React from "react";
// import styles from "../../styles/Location.module.css";
// import Image from "next/image";
// import { Button } from "@mui/material";
// import safe_and_affordable from "../../assets/assects/images/lets enjoy nature with us.png";
// function LetsEnjoy() {
//   return (
//     <div className={styles.bg} style={{marginTop:"150px"}}>
//       <div className={styles.imagediv}>
//         <Image
//           src={safe_and_affordable}
//           width="350px"
//           height="450px"
//           className={styles.image1}
//           alt="image"
//         />
//       </div>
//       <div className={styles.content}>
//         <div className={styles.heading}>
//          Let&apos;s Enjoy
//           <br />
//           Nature With Us 
//         </div>
//         <div className={styles.subheading}>
//           Volunteer trail stewardship projects in America&apos;s parks and forests designed specifically for college student groups and  young professionals
//         </div>
//         <Button variant="contained" className={styles.button}>
//           Learn more
//         </Button>
//       </div>
//     </div>
//   );
// }
// export default  LetsEnjoy
import React from "react";
// import StartJourney from "./StartJourney";
import styles from "../../styles/Location.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import safe_and_affordable from "../../assets/assects/images/lets enjoy nature with us.png";
 function Location() {
  return (
    <div className={styles.bg} style={{margin:'240px 0px'}}>
      <div className={styles.imagediv} style={{alignItems:'center',justifyContent:'center'}}>
        <Image
          src={safe_and_affordable}
          width="500px"
          height="650px"
          className={styles.image1}
          alt="image"
          // style={{paddingLeft:'200px',backgroundColor:'green'}}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
        Let&apos;s Enjoy
          <br />
           Nature With Us 
        </div>
        <div className={styles.subheading} style={{paddingRight:'550px'}}>
          Volunteer trail stewardship projects in America &apos;s parks and forests designed specifically for college student groups and  young professionals
        </div>
        {/* <Button variant="contained" className={styles.button}>
          Contact Us
        </Button> */}
        <div className={styles.button}>
        Learn more
        </div>
      </div>
    </div>
  );
}
export default Location
