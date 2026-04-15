import { useParams, Link } from 'react-router-dom'

const roomData = {
  'double-room': {
    title: 'Double Room',
    collection: 'Essential Collection',
    price: 129,
    rating: 4.5,
    reviews: 98,
    size: '320 sq ft',
    bed: 'Queen Size',
    guests: '2 Adults',
    view: 'City View',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1dJZ3rsQOFPKrBrWG7V8x24Dobn4bIjMZ8LCgP5kzdu0NuVbbEONACCCj9SU8ZDcibAl1OSH7tZQAypOjl1R4tmJ-U1hr2ghdNac-5cPHUv0E9GiY1_qG3dZsshpBRlAHLRkz2foEzsUMgSErvcdJ4yobAPu3agQgb40a3iBGR71gKynuLSppbIhagVTWZCPiH7QzGxxMBhdx4os7yLFAP_qAydAKCOwULn5wpQn7VcoVcWdsVl9CUsWYXx5HLfO0eKlhMwOBYJwu',
    desc1: 'Our Double Room offers a refined retreat with clean architectural lines and warm ambient textures. Every surface — from the hand-finished stone walls to the oak-framed mirrors — speaks to a design philosophy of considered minimalism.',
    desc2: 'Enjoy floor-to-ceiling windows flooding the space with natural light, premium linens, and a curated selection of local artisan amenities that make your stay truly memorable.',
  },
  'premium-king': {
    title: 'Premium King Room',
    collection: 'The Sanctuary Collection',
    price: 540,
    rating: 4.8,
    reviews: 124,
    size: '450 sq ft',
    bed: 'King Size',
    guests: '2 Adults',
    view: 'Garden View',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_DQpvIyeqKF_9cHgN8tQD8wIplNN4ZSh6Vfk1nli75GxSYaTTQmW7uKmbLeOChc8JzejgH_aKjvRm0RpfP5eYCR6_sUTMWtkLgRCDKSCetmE78CnqYBEmTV4kAmldEI-yzKdTAUg9mww5i9l7yG2xCbu4og5rFoUex9SFQxryzMbqaHtxTBbL6Ot04ar9NA5C37ai_iL-6dNK0UHzwwIPli69MyvqKkEImrvMvAHygZPhO2ZYAk3430dG8n-wVt2PEiIpPBmHB6EG',
    desc1: 'A masterclass in quiet luxury, the Premium King Room harmonizes architectural precision with the softness of natural textures.',
    desc2: 'Floor-to-ceiling soundproof windows frame curated views of the Sona Estate gardens, while the integrated smart-home system allows for seamless atmospheric control. The en-suite bathroom features honed Carrara marble and a deep soaking basalt tub.',
  },
  'deluxe-room': {
    title: 'Deluxe Room',
    collection: 'Elevated Living',
    price: 310,
    rating: 4.7,
    reviews: 87,
    size: '400 sq ft',
    bed: 'King Size',
    guests: '2 Adults',
    view: 'Pool View',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCavmwez5Gt1X01Gi0gwcym_V8PnWySP0UzqLz5kS4ebIqsM6PndVCT-JPb2CVPv70RUslMwjLg1L4bZxc4_ODdxwxdKJs1jgKns1WW4YK-wMpBcm-kcIbYaSWjhhs-mLYX6mSc9gFfs1_CBgryi90kWucRuK5FOjlKYiqpQfeuwI1YzGZrni1NJwfRdmDDAUA1nMV7-CdWVm1WkLxLgWMoTToWyDFut6dRFKKZTyd0TMRl1S6CDBcLgvfp404YZRZhIVK3jnzRjjvZ',
    desc1: 'The Deluxe Room fuses modern design sensibilities with the raw elegance of natural materials. Oak paneling and architectural details create a workspace-meets-sanctuary environment.',
    desc2: 'Custom furnishings and curated art complete an atmosphere of sophisticated calm. The generous bathroom features both rainfall shower and a freestanding soaking tub.',
  },
  'family-room': {
    title: 'Family Room',
    collection: 'Heritage Suite',
    price: 420,
    rating: 4.9,
    reviews: 56,
    size: '580 sq ft',
    bed: 'King + Twin',
    guests: '2 Adults, 2 Children',
    view: 'Garden View',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wDfq4SmQqJcIIUlhUPXd1SWBWLhEC0T0pyVue_S_SlMjesI0TJ2b-SmEUbM3iIUadCmSDcK6XjOxFfdNcd3s_v5D7BYHLEyvuGgXTQyYD-u0jPkSZWHggdNO1OAIJvNWKbSzC1ZeC-TOtA6rzl5R8hHPmZmRDEg8-liqewHeiq7UWuIXzoCMn4N9e5yg7nstMbrV0SipHHQDN842qiUW3pKLkh903AgbPpl8Lzev_VFY62eeevJoZnUs6Jh6CocHYc6YoxrR47My',
    desc1: 'Our Family Room is designed for multigenerational stays, offering separate sleeping areas with consistent luxury throughout. Soft textures and warm lighting create a comforting environment for families.',
    desc2: 'Multi-zone climate control, child-safe fixtures, and connecting door options give families the flexibility they need without sacrificing the Sona standard of elegance.',
  },
}

const amenities = [
  { icon: 'wifi', label: 'Giga-Speed Fiber' },
  { icon: 'local_bar', label: 'Artisan Minibar' },
  { icon: 'ac_unit', label: 'Climate Control' },
  { icon: 'coffee_maker', label: 'Nespresso Vertuo' },
  { icon: 'shower', label: 'Rainfall Shower' },
  { icon: 'tv', label: '65" OLED Display' },
]

const reviews = [
  {
    name: 'Elena Rostova',
    date: 'March 2024',
    stars: 5,
    title: '"An architectural poem in the heart of the city."',
    text: 'The attention to detail is staggering. Usually, luxury hotels feel transactional, but Sona feels like staying in a beautifully curated gallery. The light at sunset is something I\'ll never forget.',
  },
  {
    name: 'Julian Thorne',
    date: 'February 2024',
    stars: 4,
    title: '"Modernity with Soul."',
    text: 'The acoustics are incredible—dead silent even with the city buzzing outside. The bed was beyond comfortable. Only wish the check-out was slightly later, but the stay was impeccable.',
  },
]

export default function RoomDetail() {
  const { id } = useParams()
  const room = roomData[id] || roomData['premium-king']
  const nights = 3
  const subtotal = room.price * nights
  const taxes = Math.round(subtotal * 0.115)
  const total = subtotal + taxes

  return (
    <div className="pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Content */}
        <div className="lg:col-span-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-[11px] uppercase tracking-[0.12em] text-on-surface-variant">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/rooms" className="hover:text-primary transition-colors">Rooms</Link>
            <span>/</span>
            <span className="text-primary">{room.title}</span>
          </div>

          {/* Hero Image */}
          <section className="relative mb-8 md:mb-16">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img className="w-full h-full object-cover" src={room.image} alt={room.title} />
            </div>
            <div className="bg-surface p-5 md:p-8 mt-0 md:absolute md:-bottom-10 md:left-0 md:max-w-xl">
              <p className="uppercase tracking-[0.2em] text-[10px] text-primary mb-2 md:mb-3 font-bold">{room.collection}</p>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 text-on-surface">
                {room.title}
              </h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base filled">
                      {i < Math.floor(room.rating) ? 'star' : room.rating % 1 ? 'star_half' : 'star'}
                    </span>
                  ))}
                </div>
                <span className="text-on-surface-variant text-xs">{room.rating} / 5.0 ({room.reviews} Reviews)</span>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="mt-6 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-1 border-t border-outline-variant/30 pt-4">
              <h3 className="uppercase text-[10px] font-bold tracking-[0.12em] text-on-surface-variant mb-5">Specs</h3>
              <ul className="space-y-4 text-sm">
                {[
                  ['square_foot', room.size],
                  ['king_bed', room.bed],
                  ['group', room.guests],
                  ['apartment', room.view],
                ].map(([icon, text]) => (
                  <li key={icon} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container text-xl">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <p className="text-xl md:text-2xl font-headline italic text-primary leading-relaxed">
                {room.desc1}
              </p>
              <p className="text-on-surface-variant leading-loose text-base">{room.desc2}</p>

              {/* Amenities Grid */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-surface-container-low p-[1px]">
                {amenities.map((a) => (
                  <div key={a.icon} className="bg-surface p-5 md:p-6 flex flex-col justify-between h-32 md:h-36">
                    <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl">{a.icon}</span>
                    <span className="uppercase text-[10px] font-bold tracking-[0.1em]">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="mt-24 md:mt-32">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">Guest Reflections</h2>
                <p className="text-on-surface-variant uppercase text-[10px] tracking-[0.12em] font-bold">
                  {room.reviews} reviews from our community
                </p>
              </div>
            </div>

            <div className="space-y-0">
              {reviews.map((r) => (
                <div key={r.name} className="py-10 md:py-12 border-t border-outline-variant/30 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                  <div className="md:col-span-1">
                    <p className="font-bold text-on-surface text-sm">{r.name}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.1em] mt-1">{r.date}</p>
                    <div className="flex text-primary mt-2">
                      {[...Array(r.stars)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm filled">star</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-headline text-lg md:text-xl font-bold mb-3 italic">{r.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Booking Sidebar — below content on mobile, sticky on desktop */}
        <div className="lg:col-span-4">
          <aside className="lg:sticky lg:top-28 bg-surface-container-low p-5 sm:p-6 md:p-8 editorial-shadow">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-on-surface-variant font-bold mb-1">Starting from</p>
                <h3 className="text-3xl md:text-4xl font-bold">
                  ${room.price}<span className="text-lg font-normal text-on-surface-variant">/night</span>
                </h3>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">Check In / Out</label>
                <input className="w-full bg-surface-container-lowest border-0 py-3.5 px-4 text-sm focus:ring-1 focus:ring-primary" type="text" readOnly value="Oct 12 — Oct 15, 2024" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">Guests</label>
                <select className="w-full bg-surface-container-lowest border-0 py-3.5 px-4 text-sm focus:ring-1 focus:ring-primary appearance-none">
                  <option>2 Adults, 0 Children</option>
                  <option>1 Adult</option>
                </select>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex justify-between text-sm"><span className="text-on-surface-variant">${room.price} × {nights} nights</span><span>${subtotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Service & Taxes</span><span>${taxes}</span></div>
                <div className="pt-3 border-t border-outline-variant/30 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-primary text-on-primary py-4 font-bold uppercase tracking-[0.15em] text-xs hover:bg-on-primary-container transition-colors duration-500" type="button">
                Request Reservation
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-outline-variant/20 text-center">
              <p className="text-[10px] text-on-surface-variant leading-relaxed">
                No immediate payment required. Cancellation free up to 48 hours before arrival.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
