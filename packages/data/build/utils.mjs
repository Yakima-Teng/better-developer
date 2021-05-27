import path from 'path'

const currentPath = path.resolve(path.dirname(''))

export const join = (relativePath) => path.join(currentPath, relativePath)
