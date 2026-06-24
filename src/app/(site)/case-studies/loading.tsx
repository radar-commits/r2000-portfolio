export default function CaseStudiesLoading() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-48 pb-16">
      <div className="h-10 w-64 rounded-md bg-neutral-800/60 animate-pulse mb-12" />
      <ul className="grid gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4 bg-neutral-800/60 animate-pulse" />
            <div className="h-4 w-24 rounded bg-neutral-800/60 animate-pulse mb-2" />
            <div className="h-7 w-2/3 rounded bg-neutral-800/60 animate-pulse" />
          </li>
        ))}
      </ul>
    </main>
  );
}
