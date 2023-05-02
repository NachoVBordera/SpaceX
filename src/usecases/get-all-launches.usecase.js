import { LaunchesRepositoy } from "../repositories/launches.repository";

export class AllLaunchesUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    const launches = await repository.getAllLaunches();
    return launches;
  }
}
