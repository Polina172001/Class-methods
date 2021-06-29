import Magician from '../Magician';

test('check Magician', () => {
  const magician = new Magician('Polina', 'Magician');
  expect(magician).toEqual({
    name: 'Polina',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
