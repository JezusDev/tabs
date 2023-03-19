import { useState } from 'react';
import Container from '../container/container';
import styles from './scss/messages.module.scss';
import Exchange from '../exchange/exchange';
import Delivery from '../delivery/delivery';
import Receiving from '../receiving/receiving';

export enum TabType {
  exchange = 'exchange',
  receiving = 'receiving',
  delivery = 'delivery',
}

export enum TabTypeName {
  exchange = 'Хочу обменять',
  receiving = 'Хочу получить',
  delivery = 'Адрес доставки',
}

const Messages = () => {
  const [activeTab, setActiveTab] = useState('');

  function showMe(type: string) {
    setActiveTab(type);
  }

  function getTabs() {
    const tabs = [];
    for (let key in TabType) {
      const className =
        activeTab === key ? `${styles.messages__tab} ${styles.messages__tabActive}` : styles.messages__tab;
      tabs.push(
        <li key={key} className={className} onClick={() => showMe(key)}>
          {TabTypeName[key]}
        </li>
      );
    }
    return tabs;
  }

  return (
    <>
      <h1>Messages</h1>
      <Container>
        <>
          <ul className={styles.messages__tabs}>{getTabs()}</ul>
          <div className={styles.messages__output}>
            {activeTab === TabType.delivery && <Delivery className={styles.messages__section_active} />}
            {activeTab === TabType.exchange && <Exchange className={styles.messages__section_active} />}
            {activeTab === TabType.receiving && <Receiving className={styles.messages__section_active} />}
          </div>
        </>
      </Container>
    </>
  );
};

export default Messages;
