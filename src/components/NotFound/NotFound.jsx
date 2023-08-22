import styles from './NotFound.module.css';

import video_5 from '../../video/video-webm_05.webm';
import video_05 from '../../video/video-mp4_05.mp4';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1 className={styles.title}>Not found</h1>

        <video autoPlay muted loop poster="" className={styles.video_item}>
          <source src={video_5} type="video/webm" />
          <source src={video_05} type="video/mp4" />
        </video>
       
      </div>
    </div>
  );
};

export default NotFound;
