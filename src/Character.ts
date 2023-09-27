import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// Use Race and Archetype constructors to make this code more versatile
interface RaceCtor {
  new (name: string, dexterity: number): Race;
}

interface ArchCtor {
  new (name: string): Archetype;
}

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string, RaceAbc: RaceCtor = Elf, ArchAbc: ArchCtor = Mage) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new RaceAbc(name, this._dexterity);
    this._archetype = new ArchAbc(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get maxLifePoints() { return this._maxLifePoints; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    // Math.max to ensure that the damage is at least 1
    const damage = Math.max(attackPoints - this._defense, 1);
    this._lifePoints -= damage;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const strength = this._strength;
    enemy.receiveDamage(getRandomInt(strength, strength * 2));
  }
}

export default Character;
