import Character from '../Character';

test('check parent', () => {
  const result = new Character('Polina', 'Bowman');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('check name < 2', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('P', 'Bowman');
  }).toThrowError(new Error('name меньше 2'));
});

test('check name > 10', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Pllkkkkkkkkkkkkk', 'Bowman');
  }).toThrowError(new Error('name больше 10'));
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Polina', 'Black');
  }).toThrowError(new Error('нет такого типа'));
});

test('check levelUp', () => {
  const result = new Character('Polina', 'Bowman');
  result.levelUp();
  expect(result.health).toBe(100);
  expect(result.attack).toBe(5);
  expect(result.defence).toBe(5);
  expect(result.level).toBe(2);
});

test('check damage', () => {
  const result = new Character('Polina', 'Bowman');
  result.damage(2);
  expect(result.health).toBe(98.5);
});
