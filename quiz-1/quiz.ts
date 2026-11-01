// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
  hp: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: string;

  constructor(
    hp: number = 1,
    speed: number = 5,
    positionX: number = 0,
    positionY: number = 0,
    invincible: boolean = false,
    currentForm: string = "mario",
  ) {
    this.hp = hp;
    this.speed = speed;
    this.positionX = positionX;
    this.positionY = positionY;
    this.invincible = invincible;
    this.currentForm = currentForm;
  }

  moveRight(): void {
    this.positionX += this.speed;
    console.log(`Mario bergerak ke kanan, posisi X sekarang ${this.positionX}.`);
  }

  moveLeft(): void {
    this.positionX -= this.speed;
    console.log(`Mario bergerak ke kiri, posisi X sekarang ${this.positionX}.`);
  }

  getAttacked(): void {
    const formSebelumnya = this.currentForm;

    if (this.invincible) {
      console.log(`${formSebelumnya} diserang, tetapi sedang kebal sehingga serangan tidak berpengaruh.`);
      return;
    }
    this.hp -= 1;
    this.currentForm = "mario";
    console.log(`${formSebelumnya} diserang, HP sekarang ${this.hp} dan wujud sekarang ${this.currentForm}.`);
  }

  shootFireball(): void {
    if (this.currentForm === "fire mario") {
      console.log("Fire Mario menembakkan bola api.");
    } else {
      console.log(`Mario tidak bisa menembakkan bola api, wujud sekarang ${this.currentForm}.`);
    }
  }
}

class Item {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  use(mario: Mario): void {
    console.log(`${this.name} dipakai.`);
  }
}

class SuperMushroom extends Item {
  constructor() {
    super("Jamur Ajaib");
  }

  use(mario: Mario): void {
    mario.currentForm = "super mario";
    mario.hp += 1;
    console.log(`${this.name} dipakai. Wujud sekarang ${mario.currentForm}, HP sekarang ${mario.hp}.`);
  }
}

class FireFlower extends Item {
  constructor() {
    super("Bunga Api");
  }

  use(mario: Mario): void {
    mario.currentForm = "fire mario";
    mario.hp += 1;
    console.log(`${this.name} dipakai. Wujud sekarang ${mario.currentForm}, HP sekarang ${mario.hp}, dapat menembakkan bola api.`);
  }
}

class SuperStar extends Item {
  constructor() {
    super("Bintang Super");
  }

  use(mario: Mario): void {
    mario.invincible = true;
    console.log(`${this.name} dipakai. Mario sekarang kebal terhadap serangan.`);
  }
}

const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

mario.shootFireball();
mario.moveRight();
mario.moveLeft();
mushroom.use(mario);
mario.getAttacked();
flower.use(mario);
mario.shootFireball();
mario.getAttacked();
mario.shootFireball();
star.use(mario);
mario.getAttacked();
mario.invincible=false