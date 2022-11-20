import Link from 'next/link';
import styles from './scss/header.module.scss';
import Logo from '../../resources/img/logo.svg';
import Avatar from '../../resources/img/avatar.jpg';
import Image from 'next/image';
import Menu from '../menu/menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
      <Link href="/">
        <a className={styles.header__logo}>
          <Logo />
        </a>
      </Link>
      <div className={styles.header__menu}>
        <Menu/>
      </div>
      <div className={styles.header__avatar}>
        <Image src={Avatar} height={'32px'} width={'32px'} />
      </div>
      </div>
    </header>
  );
};

export default Header;
