import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { GuestsInput } from './guests-input';
import { GuestsModal } from './guests-modal';
import { ConfirmationModal } from './confirmation-modal';
import { Header } from './header';

export function Home() {

  const [destination,setDestination] = useState('')
  const [when,setWhen] = useState('')

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [guestsInput, setGuestsInput] = useState(false);
  const [guestsModal, setGuestsModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  function handleDestinationChange(event: ChangeEvent<HTMLInputElement>){
    setDestination(event.target.value)
    console.log(destination)
  }

  function handleWhenChange(event: ChangeEvent<HTMLInputElement>){
    setWhen(event.currentTarget.value)
  }

  function addNewEmailToInvite(event:FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([...emailsToInvite,email])
  }

  function removeEmail(emailToRemove:string){
    const newEmailsList = emailsToInvite.filter((email) => email !== emailToRemove)
    setEmailsToInvite(newEmailsList)
  }

  function openGuestsInput() {
    setGuestsInput(true);
    console.log(destination,when)
  }

  function closeGuestsInput() {
    setGuestsInput(false);
  }

  function openGuestsModal() {
    setGuestsModal(true);
  }

  function closeGuestsModal() {
    setGuestsModal(false);
  }

  function openConfirmationModal() {
    setConfirmationModal(true);
  }

  function closeConfirmationModal() {
    setConfirmationModal(false);
  }

  return (
    <div className="bg-pattern h-screen bg-no-repeat bg-center flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <Header />

        <div className="space-y-4">
          <div className="h-16 flex items-center bg-zinc-900 rounded-xl shadow-shape px-4 gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="text-zinc-400 size-5" />
              <input
                disabled={guestsInput}
                onChange={handleDestinationChange}
                name='destination'
                className="bg-transparent text-white outline-none placeholder-zinc-400 flex-1"
                type="text"
                placeholder="Para onde você vai?"
              />
            </div>
            <div className="flex items-center gap-2 w-[240px]">
              <Calendar className="text-zinc-400 size-5" />
              <input
                disabled={guestsInput}
                name='when'
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
                type='submit'
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 font-medium flex items-center justify-center gap-2 w-auto px-5 py-2 rounded-lg hover:bg-lime-700"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {guestsInput && <GuestsInput openConfirmationModal={openConfirmationModal} openGuestsModal={openGuestsModal} />}
        </div>

        <p className="text-zinc-500 text-center text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <span className="text-zinc-300 underline">termos de uso</span> e{" "}
          <span className="text-zinc-300 underline">
            políticas de privacidade
          </span>
          .
        </p>
      </div>

      {guestsModal && (
        <GuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmail={removeEmail}
        />
      )}

      {confirmationModal && (
        <ConfirmationModal destination={destination} dates={when} closeGuestsModal={closeConfirmationModal}/>
      )}
    </div>
  );
}