import { X, User, Mail } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";

interface ConfirmationModalProps {
  closeGuestsModal: () => void;
  destination: string;
  dates: string | undefined;
  setOwnersName: (name: string)=> void,
  setOwnersEmail: (email: string)=> void,
  createTrip: (event: FormEvent<HTMLFormElement>)=> void
}

export function ConfirmationModal({closeGuestsModal, destination, dates, setOwnersName, setOwnersEmail, createTrip}: ConfirmationModalProps) {
  
  function handleChangeName(event: ChangeEvent<HTMLInputElement>){
    const name = event.currentTarget.value
    setOwnersName(name)

  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>){
    const email = event.currentTarget.value
    setOwnersEmail(email)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button onClick={closeGuestsModal}>
              <X className="text-zinc-400 size-5" />
            </button>
          </div>

          <p className="text-zinc-400 text-sm">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-bold">
              {destination}
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-bold">
              {dates}
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="space-y-2">
            <div className="bg-zinc-950 rounded-lg flex items-center gap-2.5 px-4 border border-zinc-800">
              <User className="text-zinc-400 size-5" />
              <input
                onChange={handleChangeName}
                className="h-14 bg-transparent outline-none text-white"
                placeholder="Seu nome completo"
                type="text"
              />
            </div>
            <div className="bg-zinc-950 rounded-lg flex items-center gap-2.5 px-4 border border-zinc-800">
              <Mail className="text-zinc-400 size-5" />
              <input
                onChange={handleChangeEmail}
                className="h-14 bg-transparent outline-none text-white"
                placeholder="Seu e-mail pessoal"
                type="text"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-full px-5 py-2 rounded-lg hover:bg-lime-700"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
