import { CircleCheck, Plus } from "lucide-react";
import { Header } from "./header";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface Trip {
  id: string,
  destination: string,
  starts_at: string,
  ends_at: string,
  is_confirmed: boolean
}

export function TripDetails() {

  const { tripId } = useParams()
  const [trip,setTrip] = useState<Trip | undefined>()

  useEffect(()=> {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  },[tripId])  

  if(!trip){
    return
  }

  console.log(trip)

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <Header 
        destination={trip.destination}
        starts_at={trip.starts_at}
        ends_at={trip.ends_at}
      />

      <div className="pl-6 flex items-start justify-between gap-16">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-50 font-semibold text-3xl">Atividades</h2>
            <button
              onClick={() => {}}
              className="bg-lime-300 text-lime-950 font-medium text-base flex items-center justify-center h-9 px-5 gap-2 py-2 rounded-lg hover:bg-lime-500"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-50 font-semibold text-xl">Dia 20</span>
              <span className="text-zinc-500 text-xs">Terça-feira</span>
            </div>

            <div className="flex items-center bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape">
              <div className="flex items-center flex-1 gap-3">
                <CircleCheck className="text-lime-300 size-5" />
                <span className="text-zinc-100">Academia em grupo</span>
              </div>
              <span className="text-zinc-400 text-sm">08:00h</span>
            </div>
          </div>
        </div>

        <div className="w-80 pr-6 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </div>
    </div>
  );
}
