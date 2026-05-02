export function AudioPlayer({
  src,
  title = "Música de fondo",
}: {
  src: string
  title?: string
}) {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 mx-auto flex max-w-[740px] flex-col gap-3 rounded-3xl border border-white/20 bg-black/50 p-3 text-white shadow-xl backdrop-blur-md md:inset-x-auto md:right-4 md:mx-0 md:flex-row md:items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
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
