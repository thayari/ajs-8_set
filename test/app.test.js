import Character from '../src/character';
import Team from '../src/team';

test('add character', () => {
  const char = new Character('John', 25, 40);
  const dreamteam = new Team();
  dreamteam.add(char);
  const recieved = dreamteam.members;
  const expected = new Set([{
    attack: 25, defence: 40, health: 100, name: 'John',
  },
  ]);
  expect(recieved).toEqual(expected);
});


test('character is already in the team', () => {
  function recieved() {
    const char = new Character('John', 25, 40);
    const dreamteam = new Team();
    dreamteam.add(char);
    dreamteam.add(char);
  }
  expect(recieved).toThrow('Этот герой уже в команде');
});

test('add all characters', () => {
  const peter = new Character('Peter', 25, 40);
  const miles = new Character('Miles', 30, 35);
  const gwen = new Character('Gwen', 45, 20);
  const dreamteam = new Team();
  dreamteam.addAll(peter, miles, gwen);
  const recieved = dreamteam.members;
  const expected = new Set([
    {
      name: 'Peter', health: 100, attack: 25, defence: 40,
    },
    {
      name: 'Miles', health: 100, attack: 30, defence: 35,
    },
    {
      name: 'Gwen', health: 100, attack: 45, defence: 20,
    },
  ]);
  expect(recieved).toEqual(expected);
});

test('set to array', () => {
  const peter = new Character('Peter', 25, 40);
  const miles = new Character('Miles', 30, 35);
  const gwen = new Character('Gwen', 45, 20);
  const dreamteam = new Team();
  dreamteam.addAll(peter, miles, gwen);
  const recieved = dreamteam.toArray();
  const expected = [
    {
      name: 'Peter', health: 100, attack: 25, defence: 40,
    },
    {
      name: 'Miles', health: 100, attack: 30, defence: 35,
    },
    {
      name: 'Gwen', health: 100, attack: 45, defence: 20,
    },
  ];
  expect(recieved).toEqual(expected);
});
