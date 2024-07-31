import { CircleDashed, CircleCheck, UserCog } from "lucide-react";

export function Guests(){
    return(
        <div className="space-y-6">
              <h2 className="text-zinc-50 font-semibold text-xl">Convidados</h2>

              <div className="space-y-5">

                <div className="flex items-center justify-between">
                  <div className="space-y-1.5">
                    <span className="text-zinc-100">Jessica White</span>
                    <p className="text-zinc-400 text-sm">jessica.white44@yahoo.com</p>
                  </div>
                  <CircleDashed className="size-5 text-zinc-400"/>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1.5">
                    <span className="text-zinc-100">Rodney White</span>
                    <p className="text-zinc-400 text-sm">ford_prosacco@hotmail.com</p>
                  </div>
                  <CircleCheck className="size-5 text-lime-300"/>
                </div>

              </div>

              <button
                onClick={() => {}}
                className="bg-zinc-800 text-zinc-200 font-medium text-base flex items-center justify-center h-10 w-full px-5 gap-2 py-2 rounded-lg hover:bg-zinc-600"
              >
                <UserCog className="size-5 text-zinc-200" />
                Gerenciar convidados
              </button>
            </div>
    )
}