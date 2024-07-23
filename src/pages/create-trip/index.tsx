import { ChangeEvent, FormEvent, useState } from 'react';
import { GuestsInput } from './guests-input';
import { GuestsModal } from './guests-modal';
import { ConfirmationModal } from './confirmation-modal';
import { Header } from './header';
import { DestinationAndDates } from './destination-and-dates';

export function Home() {

  const [destination,setDestination] = useState('')
  const [when,setWhen] = useState('')

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [guestsInput, setGuestsInput] = useState(false);
  const [guestsModal, setGuestsModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [selectedDates, setSelectedDates] = useState<string | null>(null)

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
          <DestinationAndDates
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
            guestsInput={guestsInput}
            handleDestinationChange={handleDestinationChange}
            handleWhenChange={handleWhenChange}
            dates={setSelectedDates}
          />
          {guestsInput && (
            <GuestsInput
              openConfirmationModal={openConfirmationModal}
              openGuestsModal={openGuestsModal}
            />
          )}
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
        <ConfirmationModal
          destination={destination}
          dates={selectedDates}
          closeGuestsModal={closeConfirmationModal}
        />
      )}
    </div>
  );
}