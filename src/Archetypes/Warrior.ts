import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Warrior;
