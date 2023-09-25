import Race from './Race';

class Elf extends Race {
  private static _createdInstance = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdInstance += 1;
  }

  static override createdRacesInstances(): number {
    return Elf._createdInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
