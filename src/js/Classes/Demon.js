import Character from './Character';

export default class Demon extends Character {
  constructor(name, type = 'Demon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.characterAttack = 100;
  }

  get attack() {
    return this.characterAttack;
  }

  set attack(x) {
    const cells = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
    this.characterAttack = cells[x - 1];
  }

  get stoned() {
  // Непонятно что тут делать
  }

  set stoned(x) {
    this.characterAttack -= Math.log2(x) * 5;
  }
}
