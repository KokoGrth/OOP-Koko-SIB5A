//ini adalah kelas
class npc {
    //ini adalah properties/atribut
    npcname: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npctype:string[] = ["walk", "fly"];

    //constructor adalah parameter dari class
    constructor(npcname:string, health:number, speed:number, defense:number, attack:number, npctype:string[] = ["walk", "fly"]) {
        this.npcname = npcname;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npctype = npctype;
    }
    //method adalah funcion di dalam kelas, method hanya bisa di akses dari class ini
    walking(): void {
        this.speed =+ 2 ;
        console.log(`${this.npcname}, berjalan, Speed naik ke ${this.speed}`)
    }
    attacking(): void {
        this.attack =+ 2 ;
        console.log(`${this.npcname} menyerang, Attack naik ke ${this.attack}`)
    }
    sprint(): void {
        this.speed =+ 4 ;
        console.log(`${this.npcname} berlari, Speed naik ke ${this.speed}`)
    }
    ultimateskill(): void {
        this.speed =+ 10 ;
        console.log(`${this.npcname} menggunakan ultimate, Attack naik ke  ${this.attack}`)
    }
    isFlying(): void {
        if (this.npctype === "fly") {
            this.speed=+ 10;
            console.log
        }
    }
}

//new npc adalah object
const npc1: npc =new npc ("dragnonslayer", 100, 255, 255, 1000, ["fly"]);
const npc2: npc =new npc ("Goblinhunter", 100, 255, 255, 1000, ["fly"]);


npc1.walking()
npc1.attacking()
npc2.sprint()
npc2.ultimateskill()



