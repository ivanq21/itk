import React from 'react';
import s from './Dialog.module.scss'

const Dialog = ({text}) => {
  return(
    <div className={s.message}>
      <div className={s.img}>img</div>
      <div className="text">{text}</div>
    </div>
  )
}

export default Dialog;