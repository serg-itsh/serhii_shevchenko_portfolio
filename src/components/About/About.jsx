import React, {useState, useEffect} from 'react';
// import { useState } from 'react';

import styles from './About.module.css';

import image_01 from '../../images/about/image-01.jpg';
import image_02 from '../../images/about/image-02.jpg';
import image_03 from '../../images/about/image-03.jpg';

import video_1 from '../../video/goit-webm.webm';
import video_01 from '../../video/goit-mp4.mp4';

import Clok from '../../components/Clok/Clok';
import { getPadTime } from 'helpers/getPadTime';

const About = () => {
  const [timerMonth, setTimerMonth] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHouers] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

let interval;




const startTimer = () => {
  const countDownDate = new Date("December 31, 2022").getTime();

  interval = setInterval(() =>{
    const now = new Date().getTime();
    // const distance = countDownDate - now;
    const distance =  now - countDownDate;
    
    const month = getPadTime(Math.floor((distance / (24*60*60*1000))/30));
    const days = getPadTime(Math.floor(distance / (24*60*60*1000)));
    const hours = getPadTime(Math.floor((distance % (24*60*60*1000))/
    (60*60*1000)));
    const minutes = getPadTime(Math.floor((distance % (60*60*1000))/
    (60*1000)));
    const seconds = getPadTime(Math.floor((distance % (60*1000))/
    1000));
  

if(distance < 0){
  //Stop timer
  clearInterval(interval.current)
}else{
  //Update timer
  setTimerMonth(month);
  setTimerDays(days);
  setTimerHouers(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}

  })
}

useEffect(()=>{
  startTimer();
})


  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <ul className={styles.about_wrapper}>
          <li className={styles.aboutText}>
            <h2 className={styles.title}>SUMMARY</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                I am a Front-End developer looking for a full-time position in a
                company that's aimed at making both everyday life and business
                easier, more productive and user-friendly. I have sound
                knowledge of HTML, CSS, JavaScript, and React. I am a fast
                learner, responsible, and ready for challenging tasks .
              </p>
              <img
                className={`${styles.about_img} `}
                src={image_01}
                alt="web design"
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2 className={styles.title}>WORK EXPERIENCE</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                Mechanic <br />
                Cardboard and paper factory "Papir-Mal" | 2013-2022 Task
                coordination planning and final quality control of completed
                works. Development of drawings and design of machine parts.
                Installation of a cardboard machine. Modernization of equipment.
              </p>
              <img
                className={`${styles.about_img} ${styles.about_imgTopFirst}`}
                src={image_02}
                alt="web design"
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2 className={styles.title}>EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                National Technical Univer sity of Ukraine "Kyiv Polytechnic
                Institute" 2006 - 2012 Mechanical engineer, specialty
                "Technology of machine-building"
              </p>
              <img
                className={`${styles.about_img} ${styles.about_imgSecond}`}
                src={image_03}
                alt="web design"
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2 className={styles.title}>ADDITIONAL EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                IT School GoIT (Kyiv)
                <br />
                2022 Full Stack Developer
              </p>
              <p className={styles.text}>
                IT School Prometheus (Lviv)
                <br />
                2021 Bas i c Software Tes ting
              </p>
              <video
                autoPlay
                muted
                loop
                poster=""
                className={`${styles.about_img} ${styles.about_imgTop}`}
              >
                <source src={video_1} type="video/webm" />
                <source src={video_01} type="video/mp4" />
              </video>
            </div>
          </li>
        </ul>

        <Clok
          timerMonth={timerMonth}
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
    </div>
  );
};

export default About;
