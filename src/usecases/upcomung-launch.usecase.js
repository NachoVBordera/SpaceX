import { LaunchesRepositoy } from "../repositories/launches.repository";

export class UpcomingLaunchUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    return await repository.getUpcomingLaunch();
  }
}
