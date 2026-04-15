import { Link } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

const rooms = [
  {
    id: 'double-room',
    tag: 'Essential Collection',
    title: 'Double Room',
    price: 'From $129/Night',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1dJZ3rsQOFPKrBrWG7V8x24Dobn4bIjMZ8LCgP5kzdu0NuVbbEONACCCj9SU8ZDcibAl1OSH7tZQAypOjl1R4tmJ-U1hr2ghdNac-5cPHUv0E9GiY1_qG3dZsshpBRlAHLRkz2foEzsUMgSErvcdJ4yobAPu3agQgb40a3iBGR71gKynuLSppbIhagVTWZCPiH7QzGxxMBhdx4os7yLFAP_qAydAKCOwULn5wpQn7VcoVcWdsVl9CUsWYXx5HLfO0eKlhMwOBYJwu',
    offset: false,
  },
  {
    id: 'premium-king',
    tag: 'Signature Suite',
    title: 'Premium King Room',
    price: '$159/Per night',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBas2-RjjIIDMxGBj42Nftnz_tXrfvMUJIbUKTBcR-eQ5sz_hOctRtpBrM53itzJagSOVm-pHuL5cOweoBeqvXnOPeB_BttRSpMGMj_3zZdWJwW1Vdx1-s0Hlvrz39-7QnTuXVYHJTW0mkPaJin-ICPi9H2MSXEwYiwwoLukOVmDEJP4BIEol6B996gKbQXlX0Bos23btGspbCuqkd4oPRfkg6M2XoQqA7ws6NMwjCoK8DuiezzarflynzKHxvnb7oywEIb2FH-0B9K',
    offset: true,
  },
  {
    id: 'deluxe-room',
    tag: 'Elevated Living',
    title: 'Deluxe Room',
    price: 'From $189/Night',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCavmwez5Gt1X01Gi0gwcym_V8PnWySP0UzqLz5kS4ebIqsM6PndVCT-JPb2CVPv70RUslMwjLg1L4bZxc4_ODdxwxdKJs1jgKns1WW4YK-wMpBcm-kcIbYaSWjhhs-mLYX6mSc9gFfs1_CBgryi90kWucRuK5FOjlKYiqpQfeuwI1YzGZrni1NJwfRdmDDAUA1nMV7-CdWVm1WkLxLgWMoTToWyDFut6dRFKKZTyd0TMRl1S6CDBcLgvfp404YZRZhIVK3jnzRjjvZ',
    offset: false,
  },
  {
    id: 'family-room',
    tag: 'Heritage Suite',
    title: 'Family Room',
    price: 'From $249/Night',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wDfq4SmQqJcIIUlhUPXd1SWBWLhEC0T0pyVue_S_SlMjesI0TJ2b-SmEUbM3iIUadCmSDcK6XjOxFfdNcd3s_v5D7BYHLEyvuGgXTQyYD-u0jPkSZWHggdNO1OAIJvNWKbSzC1ZeC-TOtA6rzl5R8hHPmZmRDEg8-liqewHeiq7UWuIXzoCMn4N9e5yg7nstMbrV0SipHHQDN842qiUW3pKLkh903AgbPpl8Lzev_VFY62eeevJoZnUs6Jh6CocHYc6YoxrR47My',
    offset: true,
  },
]

export default function Rooms() {
  return (
    <div className="pt-28 md:pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-primary text-[11px] uppercase tracking-[0.25em] block mb-4 font-bold">Luxury Accommodations</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black text-on-surface tracking-tighter uppercase mb-5 leading-none">Our Rooms</h1>
          <div className="w-20 h-[2px] bg-primary-container mb-6" />
          <p className="text-secondary max-w-2xl leading-relaxed text-base md:text-lg font-light">
            Each space at Sona is a masterclass in architectural restraint and material honesty. From hand-selected stone to custom oak joinery, every detail serves the quiet luxury of your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Room Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {rooms.map((room) => (
                <Link
                  key={room.id}
                  to={`/rooms/${room.id}`}
                  className={`block relative group h-[260px] sm:h-[380px] md:h-[500px] overflow-hidden bg-surface-container-low ${
                    room.offset ? 'sm:mt-10' : ''
                  }`}
                >
                  <img alt={room.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={room.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-700" />
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">{room.tag}</span>
                    <h3 className="text-white font-headline text-xl md:text-3xl mb-3 font-bold">{room.title}</h3>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-white text-sm font-light">{room.price}</span>
                      <span className="material-symbols-outlined text-white">arrow_right_alt</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar — sticky on desktop, stacked below on mobile */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <BookingForm variant="sidebar" />
            <div className="mt-10 px-2 hidden lg:block">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-3 block">format_quote</span>
              <p className="font-headline text-lg italic leading-relaxed text-on-surface mb-3">
                "The architecture doesn't just house you; it welcomes your soul into a state of absolute clarity."
              </p>
              <span className="text-[10px] uppercase tracking-[0.15em] text-secondary font-bold">Vogue Living, 2024</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
