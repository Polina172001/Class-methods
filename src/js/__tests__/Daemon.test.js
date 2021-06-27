import Daemon from '../Daemon';

test('check Daemon', () => {
  const result = new Daemon('Polina', 'Daemon');
  expect(result).toEqual({
    name: 'Polina',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
