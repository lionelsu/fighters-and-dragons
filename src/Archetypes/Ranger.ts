import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Ranger;
