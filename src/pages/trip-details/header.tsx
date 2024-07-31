import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Separator } from "../../components/separator";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface HeaderProps {
  destination: string,
  starts_at: string,
  ends_at: string 
}

export function Header({destination,starts_at, ends_at}:HeaderProps){
    return(
        <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <span className="text-zinc-100 text-lg">{destination}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100 text-lg">{format(starts_at,"d").concat(" a ").concat(format(ends_at,"d' de 'MMMM", {locale: ptBR}))}</span>
          </div>

          <Separator />

          <button
            onClick={() => {}}
            className="bg-zinc-800 text-zinc-200 font-medium text-base flex items-center justify-center h-9 px-5 gap-2 py-2 rounded-lg"
          >
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
    )
}