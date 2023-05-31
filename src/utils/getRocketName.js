import { LaunchesRepositoy } from "../repositories/launches.repository";

export const getRocktName = async (id) => {
  const repository = new LaunchesRepositoy();
  const rocket = await repository.getRocket(id);
  return rocket.name;
};
