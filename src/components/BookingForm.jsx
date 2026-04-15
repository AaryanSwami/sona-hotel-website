export default function BookingForm({ variant = 'hero' }) {
  const isHero = variant === 'hero'

  return (
    <div
      className={`${
        isHero
          ? 'bg-white p-8 md:p-10 editorial-shadow'
          : 'bg-surface-container-low p-8 md:p-10 editorial-shadow'
      }`}
    >
      <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-8 font-bold">
        {isHero ? 'Book Your Stay' : 'Your Reservation'}
      </h2>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-on-surface-variant">
              Check In
            </label>
            <input
              type="date"
              className="w-full border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-sm text-on-surface bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-on-surface-variant">
              Check Out
            </label>
            <input
              type="date"
              className="w-full border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-sm text-on-surface bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-on-surface-variant">
              Guests
            </label>
            <select className="w-full border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-sm text-on-surface bg-transparent">
              <option>1 Adult</option>
              <option defaultValue>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>3 Adults</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-on-surface-variant">
              Room
            </label>
            <select className="w-full border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-sm text-on-surface bg-transparent">
              <option defaultValue>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-on-primary font-bold py-4 tracking-[0.15em] text-xs uppercase hover:bg-on-primary-container transition-all duration-500"
        >
          Check Availability
        </button>
      </form>

      {!isHero && (
        <div className="mt-8 pt-8 border-t border-outline-variant/20 text-center">
          <p className="text-[10px] uppercase tracking-[0.12em] text-on-surface-variant mb-2 font-bold">
            Direct Booking Benefit
          </p>
          <p className="text-sm italic text-on-surface-variant">
            Complimentary breakfast and late check-out included.
          </p>
        </div>
      )}
    </div>
  )
}
