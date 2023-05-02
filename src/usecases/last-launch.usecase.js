import { LaunchesRepositoy } from "../repositories/launches.repository";

export class LastLaunchUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    return repository.getLastLaunches();
  }
}
