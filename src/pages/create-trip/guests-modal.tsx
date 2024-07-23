import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";

interface GuestsModalProps {
    closeGuestsModal: ()=> void,
    emailsToInvite: string[],
    removeEmail: (emailToRemove: string)=> void,
    addNewEmailToInvite: (event:FormEvent<HTMLFormElement>)=> void
}

export function GuestsModal({addNewEmailToInvite,closeGuestsModal,emailsToInvite,removeEmail}:GuestsModalProps){
    return(
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            {emailsToInvite.length == 0 ? (
              <p className='text-zinc-400'>Você ainda não convidou ninguém.</p>
            ):(
              <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div key={email} className="bg-zinc-800 flex items-center gap-2.5 py-1.5 px-2.5 rounded-md">
                  <span className="text-zinc-300">{email}</span>
                  <button onClick={()=> removeEmail(email)}>
                    <X className="text-zinc-400 size-4" />
                  </button>
                </div>
              ))}
            </div>
            )}

            <div className="h-px w-full bg-zinc-800" />

            <form onSubmit={addNewEmailToInvite} className="h-16 flex items-center bg-zinc-950 rounded-xl border border-zinc-800 px-4 gap-3">
              <AtSign className="text-zinc-400 size-4" />
              <input
                className="bg-transparent text-white outline-none w-40 flex-1"
                type="text"
                name="email"
                placeholder="Digite o e-mail do convidado"
              />
              <button type='submit' className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-auto px-5 py-2 rounded-lg hover:bg-lime-700">
                Convidar <Plus className="text-lime-950" />
              </button>
            </form>
          </div>
        </div>
    )
}