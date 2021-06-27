import Swordsman from '../Swordsman';

test('check Swordsman', () => {
  const result = new Swordsman('Polina', 'Swordsman');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
