import { ADDRESS_FIELDS, SIGN_UP_FIELDS } from '../../config/fields';
import Columns from '../columns/columns';
import Button from '../button/button';
import Container from '../container/container';
import Input from '../input/input';

import styles from './scss/signup.module.scss'

const SignUp = () => {
  return (
    <>
    
      <Container>
        <div className={styles.signup}>
        <div className={styles.signup__columns}>
          <Columns
            left={
              <>
                {SIGN_UP_FIELDS.map(field => {
                  return <Input type={field.type} placeholder={field.placeholder} title={field.title} />;
                })}
              </>
            }
            right={
              <>
                {ADDRESS_FIELDS.map(field => {
                  return <Input type={field.type} placeholder={field.placeholder} title={field.title}  maxLength={field.maxLength}/>;
                })}
              </>
            }
          ></Columns>
        </div>
        <Button size={'md'} mod={"blue"} content={'Sign Up'}/>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
