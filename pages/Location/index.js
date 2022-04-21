import React from "react";
import StartJourney from "./StartJourney";
import styles from "../../styles/Location.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import safe_and_affordable from "../../assets/assects/images/safe and affordable.png";
 function Location() {
  return (
    <div className={styles.bg}>
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
          Safe,
          <br />
          Affordable,And <br />
          Trusted
          <br />
        </div>
        <div className={styles.subheading}>
          Volunteer trail stewardship projects in America &apos;s parks and forests designed specifically for college student groups and  young professionals
        </div>
        <Button variant="contained" className={styles.button}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}
export default Location