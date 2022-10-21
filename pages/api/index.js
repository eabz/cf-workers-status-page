import { getKVMonitors } from "../../src/functions/helpers"

export default async (event) => {
  return getKVMonitors()
}
