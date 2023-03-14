export const SIGN_UP_FIELDS = [
  {
    type: 'text',
    placeholder: 'Ваше имя',
    title: 'Имя',
    require: true,
  },
  {
    type: 'text',
    placeholder: 'Ваша фамилия',
    title: 'Фамилия',
    require: true,
  },
  {
    type: 'text',
    placeholder: 'Ваше отчество',
    title: 'Отчество',
    require: false,
  },
  {
    type: 'text',
    placeholder: 'example@exampe.com',
    title: 'Электронная почта',
    require: true,
  },
  {
    type: 'text',
    placeholder: 'Ваш псевдоним',
    title: 'Псевдоним',
    require: true,
  },
  {
    type: 'password',
    placeholder: 'Не менее 8 символов',
    title: 'Пароль',
    require: true,
  },
];

export const ADDRESS_FIELDS = [
  {
    type: 'text',
    placeholder: 'XXXXXX',
    title: 'Индекс',
    require: true,
    maxLength: 6,
  },
  {
    type: 'text',
    placeholder: 'Самара',
    title: 'Город',
    require: true,
    maxLength: 15,
  },
  {
    type: 'text',
    placeholder: 'Ленина',
    title: 'Улица',
    require: true,
    maxLength: 25,
  },
  {
    type: 'text',
    placeholder: '11А',
    title: 'Номер дома',
    require: true,
    maxLength: 5,
  },
  {
    type: 'text',
    placeholder: '11',
    title: 'Номер строения',
    require: false,
  },
  {
    type: 'text',
    placeholder: '11',
    title: 'Номер квартиры',
    require: false,
  },
];
