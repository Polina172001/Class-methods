import Undead from '../Undead';

test('check Undead', () => {
  const result = new Undead('Polina', 'Undead');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
