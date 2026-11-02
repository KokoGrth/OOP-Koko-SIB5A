class Enemy {
  health: number;
  attack: number;
  physicalDefense: number;
  magicalDefense: number;
  speed: number;

  constructor(
    health: number,
    attack: number,
    physicalDefense: number,
    magicalDefense: number,
    speed: number,
  ) {
    this.health = health;
    this.attack = attack;
    this.physicalDefense = physicalDefense;
    this.magicalDefense = magicalDefense;
    this.speed = speed;
  }

  baseHealth(): number {
    return this.health;
  }
}

class Minions extends Enemy {
  baseHealth(): number {
    return (this.health += 30);
  }
}

class MinionFighter extends Minions {
  baseHealth(): number {
    super.baseHealth();
    return (this.health += 20);
  }
}

class MinionArcher extends Minions {
  attackRange: number;

  constructor(
    health: number,
    attack: number,
    physicalDefense: number,
    magicalDefense: number,
    speed: number,
    attackRange: number,
  ) {
    super(health, attack, physicalDefense, magicalDefense, speed);
    this.attackRange = attackRange;
  }

  baseHealth(): number {
    super.baseHealth();
    return (this.health += 10);
  }
}

class MinionMage extends Minions {
  baseHealth(): number {
    super.baseHealth();
    return (this.health += 10);
  }
}

class SuperMinion extends Minions {
  baseHealth(): number {
    super.baseHealth();
    return (this.health += 50);
  }
}

class Lord extends Enemy {
  baseHealth(): number {
    return (this.health += 200);
  }
}

class Turtle extends Enemy {
  baseHealth(): number {
    return (this.health += 100);
  }
}

class RedDragon extends Enemy {
  baseHealth(): number {
    return (this.health += 150);
  }
}

class BlueWolf extends Enemy {
  baseHealth(): number {
    return (this.health += 80);
  }
}

// health, attack, physicalDefense, magicalDefense, speed
const minion = new Minions(10, 5, 2, 2, 3);
console.log(minion.baseHealth());

const minionFighter = new MinionFighter(100, 12, 5, 2, 4);
const minionArcher = new MinionArcher(100, 15, 2, 2, 4, 8); // attackRange = 8
const minionMage = new MinionMage(100, 14, 2, 5, 4);
const superMinion = new SuperMinion(100, 20, 10, 10, 4);
const lord = new Lord(100, 80, 30, 30, 5);
const turtle = new Turtle(100, 50, 20, 20, 0);
const redDragon = new RedDragon(100, 60, 25, 15, 6);
const blueWolf = new BlueWolf(100, 40, 15, 15, 8);

console.log(minionFighter);
console.log(minionArcher);
console.log(minionMage);
console.log(superMinion);
console.log(lord);
console.log(turtle);
console.log(redDragon);
console.log(blueWolf);