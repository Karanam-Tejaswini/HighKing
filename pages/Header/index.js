import React from "react";
import Location from "../Location";
import Scrollspy from "react-scrollspy";
import Companies from "../Companies"
import Contact from "../Contact";
import Blogs from "../Blogs";
import { Button } from "@mui/material";
import styles from "../../styles/Hero.module.css";
import Image from 'next/image'
import HeroImage from "../../assets/assects/images/be prepared image.png"
import Secret_Locations from '../../assets/assects/icons/location.js'
import Safe_Adventure from '../../assets/assects/icons/shoe.js'
import Professional_hikers from '../../assets/assects/icons/bag.js'
import Logo from '../../assets/assects/icons/logo.js'
function Header() {
  return (
    <div >
      <div className={styles.content_bg}>
        {/* ------------------------------------------------------NAVBAR------------------------------------------------------------- */}
        <div>
          <Scrollspy
            className={styles.navbar}
            items={["section-1", "section-2", "section-3", "section-4"]}
            currentClassName="is-current"
          >
            <div className={styles.logo}><Logo/></div>
            <div className={styles.list}>
              <div>
                <li className={styles.li}>
                  <a href="#section-1" className={styles.names}>Location</a>
                </li>
              </div>
              <div>
                <li className={styles.li}>
                  <a href="#section-2" className={styles.names}>Blogs</a>
                </li>
              </div>
              <div>
                <li className={styles.li}>
                  <a href="#section-3" className={styles.names}>Testimonials</a>
                </li>
              </div>
              <div>
                <li className={styles.li}>
                  <a href="#section-4" className={styles.names}>Contact</a>
                </li>
              </div>
            </div>
          </Scrollspy>
        </div>

        {/* -------------------------------------------------------------NAVBAR---------------------------------------------------------- */}

        <div className={styles.Herocomponent}>
          <section id="section-1" className={styles.sectionHero}>
            <div className={styles.text}>
              <div>
                <div className={styles.heading}>Be prepared for<br/> the mountains<br/> and beyond.</div>
                <div className={styles.subheading}>
                  Are you looking for amazing hiking<br/> travel? Don’t worry! We got
                  it for you!
                </div>
                <div className={styles.buttons}>
                  <div>
                {/* <Scrollspy
                  items={["section-1", "section-2", "section-3", "section-4"]}
                  currentClassName="is-current"
                > */}
                  {/* <Button variant="contained" href="#section-4" className={styles.contactUs}>
                    Contact Us
                  </Button> */}
                  <div className={styles.contactUs}>
                  Contact Us
                  </div>
                {/* </Scrollspy> */}
                </div>
                {/* <br/>
                <br/> */}
                <div>
                  {/* <br/> */}
                {/* <Button variant="outlined" className={styles.contactUs}>
                  <a href="https://www.youtube.com/watch?v=cd8s7mEq3Mo">
                    Watch Video
                  </a>
                </Button> */}
                <div className={styles.WatchVideo}>
                <a href="https://www.youtube.com/watch?v=cd8s7mEq3Mo">
                    Watch Video
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div >
              <div className={styles.imageContainer}>
              <Image src={HeroImage} width="550px" height="800px" className={styles.img} alt="image"/>
              </div>
              </div> 
              {/* <ExpandCard /> */}
          </section>
        </div>
        <div className={styles.card}>
          <div>
            <Secret_Locations/>
            <div className={styles.card_heading}>Secret Locations</div>
            <div className={styles.card_content}>Lorem ipsum dolor sit amet, consectet adispicing elit,sedo eiumodtempor</div>
            <div className={styles.Readmore}>Read more</div>
          </div>
          <div>
            <Safe_Adventure/>
            <div className={styles.card_heading}>Safe Adventure</div>
            <div className={styles.card_content}>Lorem ipsum dolor sit amet, consectet adispicing elit,sedo eiumodtempor</div>
            <div className={styles.Readmore}>Read more</div>
          </div>
          <div>
            <Professional_hikers/>
            <div className={styles.card_heading}>Professional Hikers</div>
            <div className={styles.card_content}>Lorem ipsum dolor sit amet, consectet adispicing elit,sedo eiumodtempor</div>
            <div className={styles.Readmore}>Read more</div>
          </div>
        </div>
      </div>
      <div className={styles.fromquote}>
      <div className={styles.card_content} style={{padding:"100px 0px"}}>Don&apos;t hesitate to contact us to get better information. <span className={styles.Readmore} style={{fontStyle:"italic"}}>EXPLORE ALL TREKKING</span></div>
       <section id="section-2">
        {" "}
        <Location />
        <Companies/>
      </section>
      </div>
     
      <section id="section-4">
        {" "}
        <Blogs />
      </section>
      <section>
        <Contact/>
      </section>
      {/* <section id="section-3">
        {" "}
        Testimonials here */}
        {/* <Testimonials /> */}
      {/* </section>
      <Contact/> */}
    </div>
  );
}
export default Header
