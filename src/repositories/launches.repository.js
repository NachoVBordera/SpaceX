import axios from "axios";

export class LaunchesRepositoy {
  async getAllLaunches() {
    return await (
      await axios.get("https://api.spacexdata.com/v4/launches/past")
    ).data;
  }

  async getStarlink() {
    return await (
      await axios.get("https://api.spacexdata.com/v4/starlink")
    ).data;
  }

  async getHistory() {
    return await (
      await axios.get("https://api.spacexdata.com/v4/history")
    ).data;
  }

  async getUpcomingLaunch() {
    return await (
      await axios.get(`https://api.spacexdata.com/v4/launches/next`)
    ).data;
  }

  async getLastLaunches() {
    return await (
      await axios.get("https://api.spacexdata.com/v4/launches/latest")
    ).data;
  }
}
