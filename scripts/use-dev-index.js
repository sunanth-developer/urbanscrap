import fs from 'node:fs'

const devIndex = fs.readFileSync('index.dev.html', 'utf8')
const currentIndex = fs.readFileSync('index.html', 'utf8')

if (!currentIndex.includes('/src/main.js')) {
  fs.writeFileSync('index.html', devIndex)
}
