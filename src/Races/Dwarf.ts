import Race from './Race';

class Dwarf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
