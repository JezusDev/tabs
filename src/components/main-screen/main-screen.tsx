import Columns from '../block/columns/columns';
import Button from '../button/button';
import Input from '../input/input';
import styles from './scss/main-screen.module.scss';

const MainScreen = () => {
  return (
    <>
      <div className={styles.main}>
        <Columns
          left={<h1 className={styles.main__title}>Welcome to KVK.com</h1>}
          right={
            <div className={styles.main__block}>
              <h3 className={styles.main__block_title}>Вход в KVK</h3>
              <div className={styles.main__form}>
                <Input type={'text'} placeholder={'Login'} />
                <Input type={'password'} placeholder={'Password'} />
                <Input type={'checkbox'} label={'Save me'} />
                <Button mod="blue" content={'Log in'} />
                <div className={styles.main__signup}>
                  <span className={styles['main__signup-text']}>Don't have an account?</span>
                  <Button mod="blue" content={'Sign Up'} />
                  <span className={styles['main__signup-sub']}>
                    By registering you you agree to our Terms of Service and our Privacy Policy.
                  </span>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default MainScreen;
