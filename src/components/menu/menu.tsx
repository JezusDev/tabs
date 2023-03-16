import Link from 'next/link';
import { headerLabels } from '../../config/labels';
import styles from './scss/menu.module.scss';

const Menu = () => {
  return (
    <ul className={styles.menu}>
      {headerLabels.map((label, key) => {
        return (
          <li className={styles.menu__item}>
            <Link href={'/'}>
              <a>{label.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
