"use client"

import { StarsBackground } from "@/components/stars-background"
import { FallingPetals } from "@/components/falling-petals"
import { Hydrangea, HydrangeaBouquet } from "@/components/hydrangea"
import { BirthdayHeader } from "@/components/birthday-header"
import { LoveLetter } from "@/components/love-letter"
import { AudioPlayer } from "@/components/audio-player"

const letterContent = `Desde el fondo de mi corazón, espero que este día sea increíble para ti. Deseo que disfrutes cada segundo junto a tu familia y amigos, celebrando la alegría de tu vida. Le doy gracias a Dios por tu existencia y por permitirme hacer parte en un día tan especial.

A veces me detengo a pensar en lo que me has dicho sobre el futuro, y aunque entiendo tus dudas, para mí es imposible ignorar lo que siento. Me he entregado a este sentimiento con total sinceridad y no imagino mi historia al lado de nadie más que tú. Sé que he cometido errores en el pasado y, aunque una vida entera no me bastaría para compensarlos, mi deseo de entregarte todo mi amor es más firme que nunca.

Tal vez existan miedos, y entiendo perfectamente por qué podrías tenerlos. Pero hoy te pido, con el corazón en la mano, que confíes en mí: eres mi mundo entero. Sé que aún tengo mucho por mejorar, pero quiero creer que todavía podemos escribir nuestro propio 'Final Deseado'. Como diría nuestra Sooyoung a nuestro amado Dokja: "Esta historia es solo para ese unico lector". Y yo quiero seguir siendo el lector que se queda a tu lado hasta el último capítulo. Aunque soy más como Yoo Joonghyuk, quien entendió que no importa cuántas vidas pasen, no hay un futuro que valga la pena si tú no estás en él. Así como él no puede llegar al final de los escenarios sin su lector, yo no sé cómo terminar mi historia si no es a tu lado.

Este detalle que preparé nació de lo más profundo de mi ser. Cada estrella y cada flor de hortensia representan un pensamiento constante sobre ti; desde los momentos de nostalgia hasta los de mayor felicidad. Todas fueron hechas con mi mano exclusivamente para ti, como un reflejo de que estás presente en cada uno de mis días.`

export default function BirthdayPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <StarsBackground />
      <FallingPetals />

      {/* Gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(140, 80, 160, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(100, 60, 140, 0.1) 0%, transparent 50%)"
        }}
      />

      {/* Content */}
      <div className="relative z-20 px-4 py-12 md:py-20">
        {/* Decorative flowers - top corners */}
        <div className="fixed top-4 left-4 opacity-60 hidden md:block">
          <Hydrangea size="sm" variant="light" />
        </div>
        <div className="fixed top-4 right-4 opacity-60 hidden md:block">
          <Hydrangea size="sm" variant="dark" />
        </div>

        {/* Main content container */}
        <div className="max-w-4xl mx-auto">
          {/* Header with bouquet */}
          <div className="mb-16">
            <HydrangeaBouquet className="mb-8 flex justify-center" />
            <BirthdayHeader name="Dhárla José Durán Riobó" />
          </div>

          {/* Love letter */}
          <div className="mb-16">
            <LoveLetter
              recipientName="Dhárla"
              content={letterContent}
              signature="Con todo mi amor, y siempre tuyo, AZ"
            />
          </div>

          {/* Bottom decorative flowers */}
          <div className="flex justify-center items-end gap-8 mt-12">
            <Hydrangea size="md" variant="dark" className="opacity-70" />
            <Hydrangea size="lg" variant="medium" className="opacity-90" />
            <Hydrangea size="md" variant="light" className="opacity-70" />
          </div>

          {/* Final message */}
          <div className="text-center mt-16 opacity-80">
            <p 
              className="text-xl md:text-2xl text-foreground/70 italic"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              &quot;Esta historia es solo para ti&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              - Omniscient Reader&apos;s Viewpoint
            </p>
          </div>
        </div>
      </div>

      <AudioPlayer src="/music/birthday.mp3" title="Música de cumpleaños" />

      {/* Bottom gradient fade */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to top, rgba(25, 15, 35, 0.8), transparent)"
        }}
      />
    </main>
  )
}
