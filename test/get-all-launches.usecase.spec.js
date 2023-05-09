import { LaunchesRepositoy } from "../src/repositories/launches.repository";
import { AllLaunchesUseCase } from "../src/usecases/get-all-launches.usecase";
import { LAUNCHES } from "./fixtures/allLaunches";

jest.mock("../src/repositories/launches.repository");

describe("All launches useCase", () => {
  beforeEach(() => {
    LaunchesRepositoy.mockClear();
  });

  it("should get all launches", async () => {
    LaunchesRepositoy.mockImplementation(() => {
      return {
        getAllLaunches: () => {
          return LAUNCHES;
        },
      };
    });

    const response = await AllLaunchesUseCase.execute();

    expect(response.length).toBe(10);
    expect(response[0].name).toBe(LAUNCHES.docs[0].name);
    expect(response[0].date_utc).toBe("Mar 2006");
  });
});
