import { UserRoundPlus, ArrowRight } from "lucide-react";

interface GuestsInputProps {
    openGuestsModal: ()=> void,
    openConfirmationModal: ()=> void,
    emailsToInvite: string[]
}

export function GuestsInput({openGuestsModal, openConfirmationModal,emailsToInvite}:GuestsInputProps){
    return (
      <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
        <button
          onClick={openGuestsModal}
          className="flex items-center gap-2 flex-1"
        >
          <UserRoundPlus className="text-zinc-400 size-5" />
          <span className="bg-transparent outline-none text-zinc-400 flex-1 text-left">
            {emailsToInvite.length === 0 ? 'Quem estará na viagem?' : `${emailsToInvite.length} pessoa(s) convidada(s)`}
          </span>
        </button>
        <button onClick={openConfirmationModal} className="bg-lime-300 text-lime-950 flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-lime-700">
          Confirmar viagem <ArrowRight className="size-5" />{" "}
        </button>
      </div>
    );
}