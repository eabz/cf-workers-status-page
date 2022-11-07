import { getKVMonitors } from '../../src/functions/helpers'

export default async (event) => {
  const data = await getKVMonitors()
  return data
}

