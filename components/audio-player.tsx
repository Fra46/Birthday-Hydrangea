export function AudioPlayer({
  src,
  title = "Música de fondo",
}: {
  src: string
  title?: string
}) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full border border-white/20 bg-black/50 p-3 text-white shadow-xl backdrop-blur-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9 18V5l12-2v13" />
          <path d="M9 9l12-2" />
        </svg>
      </div>
      <div className="min-w-[180px] text-sm">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-white/70">Toca play para iniciar la música.</p>
      </div>
      <audio className="h-10" src={src} controls loop preload="auto" />
    </div>
  )
}
