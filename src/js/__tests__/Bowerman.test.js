import Bowman from '../Bowerman';

test('check Bowman', () => {
  const result = new Bowman('Polina', 'Bowman');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
