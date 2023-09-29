import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Monsters = Fighter | SimpleFighter;

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Monsters[];

  constructor(player: Fighter, monster: Monsters[]) {
    super(player);
    this._player = player;
    this._monsters = monster;
  }

  override fight(): number {
    const monstersAlive = () => this._monsters
      .some((monster) => monster.lifePoints > 0);

    while (this._player.lifePoints > 0 && monstersAlive()) {
      this._monsters.filter((monster) => monster.lifePoints > 0)
        .forEach((monster) => {
          this._player.attack(monster);
          monster.attack(this._player);
        });
    }
    return super.fight();
  }
}

export default PVE;
