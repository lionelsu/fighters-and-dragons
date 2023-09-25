import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Mage;
