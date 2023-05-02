import { LaunchesRepositoy } from "../src/repositories/launches.repository";
import { StarlinkUseCase } from "../src/usecases/get-all-starlink.usecase";

jest.mock("../src/repositories/launches.repository");
describe("Get all starlink useCase", () => {
  beforeEach(() => {
    LaunchesRepositoy.mockClear();
  });

  it("Should get all starlink", async () => {
    LaunchesRepositoy.mockImplementation(() => {
      return {
        getStarlink: () => {
          return {
            version: "v0.0.0",
            launch: "5eb87d46ffd86e000604b32a",
            longitude: 0,
            latitude: 0,
            height_km: 550,
          };
        },
      };
    });

    const starlink = await StarlinkUseCase.execute();
    expect(typeof starlink).toBe("object");
    expect(starlink).toHaveProperty("version");
    expect(starlink).toHaveProperty("launch");
  });
});
