import React, { useMemo } from 'react'
import { motiaExamples } from '../data/motiaExamples'

type RowDirection = 'left' | 'right'

function buildLoopedList<T>(items: T[]): T[] {
  // Duplicate content to allow seamless marquee looping.
  return [...items, ...items]
}

function splitIntoTwoRows<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2)
  return [items.slice(0, mid), items.slice(mid)]
}

export const ExamplesShowcase: React.FC = () => {
  const exampleCount = motiaExamples.length

  const [rowA, rowB] = useMemo(() => splitIntoTwoRows(motiaExamples), [])
  const rowALooped = useMemo(() => buildLoopedList(rowA), [rowA])
  const rowBLooped = useMemo(() => buildLoopedList(rowB), [rowB])

  return (
    <section className="examples-showcase" aria-label="Motia examples showcase">
      <div className="examples-showcase-header">
        <div>
          <h2 className="examples-showcase-title">
            Explore <span className="gradient-text">{exampleCount}+</span> Backend Examples
          </h2>
          <p className="examples-showcase-subtitle">
            A scrolling peek into the full catalog — open any example on GitHub.
          </p>
        </div>

        <a
          className="examples-showcase-link"
          href="https://github.com/MotiaDev/motia-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse all examples →
        </a>
      </div>

      <MarqueeRow items={rowALooped} direction="left" durationSeconds={55} />
      <MarqueeRow items={rowBLooped} direction="right" durationSeconds={65} />
    </section>
  )
}

const MarqueeRow: React.FC<{
  items: typeof motiaExamples
  direction: RowDirection
  durationSeconds: number
}> = ({ items, direction, durationSeconds }) => {
  return (
    <div className="examples-marquee" data-direction={direction}>
      <div className="examples-marquee-track" style={{ animationDuration: `${durationSeconds}s` }}>
        {items.map((ex, idx) => (
          <a
            key={`${ex.path}-${idx}`}
            className="example-chip"
            href={ex.url}
            target="_blank"
            rel="noopener noreferrer"
            title={ex.path}
          >
            <span className="example-chip-title">{ex.title}</span>
            <span className="example-chip-meta">{ex.category}</span>
          </a>
        ))}
      </div>
    </div>
  )
}










