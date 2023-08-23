import React from 'react'
import styles from '../style';
import { MuestraActividades } from '../components';

const actividades = () => {
  return (
  <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
           <div>
            <h2 className={`${styles.h2text} mt-16  mb-6 ml-7 xs:mb-10 xs:ml-7`} >Nuestras actividades</h2>
           </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <MuestraActividades />
        </div>
    </div>
  </div>
  )
}

export default actividades