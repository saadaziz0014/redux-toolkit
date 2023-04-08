import { Chance } from "chance";

const chance = Chance();

const namez = () => {
  return chance.name({ middle: true });
};

export { namez };
