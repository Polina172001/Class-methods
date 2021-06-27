const str = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Не корректная длина name');
    }
    if (str.indexOf(type) === -1) {
      throw new Error('Не является строкой');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 20 / 100;
      this.defence *= 20 / 100;
      this.health = 100;
    } else {
      throw new Error('Персонаж умер');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
