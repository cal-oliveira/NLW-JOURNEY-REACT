import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { ChangeEvent } from "react";

interface DestinationAndDatesProps {
    guestsInput: boolean,
    handleDestinationChange: (event: ChangeEvent<HTMLInputElement>)=> void,
    handleWhenChange: (event: ChangeEvent<HTMLInputElement>)=> void,
    closeGuestsInput: ()=> void,
    openGuestsInput: ()=> void
}

export function DestinationAndDates({guestsInput, handleDestinationChange, handleWhenChange, closeGuestsInput, openGuestsInput}:DestinationAndDatesProps) {
  return (
    <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400 size-5" />
        <input
          disabled={guestsInput}
          onChange={handleDestinationChange}
          name="destination"
          className="bg-transparent text-white outline-none placeholder-zinc-400 flex-1"
          type="text"
          placeholder="Para onde você vai?"
        />
      </div>
      <div className="flex items-center gap-2 w-[240px]">
        <Calendar className="text-zinc-400 size-5" />
        <input
          disabled={guestsInput}
          name="when"
          onChange={handleWhenChange}
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
          type="submit"
          onClick={openGuestsInput}
          className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-auto px-5 py-2 rounded-lg hover:bg-lime-700"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
