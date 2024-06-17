import crypto from 'crypto'
import path from 'path'

const cwd = process.cwd()

export const getCompiledPath = (
  code: string,
  fileName: string,
  compiledDir: string
) => {
  const hash = crypto
    .createHash('sha256')
    .update(fileName + code, 'utf8')
    .digest('hex')
  fileName = path.relative(cwd, fileName)
  fileName = path.basename(fileName)
  const hashed = fileName + '_' + hash + '.js'
  return path.join(compiledDir, hashed)
}
