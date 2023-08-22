import styles from './Home.module.css';

// import videoWebm_fon from '../../video/video-fon-webm.webm';
// import videoMp4_fon from '../../video/video-fon-mp4.mp4';

// import videoWebm_fon from '../../video/video-webm-slow.webm';
// import videoMp4_fon from '../../video/video-mp4-slow.mp4';

// import videoWebm_fon from '../../video/video-star-webm.webm';
import videoMp4_fon from '../../video/video-star-mp4.mp4';

import foto from '../../images/home/foto-home.jpg';



const Home = () => {




  return (
    <div className={styles.home}>
      <div className={styles.fullScreen}>
        <div className={styles.fullScreen_body}>
          <div className={styles.fullScreen_title}>
            Hello!
            <br /> I am Serhii.
          </div>
          <div className={styles.fullScreen_text}>
            A beginner web developer.
          </div>
        </div>
        <video
          // controls
          autoPlay
          muted
          loop
          preload="auto"
          className={styles.fullScreen_video}
        >
          {/* <source src={videoWebm_fon} type="video/webm" /> */}
          <source src={videoMp4_fon} type="video/mp4" />
        </video>
      </div>

      <div className={styles.container}>
        {/* <h1 className={styles.title}>
          Hello! I am Serhii, a beginner web developer.
        </h1> */}
        <img
        srcset={foto}
          src="https://avatars.githubusercontent.com/u/98112335?s=400&u=c40bac0e550924b5ad94177468e107699b5232d2&v=4"
          alt="Serhii Shevchenko developer"
          // width={300}
          // sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, (min-width: 480px) 100vw, 100vw"
        ></img>

       
        <div className={styles.text}>
          <p className={styles.text}>
            I attended full-stack developer courses, but I was most interested
            in the frontend.
          </p>

          <p className={styles.text}>
            In the past (worked as a mechanic in a paper production shop, held
            the position for 9 years) was involved in control and specific
            prevention of emergency stops of paper industry equipment.
          </p>
          <p className={styles.text}>
            Development and modernization of mechanisms of various complexity
            (organization of production processes, development of drawings).
          </p>
          <p className={styles.text}>
            Now I am actively developing in development, in particular, I want
            to do frontend. English level (elementary), I am actively improving
            and taking additional courses.
          </p>
          <p className={styles.text}>
            Most of all, I like working with the visual part, since one of my
            hobbies is creating pictures and working with graphic programs.
          </p>

          <p className={styles.text}>
            In order to become a full-fledged team player, I am also considering
            options as an intern.
          </p>
        </div>

     
      </div>
    </div>
  );
};

export default Home;
