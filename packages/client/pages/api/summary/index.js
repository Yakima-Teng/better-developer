import path from 'path'
import { readFileSync } from 'fs-extra'

export default function handler(req, res) {
    const filePath = path.resolve(path.dirname(''), '../data/dist/README.md')
    const content = readFileSync(filePath, { encoding: 'utf8' })
    console.log(content)
    res.status(200).json({
        code: '0000',
        body: content,
    })
}
