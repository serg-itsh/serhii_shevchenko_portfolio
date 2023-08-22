// rafsc
import React, { Fragment } from 'react';

import styles from './Clok.module.css';

const Clok = ({
  timerMonth,
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  return (
    <Fragment>
      <section className={styles.timerConteiner}>
        <section className={styles.timer}>
          <div className={styles.clok}>
            <section>
              <p>{timerMonth}</p>
              <small>Month</small>
            </section>
            <span>:</span>{' '}
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>{' '}
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
          {/* <p>To the start work in IT.</p> */}
          <p>Getting started in IT.</p>
        </section>
      </section>
    </Fragment>
  );
};

Clok.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clok;
