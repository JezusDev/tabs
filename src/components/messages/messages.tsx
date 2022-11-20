import { ReactElement } from 'react';
import Container from '../container/container';
import Image from 'next/image';
import avatar from 'src/resources/img/avatar1.jpg';

const Messages = () => {
  const messages: { name: string; avatar: ReactElement; text: string }[] = [];

  for (let i = 0; i < 10; i++) {
    messages.push({
      name: 'Admin Admin',
      avatar: <Image src={avatar} width={'128px'} height={'128px'} />,
      text: 'Lorem ipsum dolor sit amet, consectetur.',
    });
  }

  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Messages;
