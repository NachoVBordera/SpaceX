import axios from "axios";

export class LaunchesRepositoy {
  async getAllLaunches(query) {
    return await (
      await axios.post("https://api.spacexdata.com/v4/launches/query", query)
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
