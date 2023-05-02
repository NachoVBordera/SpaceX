import { LaunchesRepositoy } from "../src/repositories/launches.repository";
import { LastLaunchUseCase } from "../src/usecases/last-launch.usecase";

jest.mock("../src/repositories/launches.repository");
describe("Last launch useCase", () => {
  beforeEach(() => {
    LaunchesRepositoy.mockClear();
  });

  it("Shuld get last launch", async () => {
    LaunchesRepositoy.mockImplementation(() => {
      return {
        getLastLaunches: () => {
          return {
            name: "FalconSat",
            date_utc: "2006-03-24T22:30:00.000Z",
          };
        },
      };
    });

    const lastLaunch = await LastLaunchUseCase.execute();
    // console.log("[LastLaunch]", lastLaunch);

    expect(typeof lastLaunch).toBe("object");
    expect(lastLaunch).toHaveProperty("name");
  });
});
