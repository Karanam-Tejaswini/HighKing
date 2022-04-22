// import React from "react";
// import styles from "../../styles/EnjoyYourLife.module.css";
// import Image from "next/image";
// import { Button } from "@mui/material";
// import safe_and_affordable from "../../assets/assects/images/enjoy your life.png";
//  function EnjoyYourLife() {
//   return (
//     <div className={styles.bg}>
//      <div className={styles.subcontainer}>
//       <div className={styles.content}>
//         <div className={styles.heading}>
//           Enjoy Your Life
//           <br />
//          With Us Now! <br />
//         </div>
//         <div className={styles.subheading}>
//           Volunteer trail stewardship projects in America&apos; s parks and forests designed specifically for college student groups and  young professionals
//         </div>
//         <div className={styles.test}>
//         <Button variant="contained" className={styles.button}>
//           Contact Us
//         </Button>
//         </div>
//       </div>
//       <div className={styles.imagediv}>
//         <Image
//           src={safe_and_affordable}
//           width="350px"
//           height="450px"
//           className={styles.image1}
//           alt="image"
//         />
//       </div>
//       </div>
//     </div>
//   );
// }
// export default EnjoyYourLife
import React from "react";
// import StartJourney from "./StartJourney";
import styles from '../../styles/Location.module.css'
// import styles from "../../styles/Location.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import safe_and_affordable from "../../assets/assects/images/enjoy your life.png";
 function Location() {
  return (
    <div className={styles.bg} style={{flexDirection:'row-reverse'}}>
      <div className={styles.imagediv} >
        <Image
          src={safe_and_affordable}
          width="500px"
          height="650px"
          className={styles.image1}
          alt="image"
          // style={{backgroundColor:'blue'}}
          // style={{paddingRight:'200px'}}
        />
      </div>
      <div className={styles.content} style={{paddingLeft:'300px'}}>
        <div className={styles.heading}>
          Safe,
          <br />
          Affordable,And <br />
          Trusted
          <br />
        </div>
        <div className={styles.subheading} style={{paddingRight:'400px'}}>
          Volunteer trail stewardship projects in America &apos;s parks and forests designed specifically for college student groups and  young professionals
        </div>
        {/* <Button variant="contained" className={styles.button}>
          Contact Us
        </Button> */}
        <div className={styles.button} style={{justifySelf:'flex-start'}}>
        Contact Us
        </div>
      </div>
    </div>
  );
}
export default Location