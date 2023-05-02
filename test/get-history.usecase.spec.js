import { LaunchesRepositoy } from "../src/repositories/launches.repository";
import { HistoryUseCase } from "../src/usecases/history.usecase";

jest.mock("../src/repositories/launches.repository");
describe("Get history useCase", () => {
  beforeEach(() => {
    LaunchesRepositoy.mockClear();
  });

  it("Should get history", async () => {
    LaunchesRepositoy.mockImplementation(() => {
      return {
        getHistory: () => {
          return {
            title: "Falcon 1 Makes History",
            details:
              "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
          };
        },
      };
    });

    const history = await HistoryUseCase.execute();
    expect(typeof history).toBe("object");
    expect(history).toHaveProperty("title");
    expect(history).toHaveProperty("details");
  });
});
