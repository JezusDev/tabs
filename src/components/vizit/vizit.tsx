import React, { useState } from 'react';
import { render } from 'react-dom';
import Avatar from 'src/resources/img/my_avatar.jpg';
import styles from './scss/styles.module.scss';

const VizitComp = () => {

  return (
    <div className={styles.vizit}>
      <div className={styles.vizit__main}>
        <img src={Avatar.src}></img>
        <div className={styles.vizit__desc}>
          <span className={styles.vizit__title}>Заворотный Артем</span>
          
          <span>ИВТ-92</span>
          <span>Веб-разработчик</span>
        </div>
      </div>
    </div>
  );
};

export default VizitComp;
