import Columns from '../columns/columns';
import styles from './scss/block.module.scss';
import Container from '../container/container';
import { useEffect, useMemo, useState } from 'react';
import UserStore from '../../stores/user.authorized.store';
import FormStore from '../../stores/form.store';
import { USER_FIELDS } from '../../config/fields';
import Input from '../input/input';
import { observer } from 'mobx-react';
import moment from 'moment';

const ProfileBlock = observer(() => {
  const formStore = useMemo(() => new FormStore(USER_FIELDS), []);
  const [{ userAuthorized }] = useState(() => new UserStore());

  // useEffect(() => {
  //   console.log(formStore.fields);
  //   const user = userAuthorized;

  //   if (user) {
  //         user.createdAt = moment(userAuthorized.createdAt).format("DD-MM-YYYY");
  //     Object.keys(user).map(key => {
  //       if (formStore.fields[key]) {
  //         formStore.setField(key, user[key]);
  //       }
  //     });
  //   }
  // }, [userAuthorized]);

  return (
    <div className={styles.profile}>
      <Columns
        left={<></>}
        right={
          <Container>
            <div className={styles.profile__block}>
              <h1>Профиль</h1>
              <div className={styles.profile__inputs}>
                {Object.keys(formStore.fields).map(key => {
                  const params = formStore.fieldsParams[key];
                  return (
                    <Input
                      key={key}
                      type={params.type}
                      placeholder={params.placeholder}
                      title={params.title}
                      value={formStore.fields[key].value ? formStore.fields[key].value : ''}
                      // disabled={params.disabled}
                      onChange={e => formStore.setField(formStore.fields[key].name, e.target.value)}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        }
      />
    </div>
  );
});

export default ProfileBlock;
