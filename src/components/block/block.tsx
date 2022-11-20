import { ReactNode } from "react";

import styles from './scss/block.module.scss'

type BlockPropTypes = {
  children: ReactNode;
  mobWide?: boolean;
  mod?: 'sm' | 'flex' | 'md' | 'lg';
  type?: 'divided' | 'wide';
  height?: boolean;
};

const Block = ({ children, mobWide, mod, type, height }: BlockPropTypes) => {
  return (
    <div
      className={`${styles.block} ${height ? styles['block--height'] : ''}  ${
        mod ? styles[`block--${mod}`] : ''
      } ${type ? styles[`block--${type}`] : ''} ${mobWide ? styles['block--mob-p-0'] : ''}`}
    >
      {children}
    </div>
  );
};

export default Block;



