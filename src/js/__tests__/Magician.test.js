import Magician from '../Magician';

test('check Magician', () => {
  const result = new Magician('Polina', 'Magician');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
