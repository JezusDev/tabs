import styles from './scss/input.module.scss';
type InputProps = {
  type: string;
  placeholder?: string;
  mod?: 'brand' | 'default';
  label?: string;
  title?: string;
  maxLength?: number
};

const Input = ({ type, placeholder, label, mod = 'default', title, maxLength }: InputProps) => {
  return (
    <>
      {type !== 'checkbox' ? (
        <>
       {title ? <h3>{title}</h3>: ''} 
        <input
          className={`${styles.input} ${mod ? styles[`input--${mod}`] : ''}`}
          type={type}
            placeholder={placeholder}
            maxLength={maxLength ? maxLength: 1000}
          />
          </>
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
