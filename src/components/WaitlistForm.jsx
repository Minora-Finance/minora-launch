import { useId } from 'react'
import { useWaitlist } from '../WaitlistContext.jsx'

export default function WaitlistForm({ id, layout = 'inline' }) {
  const { email, setEmail, status, handleSubmit, buttonLabel } = useWaitlist()
  const isInline = layout === 'inline'
  const inputId = useId()

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={isInline ? 'mt-2 flex flex-wrap gap-2.5' : 'flex flex-col gap-3'}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder={isInline ? 'Enter your email address' : 'Your email address'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          (isInline ? 'flex-1 min-w-[220px] bg-white ' : 'bg-ivory ') +
          'rounded-full border border-border px-[18px] py-[15px] font-sans text-[15px] text-ink outline-none'
        }
      />
      <button
        type="submit"
        disabled={status === 'pending'}
        className="whitespace-nowrap rounded-full border-none bg-primary px-[26px] py-[15px] font-sans text-[15px] font-semibold text-ivory cursor-pointer disabled:opacity-70"
      >
        {buttonLabel}
      </button>
      {status === 'error' && (
        <div className="w-full text-[13px] font-semibold text-red-600" role="alert">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  )
}
