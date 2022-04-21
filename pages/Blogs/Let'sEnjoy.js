import React from "react";
import styles from "../../styles/Location.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import safe_and_affordable from "../../assets/assects/images/lets enjoy nature with us.png";
function LetsEnjoy() {
  return (
    <div className={styles.bg} style={{marginTop:"150px"}}>
      <div className={styles.imagediv}>
        <Image
          src={safe_and_affordable}
          width="350px"
          height="450px"
          className={styles.image1}
          alt="image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
         Let&apos;s Enjoy
          <br />
          Nature With Us 
        </div>
        <div className={styles.subheading}>
          Volunteer trail stewardship projects in America&apos;s parks and forests designed specifically for college student groups and  young professionals
        </div>
        <Button variant="contained" className={styles.button}>
          Learn more
        </Button>
      </div>
    </div>
  );
}
export default  LetsEnjoy
