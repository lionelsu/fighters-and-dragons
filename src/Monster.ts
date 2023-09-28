import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damageReceived = this._lifePoints <= 0 
      ? this._lifePoints = -1 
      : this._lifePoints -= attackPoints;
    return damageReceived;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;