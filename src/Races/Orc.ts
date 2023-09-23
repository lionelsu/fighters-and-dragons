import Race from './Race';

class Orc extends Race {
  private static _createdInstance = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstance += 1;
  }

  static override createdRacesInstances(): number {
    return this._createdInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
