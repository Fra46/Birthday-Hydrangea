export function AudioPlayer({
  src,
  title = "Música de fondo",
}: {
  src: string
  title?: string
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex w-[min(100vw-1rem,740px)] -translate-x-1/2 flex-col gap-3 rounded-3xl border border-white/20 bg-black/50 p-3 text-white shadow-xl backdrop-blur-md md:left-auto md:right-4 md:translate-x-0 md:flex-row md:items-center">
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
      <div className="min-w-0 flex-1 text-sm text-center md:text-left">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-white/70">Toca play para iniciar la música.</p>
      </div>
      <audio className="h-10 w-full rounded-2xl bg-white/5 px-1 sm:w-auto" src={src} controls loop preload="auto" />
    </div>
  )
}
