import { ChangeEvent, FormEvent, useState } from 'react';
import { GuestsInput } from './guests-input';
import { GuestsModal } from './guests-modal';
import { ConfirmationModal } from './confirmation-modal';
import { Header } from './header';
import { DestinationAndDates } from './destination-and-dates';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { DateRange } from 'react-day-picker';

export function CreateTrip() {

  const navigate = useNavigate()

  const [destination,setDestination] = useState('')

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [guestsInput, setGuestsInput] = useState(false);
  const [guestsModal, setGuestsModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>()
  const [stringDates, setStringDates] = useState<string | undefined>()

  const [ownersName, setOwnersName] = useState('')
  const [ownersEmail, setOwnersEmail] = useState('')

  function handleDestinationChange(event: ChangeEvent<HTMLInputElement>){
    setDestination(event.target.value)
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
    if(selectedDates && destination != ''){
      setConfirmationModal(true);
    }
  }

  function closeConfirmationModal() {
    setConfirmationModal(false);
  }

  async function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(ownersName,ownersEmail, emailsToInvite, selectedDates, destination)

    const response = await api.post('/trips', {
      destination,
      starts_at: selectedDates?.from,
      ends_at: selectedDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownersName,
      owner_email: ownersEmail
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
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
            dates={setSelectedDates}
            setStringDatesToMain={setStringDates}
          />
          {guestsInput && (
            <GuestsInput
              openConfirmationModal={openConfirmationModal}
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
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
          dates={stringDates}
          closeGuestsModal={closeConfirmationModal}
          setOwnersName={setOwnersName}
          setOwnersEmail={setOwnersEmail}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}