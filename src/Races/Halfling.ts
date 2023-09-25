import Race from './Race';

class Halfling extends Race {
  private static _createdInstance = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdInstance += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling._createdInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
