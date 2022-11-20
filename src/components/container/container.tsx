import { ReactElement } from 'react';
import styles from './scss/container.module.scss';

type Props = {
  children: ReactElement;
};
const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
