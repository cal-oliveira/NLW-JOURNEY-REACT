import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-zinc-50 font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-zinc-100 block">Reserva do AirBnB</span>
            <a
              href="#"
              className="text-zinc-400 block truncate text-xs hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011923841734872938472938479283749
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-zinc-100 block">Reserva do AirBnB</span>
            <a
              href="#"
              className="text-zinc-400 block truncate text-xs hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011923841734872938472938479283749
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        
      </div>

      <button
        onClick={() => {}}
        className="bg-zinc-800 text-zinc-200 font-medium text-base flex items-center justify-center h-10 w-full px-5 gap-2 py-2 rounded-lg"
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}
