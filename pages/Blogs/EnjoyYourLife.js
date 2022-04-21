import React from "react";
import styles from "../../styles/EnjoyYourLife.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import safe_and_affordable from "../../assets/assects/images/enjoy your life.png";
 function EnjoyYourLife() {
  return (
    <div className={styles.bg}>
     <div className={styles.subcontainer}>
      <div className={styles.content}>
        <div className={styles.heading}>
          Enjoy Your Life
          <br />
         With Us Now! <br />
        </div>
        <div className={styles.subheading}>
          Volunteer trail stewardship projects in America&apos; s parks and forests designed specifically for college student groups and  young professionals
        </div>
        <div className={styles.test}>
        <Button variant="contained" className={styles.button}>
          Contact Us
        </Button>
        </div>
      </div>
      <div className={styles.imagediv}>
        <Image
          src={safe_and_affordable}
          width="350px"
          height="450px"
          className={styles.image1}
          alt="image"
        />
      </div>
      </div>
    </div>
  );
}
export default EnjoyYourLife