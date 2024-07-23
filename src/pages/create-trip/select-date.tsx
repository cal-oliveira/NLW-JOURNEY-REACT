import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";

interface SelectDatesProps {
    closeDayPicker: ()=> void,
    setSelectedDates: (dates: string | null) => void
}

export function SelectDates({closeDayPicker, setSelectedDates}: SelectDatesProps) {

  const [startAndEndOfTheTrip, setStartAndEndOfTheTrip] = useState<DateRange | undefined>()

    useEffect(()=>{
        const selectedDates = startAndEndOfTheTrip && startAndEndOfTheTrip.to && startAndEndOfTheTrip.from 
        ? format(startAndEndOfTheTrip.from, "d' de 'LLL").concat(' até ').concat(format(startAndEndOfTheTrip.to, "d' de 'LLL"))
        : null

        setSelectedDates(selectedDates)

    }, [startAndEndOfTheTrip,setSelectedDates])

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 text-white rounded-xl py-5 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecione a data</h2>
          <button onClick={closeDayPicker}>
            <X className="text-zinc-400 size-5" />
          </button>
        </div>
        <DayPicker
          classNames={{ day_selected: "my-selected" }}
          disabled={{ before: new Date() }}
          locale={ptBR}
          mode="range"
          selected={startAndEndOfTheTrip}
          onSelect={setStartAndEndOfTheTrip}
        />
      </div>
    </div>
  );
}
