import { LaunchesRepositoy } from "../src/repositories/launches.repository";
import { UpcomingLaunchUseCase } from "../src/usecases/upcomung-launch.usecase";

jest.mock("../src/repositories/launches.repository");
describe("Get upcoming launch useCase", () => {
  beforeEach(() => {
    LaunchesRepositoy.mockClear();
  });

  it("Should get upcoming launch", async () => {
    LaunchesRepositoy.mockImplementation(() => {
      return {
        getUpcomingLaunch: () => {
          return {
            name: "Starlink-15 (v1.0)",
            date_utc: "2020-10-24T15:31:00.000Z",
          };
        },
      };
    });
    const upcomingLaunch = await UpcomingLaunchUseCase.execute();

    expect(typeof upcomingLaunch).toBe("object");
    expect(upcomingLaunch).toHaveProperty("name");
    expect(upcomingLaunch).toHaveProperty("date_utc");
  });
});
