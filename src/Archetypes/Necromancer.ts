import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Necromancer;
