import { Link } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

const services = [
  { icon: 'travel_explore', title: 'Travel Plan', desc: 'Curated itineraries designed by our regional experts to uncover hidden heritage gems.' },
  { icon: 'restaurant', title: 'Catering', desc: 'Private dining experiences crafted by world-renowned chefs in your own suite.' },
  { icon: 'child_care', title: 'Babysitting', desc: 'Certified professional care providing engaging activities for our youngest guests.' },
  { icon: 'local_laundry_service', title: 'Laundry', desc: 'Premium textile care with organic processes and same-day delivery service.' },
  { icon: 'directions_car', title: 'Hire Driver', desc: 'Professional chauffeurs and a fleet of electric luxury sedans at your disposal.' },
  { icon: 'local_bar', title: 'Bar & Drink', desc: 'Rare vintages and artisanal mixology in our exclusive rooftop observatory.' },
]

const blogPosts = [
  {
    slug: 'architectural-soul-modern-hospitality',
    tag: 'Architecture',
    date: 'April 15, 2024',
    title: 'The Architectural Soul of Modern Hospitality',
    excerpt: 'True luxury is found in the intentionality of space—the way light traverses a room at 4 PM, and the silence that follows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtlQjt4MvUh2_97bZtGUPFUPM0zf-LQh6OA6qi4oq3XJGo9Qzt2NxPRca2CRls3Z_BfsvIiKgDtEl28NjTM7E-ifE1YWrCEzDDOScz9xMxIvmasFTZoZFobI8Qm98KtJ4JIoADXgIo-rd4REa0XfqisYnX7dQqTVs0MI5qdcxou1eL1CfIA6hwQLViGBwv4rtE52nUD5E3IWlvNzj8LSNgPI0yMR8foH6rvVJKtdibFPT4O6jNvLbL_15nZ6Zc9U08wBr91RwmrVwe',
    featured: true,
  },
  {
    slug: 'ancient-rituals-modern-science',
    tag: 'Wellness',
    date: 'March 28, 2024',
    title: 'Ancient Rituals, Modern Science',
    excerpt: 'Our spa draws on centuries-old botanical traditions reimagined through contemporary wellness research.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbFbtRcEju0X2idcRW2eeRbTIWXIag8Ovgdex9c_x5A9GQSidT2BiDc7R9Lg4E1IgmHyZ7e_gBHHICqF4DFS3270IhJ_H8HfHOxTgrHKtFO0Zz5hk6d-7XQ6ZDE7KJJZi-K9N0sbLHtOHxs4ViPBfPnuYlQN2XnqPOE2KjzaGyKCjchA3uH589KrkArYjB0XNF8u6_DglVy-Ha7blYKGntn7moIAUg22cw-88ZOPViRhXh23Dbw9L4SpQJYQVe-5V1luJcG7Bbzv0',
    featured: false,
  },
  {
    slug: 'farm-to-fine-dining',
    tag: 'Culinary',
    date: 'March 10, 2024',
    title: 'Farm to Fine Dining: The Sona Table',
    excerpt: 'How our chefs transform locally-sourced heritage ingredients into Michelin-worthy tasting menus.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9KdN6sJ2WvxwWtd42Rk9F3kJ3PJRQ0wfZqzgyQWqfnPEQ0iIXwi4cKjU5x7b3De9UsMqXdbwMcCj6MUXGkraN1MhuAkEY8YPwMADH_MSyLQ2LvxYb3YeeH16Y0xq471JIwWt83tsaXRmwii8DrnaXxDJulmD9GWFCkBzUqAkEuiVSxxpcHtcR0BGyvCiLDkCETR0jml-OT8b4d5zhrKzCJSobx9MY38_dfytlNOEtcwqYoOkM9nITr1sz6o3BQkXLrns_tvgx86KL',
    featured: false,
  },
]

export default function Home() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sona Luxury Hotel Exterior"
            className="w-full h-full object-cover"
            src="https://hotelhermitage.com/_novaimg/galleria/1418784.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="text-white space-y-6 md:space-y-8">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-container">
              Westlake Destination
            </p>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              Sona<br />A Luxury Hotel
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-stone-300 max-w-lg font-light leading-relaxed">
              Experience the zenith of architectural precision and tropical serenity. Where heritage meets modern minimalist luxury.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.15em] uppercase group text-white"
            >
              Discover Now
              <span className="h-[2px] w-12 bg-primary-container transition-all duration-500 group-hover:w-20" />
            </Link>
          </div>

          {/* Right: Booking Form — only on large screens */}
          <div className="hidden lg:block">
            <BookingForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Mobile Booking Form — shown below hero on mobile only */}
      <section className="lg:hidden bg-surface px-6 py-10">
        <BookingForm variant="sidebar" />
      </section>

      {/* === ABOUT SECTION === */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-end">
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  alt="Traditional Pagoda Heritage"
                  className="w-full h-full object-cover img-zoom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcD6ckpbiBRaMI_obqFPb-BPdSwxcwxNqUWkvilsAc5QyC-OL-hCDYv-hszUEmmBzMdABUm2Mp3KAKrBttnzuMMaEvxhc4GzhYJnspUsdpZnNnHXY3KxEJ_IoF4fletmIJmSFPmFcQm_6G4I9sqYUtcVNtFmQM8FitrvxRczSTNACHavQpoDkkL7kN_0jQuOcLTg4SNtq2306Rw7jf2cZPuMS9g7rze5P4F9N2UzmQfhXIcZ65Kh4LQg4WkRRhtCZrPeWoin4HgBd1"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden -mt-12">
                <img
                  alt="Luxury Dining Interior"
                  className="w-full h-full object-cover img-zoom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO_bGbe-W1zls8EdU_z-4h29W6SyVMvKCM3x8166dUF402vagTQw_7LuZegmL6VyijdJyr0E1935UQ0H-t7Xm7hiG2xsKu6LiVFeCksnoz8uSQB9l6y71X0WkMHz8PPaIb3LUUxnVIogMV6L2CQr9nvIBWe62LQIG9hLiMTx0o2DV7cXLe3btvYNrBWIUmJi9LYFXkJe4pw5-H0CCLXgxyvvrMi66PLrI-kN6cjihanbSNjSmDbTOrzr79JsBtVIl_hVwZGlWpBkPR"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-fixed text-[10px] font-bold tracking-[0.2em] uppercase">
                  About Us
                </span>
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight font-bold">
                  Intercontinental LA Westlake Hotel
                </h2>
              </div>
              <div className="space-y-5 text-secondary text-base md:text-lg leading-relaxed font-light">
                <p>
                  Sona represents the intersection of historical grandeur and avant-garde hospitality. Built upon the legacy of architectural precision, our Westlake destination offers a secluded sanctuary for the global citizen.
                </p>
                <p>
                  With 250 curated suites, three Michelin-star dining experiences, and a wellness pavilion that honors ancient traditions through modern science, Sona is more than a hotel—it is a monograph of luxury living.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.12em] text-sm uppercase group"
              >
                Read More
                <span className="h-[2px] w-12 bg-primary-container transition-all duration-500 group-hover:w-20" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Experience</span>
            <h2 className="font-headline text-4xl md:text-5xl mt-4 font-bold">Bespoke Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`bg-white p-10 md:p-12 flex flex-col items-center text-center space-y-5 group hover:bg-primary-container transition-all duration-700 cursor-pointer ${
                  i < 3 ? 'border-b border-surface-container-high lg:border-b-0' : ''
                } ${i % 3 !== 2 ? 'lg:border-r border-surface-container-high' : ''}`}
              >
                <span className="material-symbols-outlined text-5xl text-primary-container group-hover:text-white transition-colors duration-500">
                  {s.icon}
                </span>
                <h3 className="font-headline text-xl md:text-2xl text-on-surface group-hover:text-white transition-colors font-bold">
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BLOG / NEWS SECTION === */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase block mb-4">Journal</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight">
                Latest Stories
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.12em] text-sm uppercase group shrink-0"
            >
              View All Articles
              <span className="h-[2px] w-10 bg-primary-container transition-all duration-500 group-hover:w-16" />
            </Link>
          </div>

          {/* Blog Grid: 1 Featured + 2 Small */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Featured Post */}
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block relative h-[500px] md:h-[620px] overflow-hidden">
              <img
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={blogPosts[0].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-5">
                  <span className="bg-primary-container text-on-primary-fixed px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase">
                    {blogPosts[0].tag}
                  </span>
                  <span className="text-white/50 text-[10px] uppercase tracking-[0.12em]">{blogPosts[0].date}</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-primary-container transition-colors duration-500">
                  {blogPosts[0].title}
                </h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-lg font-light">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3 text-primary-container text-[10px] font-bold uppercase tracking-[0.15em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Read Article
                  <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                </div>
              </div>
            </Link>

            {/* Right Column: 2 Stacked Posts */}
            <div className="flex flex-col gap-6 md:gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.title} className="group flex flex-col sm:flex-row gap-6 bg-surface-container-low hover:bg-surface-container transition-colors duration-500">
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden shrink-0">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={post.image}
                    />
                  </div>
                  <div className="flex-1 py-4 sm:py-6 lg:py-8 pr-6 sm:pr-8 pl-6 sm:pl-0 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-primary text-[9px] font-bold tracking-[0.15em] uppercase">{post.tag}</span>
                      <span className="text-on-surface-variant/40 text-[10px] tracking-[0.1em]">{post.date}</span>
                    </div>
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface leading-snug mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.12em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Read More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CTA BANNER === */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <img
          alt="Sona Pool at Sunset"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtlQjt4MvUh2_97bZtGUPFUPM0zf-LQh6OA6qi4oq3XJGo9Qzt2NxPRca2CRls3Z_BfsvIiKgDtEl28NjTM7E-ifE1YWrCEzDDOScz9xMxIvmasFTZoZFobI8Qm98KtJ4JIoADXgIo-rd4REa0XfqisYnX7dQqTVs0MI5qdcxou1eL1CfIA6hwQLViGBwv4rtE52nUD5E3IWlvNzj8LSNgPI0yMR8foH6rvVJKtdibFPT4O6jNvLbL_15nZ6Zc9U08wBr91RwmrVwe"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary-container block mb-6">
            Limited Availability
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            Your Sanctuary Awaits
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Reserve your architectural retreat and experience the Sona legacy firsthand.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-primary text-on-primary px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container hover:text-on-primary-fixed transition-all duration-500"
          >
            Explore Our Rooms
          </Link>
        </div>
      </section>
    </>
  )
}
