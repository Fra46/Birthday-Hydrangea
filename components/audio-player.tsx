export function AudioPlayer({
  src,
  title = "Música de fondo",
}: {
  src: string
  title?: string
}) {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 mx-auto flex max-w-[740px] flex-col gap-2 rounded-3xl border border-white/20 bg-black/50 p-2 text-white shadow-xl backdrop-blur-md sm:inset-x-auto sm:right-4 sm:mx-0 sm:flex-row sm:gap-3 sm:p-3 sm:items-center">
      <div className="flex items-center gap-3">
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
        <div className="min-w-0 flex-1 text-sm text-left">
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-white/70">Toca play para iniciar la música.</p>
        </div>
      </div>
      <audio
        className="h-12 w-full rounded-lg bg-white/20 border border-white/10 sm:w-auto sm:min-w-[200px]"
        src={src}
        controls
        loop
        preload="metadata"
        controlsList="nodownload"
      />
    </div>
  )
}
