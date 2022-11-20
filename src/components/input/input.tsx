import styles from './scss/input.module.scss';
type InputProps = {
  type: 'checkbox' | 'password' | 'text';
  placeholder?: string;
  mod?: 'brand' | 'default';
  label?: string;
};

const Input = ({ type, placeholder, label, mod = 'default' }: InputProps) => {
  return (
    <>
      {type !== 'checkbox' ? (
        <input
          className={`${styles.input} ${mod ? styles[`input--${mod}`] : ''}`}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <div className={styles.input__checkbox}>
          <input type={type} />
          <label>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
