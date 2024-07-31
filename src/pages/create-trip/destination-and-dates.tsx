import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectDates } from "./select-date";
import "react-day-picker/dist/style.css";
import { DateRange } from "react-day-picker";
import { Separator } from "../../components/separator";

interface DestinationAndDatesProps {
    guestsInput: boolean,
    handleDestinationChange: (event: ChangeEvent<HTMLInputElement>)=> void,
    closeGuestsInput: ()=> void,
    openGuestsInput: ()=> void,
    dates: (dates:DateRange | undefined)=> void,
    setStringDatesToMain: (stringDates: string | undefined) => void
}

export function DestinationAndDates({guestsInput, handleDestinationChange, closeGuestsInput, openGuestsInput, dates, setStringDatesToMain}:DestinationAndDatesProps) {
  
    const [isOpenDayPicker,setIsOpenDayPicker] = useState(false)
    const [selectedDates, setSelectedDates] = useState<DateRange | undefined>()
    const [stringDates, setStringDates] = useState<string | undefined>()

    useEffect(()=> {
      dates(selectedDates)
      setStringDatesToMain(stringDates)
    }, [selectedDates, setSelectedDates])

    function openDayPicker(){
        setIsOpenDayPicker(true)
    }

    function closeDayPicker(){
        setIsOpenDayPicker(false)
    }

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
        <button
          onClick={openDayPicker}
          disabled={guestsInput}
          className="flex items-center gap-2 text-left w-[240px]"
        >
          <Calendar className="text-zinc-400 size-5" />
          <span className="text-base text-zinc-400 w-40 flex-1">{stringDates || 'Quando?'}</span>
        </button>

        {isOpenDayPicker && (
          <SelectDates 
            setSelectedDates={setSelectedDates}
            closeDayPicker={closeDayPicker}
            setDates={setStringDates}
          />
        )}

        <Separator />

        {guestsInput ? (
          <button
            onClick={closeGuestsInput}
            className="bg-zinc-800 text-zinc-200 font-medium text-base flex items-center justify-center h-9 px-5 gap-2 py-2 rounded-lg"
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
