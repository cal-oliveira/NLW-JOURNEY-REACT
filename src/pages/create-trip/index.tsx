import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from 'lucide-react'
import { func } from 'prop-types';
import { useState } from 'react';

export function Home(){

    const [guestsInput, setGuestsInput] = useState(false)
    const [guestsModal, setGuestsModal] = useState(true)

    function openGuestsInput(){
        setGuestsInput(true)
    }

    function closeGuestsInput(){
        setGuestsInput(false)
    }

    function openGuestsModal(){
      setGuestsModal(true)
  }

  function closeGuestsModal(){
      setGuestsModal(false)
  }

    return (
      <div className="bg-pattern h-screen bg-no-repeat bg-center flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className="flex flex-col items-center">
            <img src={"./logo.svg"} alt="logo planner" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeje sua próxima viagem!
            </p>
          </div>

          <div className="space-y-4">
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

              {guestsInput ? (
                <button
                  onClick={closeGuestsInput}
                  className="bg-zinc-800 text-zinc-200 font-medium flex items-center justify-center w-full px-5 gap-2 py-2 rounded-lg"
                >
                  Alterar local/data
                  <Settings2 className="size-5" />
                </button>
              ) : (
                <button
                  onClick={openGuestsInput}
                  className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-auto px-5 py-2 rounded-lg hover:bg-lime-700"
                >
                  Continuar
                  <ArrowRight className="size-5" />
                </button>
              )}
            </div>

            {guestsInput && (
              <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
                <button onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                  <UserRoundPlus className="text-zinc-400 size-5" />
                  <span className="bg-transparent outline-none text-zinc-400 flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                </button>
                <button className="bg-lime-300 text-lime-950 flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-lime-700">
                  Confirmar viagem <ArrowRight className="size-5" />{" "}
                </button>
              </div>
            )}
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

        {guestsModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-lg font-semibold">
                    Selecionar convidados
                  </h2>
                  <button onClick={closeGuestsModal}>
                    <X className="text-zinc-400 size-5" />
                  </button>
                </div>
                <p className="text-zinc-400 text-sm">
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
                <div className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                  <X className="text-zinc-400 size-4" />
                </div>
              </div>

              <div className='h-px w-full bg-zinc-800'/>

              <div className="h-16 flex items-center bg-zinc-950 rounded-xl border border-zinc-800 px-4 gap-3">
                <AtSign className="text-zinc-400 size-4" />
                <input
                  className="bg-transparent text-white outline-none w-40 flex-1"
                  type="text"
                  placeholder="Digite o e-mail do convidado"
                />
                <button 
                  className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-auto px-5 py-2 rounded-lg hover:bg-lime-700">Convidar <Plus className='text-lime-950'/></button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}