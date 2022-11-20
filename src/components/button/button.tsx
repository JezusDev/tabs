
import styles from './scss/styles.module.scss'

type ButtonProps = {
    mod?: 'blue' | 'grey';
    size: 'wide' | 'md';
    content: string;
}

const Button = ({ size, content, mod }: ButtonProps) => {
  return <button className={`${styles.button} ${mod ? styles[`button--${mod}`] : ''} ${styles[`button--${size}`]}`}>{content}</button>;
};

export default Button