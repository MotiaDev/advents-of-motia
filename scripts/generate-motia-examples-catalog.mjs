import fs from 'node:fs'
import path from 'node:path'

const OUT_FILE = path.join('frontend', 'src', 'data', 'motiaExamples.ts')
const TREE_URL =
  'https://api.github.com/repos/MotiaDev/motia-examples/git/trees/main?recursive=1'

/**
 * We derive "examples" from README.md presence because the repo is heterogeneous
 * (TS/JS/Python + nested frontends). We then filter obvious non-example folders.
 */
function isExampleReadmePath(p) {
  if (!p.startsWith('examples/')) return false
  if (!/README\.md$/i.test(p)) return false
  if (p === 'examples/README.md') return false
  return true
}

function normalizeExampleDirFromReadme(p) {
  return p.replace(/^examples\//, '').replace(/\/README\.md$/i, '')
}

function shouldIncludeExampleDir(exampleDir) {
  const parts = exampleDir.split('/').filter(Boolean)

  // Exclude category roots like "ai-agents"
  if (parts.length < 2) return false

  // Exclude nested app folders that are not standalone Motia examples
  const bannedTail = new Set(['frontend', 'backend', 'docs', 'doc', 'ui'])
  const tail = parts[parts.length - 1]
  if (bannedTail.has(tail)) return false

  // Exclude any path that contains these segments
  const bannedAny = new Set(['node_modules', 'dist', '.github'])
  if (parts.some((seg) => bannedAny.has(seg))) return false

  return true
}

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function main() {
  const res = await fetch(TREE_URL, {
    headers: { 'User-Agent': 'advent-of-motia-generator' },
  })
  if (!res.ok) {
    throw new Error(`GitHub API failed: ${res.status} ${await res.text()}`)
  }

  const json = await res.json()
  const tree = Array.isArray(json.tree) ? json.tree : []

  const readmes = tree
    .filter((n) => n?.type === 'blob' && typeof n?.path === 'string')
    .map((n) => n.path)
    .filter(isExampleReadmePath)

  const exampleDirs = [...new Set(readmes.map(normalizeExampleDirFromReadme))]
    .filter(shouldIncludeExampleDir)
    .sort((a, b) => a.localeCompare(b))

  const items = exampleDirs.map((p) => {
    const parts = p.split('/')
    const slug = parts[parts.length - 1]
    return {
      title: titleFromSlug(slug),
      path: p,
      category: parts[0] ?? 'other',
      subcategory: parts.length > 2 ? parts[1] : undefined,
      url: `https://github.com/MotiaDev/motia-examples/tree/main/examples/${p}`,
    }
  })

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })

  const header = `// AUTO-GENERATED. Do not edit by hand.
// Source: MotiaDev/motia-examples repository tree.
// Generator: scripts/generate-motia-examples-catalog.mjs

export type MotiaExample = {
  title: string;
  path: string;
  category: string;
  subcategory?: string;
  url: string;
};

export const motiaExamples: MotiaExample[] = `

  fs.writeFileSync(OUT_FILE, header + JSON.stringify(items, null, 2) + ' as const;\n')

  console.log(`Wrote ${OUT_FILE} items: ${items.length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})






