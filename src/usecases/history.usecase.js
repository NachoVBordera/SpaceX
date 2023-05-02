import { LaunchesRepositoy } from "../repositories/launches.repository";

export class HistoryUseCase {
  static async execute() {
    const repository = new LaunchesRepositoy();
    return await repository.getHistory();
  }
}
