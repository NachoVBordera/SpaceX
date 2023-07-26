import { LaunchesRepositoy } from "../repositories/launches.repository";
import { formatDate } from "../utils/formatDate";
import { getRocktName } from "../utils/getRocketName";
export class AllLaunchesUseCase {
  static async execute(num) {
    const query = {
      options: {
        order: "desc",
        limit: 10,
        page: num ?? 1,
      },
    };

    const repository = new LaunchesRepositoy();
    const launches = await repository.getAllLaunches(query);
    const mylaunches = await launches.docs.map(async (launch) => {
      const rocketname = await getRocktName(launch.rocket);

      return {
        ...launch,
        date_utc: formatDate(launch.date_utc),
        rocket: rocketname,
      };
    });
    const resolvedLaunches = await Promise.all(mylaunches);
    return resolvedLaunches;
  }
}
