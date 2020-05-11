import Character from '../app';

test('Нулевая атака', () => {
  const received = new Character('Bowman', 'Bowman');
  received.damage(0);
  expect(received.health).toBe(100);
});

test('Получение урона', () => {
  const received = new Character('Bowman', 'Bowman');
  received.damage(50);
  expect(received.health).toBe(70);
});

test('Урон больше здоровья', () => {
  const received = new Character('Bowman', 'Bowman');
  received.damage(500);
  expect(received.health).toBe(0);
});
