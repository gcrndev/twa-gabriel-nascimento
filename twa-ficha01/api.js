import { writeFile } from 'node:fs/promises'

const response = await fetch('https://api.github.com/repos/nodejs/node', {
  headers: { 'User-Agent': 'twa-ficha01' },
})

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`)
}

const repo = await response.json()
console.log(repo.name, repo.stargazers_count)

await writeFile(
  new URL('./repo.json', import.meta.url),
  JSON.stringify(
    {
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
    },
    null,
    2,
  ) + '\n',
)
