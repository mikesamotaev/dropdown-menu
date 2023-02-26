import IDropdown from '../interfaces/IDropdown';

export const dropdowns: IDropdown[] = [
  {
    id: 1,
    mainIcon: 'plus',
    list: [
      {
        itemText: 'Взять книгу',
        itemIcon: 'book',
      },
      {
        itemText: 'Открыть книгу',
        itemIcon: 'book-open',
      },
      {
        itemText: 'Сделать закладку в книге',
        itemIcon: 'bookmark',
      },
    ]
  },
  {
    id: 2,
    mainIcon: 'activity',
    list: [
      {
        itemText: 'Фотографировать',
        itemIcon: 'camera',
      },
      {
        itemText: 'Собирать чемодан для поездки',
        itemIcon: 'briefcase',
      },
      {
        itemText: 'Ходить с компасом по лесу, заблудиться, переночевать в лесу, вызвать спасателей',
        itemIcon: 'compass',
      },
      {
        itemText: 'Улыбаться',
        itemIcon: 'smile',
      },
      {
        itemText: 'Хмуриться',
        itemIcon: 'frown',
      },
    ]
  },
  {
    id: 3,
    mainIcon: 'sun',
    list: [
      {
        itemText: 'Любоваться восходом',
        itemIcon: 'sunrise',
      },
      {
        itemText: 'Любоваться закатом',
        itemIcon: 'sunset',
      },
    ]
  },
  {
    id: 4,
    mainIcon: 'code',
    list: [
      {
        itemText: 'Выложить на github',
        itemIcon: 'github',
      },
      {
        itemText: 'Выложить на gitlab',
        itemIcon: 'gitlab',
      },
      {
        itemText: 'Выложить на codepen',
        itemIcon: 'codepen',
      },
      {
        itemText: 'Скрывать от мира свой гениальный код',
        itemIcon: 'meh',
      },
    ]
  },
  {
    id: 5,
    mainIcon: 'user',
    list: [
      {
        itemText: 'Говорить',
        itemIcon: 'mic',
      },
      {
        itemText: 'Молчать',
        itemIcon: 'mic-off',
      },
      {
        itemText: 'Переписываться',
        itemIcon: 'message-square',
      },
    ]
  },
  {
    id: 6,
    mainIcon: 'globe',
    list: [
      {
        itemText: 'Гулять в дождь',
        itemIcon: 'cloud-rain',
      },
      {
        itemText: 'Гулять в снег',
        itemIcon: 'cloud-snow',
      },
      {
        itemText: 'Гулять в снегодождь',
        itemIcon: 'cloud-drizzle',
      },
      {
        itemText: 'Сидеть дома с какао',
        itemIcon: 'coffee',
      },
    ]
  },
];