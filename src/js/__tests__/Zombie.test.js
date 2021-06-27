import Zombie from '../Zombie';

test('check Zombie', () => {
  const result = new Zombie('Polina', 'Zombie');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
