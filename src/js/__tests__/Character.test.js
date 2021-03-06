import Character from '../Character';

test('должен правильно быть сгенерирован Bowman', () => {
  const bowman = new Character('Polina', 'Bowman');
  expect(bowman).toEqual({
    name: 'Polina',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('check name < 2', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('P', 'Bowman');
  }).toThrowError('Не корректная длина name');
});

test('check name > 10', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Pllkkkkkkkkkkkkk', 'Bowman');
  }).toThrowError('Не корректная длина name');
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Polina', 'Black');
  }).toThrowError('Нет такого типа');
});

test('метод levelUp правильно сработал', () => {
  const bowman = new Character('Polina', 'Bowman');
  bowman.levelUp();
  expect(bowman).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Polina',
    type: 'Bowman',
  });
});

test('check damage', () => {
  const result = new Character('Polina', 'Bowman');
  result.damage(2);
  expect(result.health).toBe(98.5);
});
