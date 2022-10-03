import {
  TagGrid,
  TagRow,
  Tag,
} from "../lib/main";

export default function App() {
  const tags = ["lisp", "common lisp", "macro"];

  return (
    <main>
      <TagGrid className="vs-sticky vs-top-0 vs-z-40 vs-space-y-2 vs-px-4 vs-py-3 vs-bg-black">
        <TagRow className="vs-space-x-2">
          {tags.map(e =>
            <Tag
              key={e}
              href={`/${e.toLowerCase()}`}
              className="vs-text-sm vs-tracking-tight vs-whitespace-nowrap vs-bg-black vs-shadow vs-border vs-border-white/50 vs-px-1 vs-py-0.5 vs-text-white vs-font-semibold"
            >
              {e}
            </Tag>
          )}
        </TagRow>
      </TagGrid>

    </main>
  )
}
