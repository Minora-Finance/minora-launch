import { createContext, useContext, useState } from 'react'

const WaitlistContext = createContext(null)

export function WaitlistProvider({ children }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | pending | submitted | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || status === 'pending') return
    setStatus('pending')
    try {
      // TODO: wire up to real waitlist backend/CRM
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStatus('submitted')
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel =
    status === 'pending' ? 'Joining…' : status === 'submitted' ? 'Added' : 'Join the Waitlist'

  return (
    <WaitlistContext.Provider
      value={{ email, setEmail, status, handleSubmit, buttonLabel }}
    >
      {children}
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist must be used within a WaitlistProvider')
  return ctx
}
