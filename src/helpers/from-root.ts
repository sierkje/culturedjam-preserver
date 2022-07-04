import { resolve } from "path"

const rootDir = resolve(__dirname, `..`, `..`)

function fromRoot(...path: string[]) {
  return resolve(rootDir, ...path)
}

export default fromRoot
