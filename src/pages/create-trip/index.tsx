import { ArrowRight, Calendar, MapPin } from 'lucide-react'

export function Home(){
    return (
      <div className="bg-pattern h-screen bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center h-screen space-y-10">
          <div className='flex flex-col items-center'>
            <img src={'./logo.svg'} alt="logo planner" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeje sua próxima viagem!
            </p>
          </div>

          <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="text-zinc-400 size-5" />
              <input
                className="bg-transparent text-white outline-none placeholder-zinc-400 flex-1"
                type="text"
                placeholder="Para onde você vai?"
              />
            </div>
            <div className="flex items-center gap-2 w-[240px]">
              <Calendar className="text-zinc-400 size-5" />
              <input
                className="bg-transparent text-white outline-none w-40 flex-1"
                type="text"
                placeholder="Quando?"
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            <button className="bg-lime-300 text-lime-950 flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-lime-700">
              Continuar <ArrowRight className="size-5" />{" "}
            </button>
          </div>

          <p className="text-zinc-500 text-center text-sm">
            Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <span className="text-zinc-300 underline">
              termos de uso
            </span> e{" "}
            <span className="text-zinc-300 underline">
              políticas de privacidade
            </span>
            .
          </p>
        </div>
      </div>
    );
}