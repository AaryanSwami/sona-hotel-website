import { Link } from 'react-router-dom'

const allPosts = [
  {
    slug: 'architectural-soul-modern-hospitality',
    tag: 'Architecture',
    date: 'April 15, 2024',
    author: 'Kerry Jones',
    title: 'The Architectural Soul of Modern Hospitality',
    excerpt: 'True luxury is found in the intentionality of space—the way light traverses a room at 4 PM, and the silence that follows a heavy oak door closing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtlQjt4MvUh2_97bZtGUPFUPM0zf-LQh6OA6qi4oq3XJGo9Qzt2NxPRca2CRls3Z_BfsvIiKgDtEl28NjTM7E-ifE1YWrCEzDDOScz9xMxIvmasFTZoZFobI8Qm98KtJ4JIoADXgIo-rd4REa0XfqisYnX7dQqTVs0MI5qdcxou1eL1CfIA6hwQLViGBwv4rtE52nUD5E3IWlvNzj8LSNgPI0yMR8foH6rvVJKtdibFPT4O6jNvLbL_15nZ6Zc9U08wBr91RwmrVwe',
    featured: true,
  },
  {
    slug: 'ancient-rituals-modern-science',
    tag: 'Wellness',
    date: 'March 28, 2024',
    author: 'Mira Tanaka',
    title: 'Ancient Rituals, Modern Science',
    excerpt: 'Our spa draws on centuries-old botanical traditions reimagined through contemporary wellness research and clinical precision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbFbtRcEju0X2idcRW2eeRbTIWXIag8Ovgdex9c_x5A9GQSidT2BiDc7R9Lg4E1IgmHyZ7e_gBHHICqF4DFS3270IhJ_H8HfHOxTgrHKtFO0Zz5hk6d-7XQ6ZDE7KJJZi-K9N0sbLHtOHxs4ViPBfPnuYlQN2XnqPOE2KjzaGyKCjchA3uH589KrkArYjB0XNF8u6_DglVy-Ha7blYKGntn7moIAUg22cw-88ZOPViRhXh23Dbw9L4SpQJYQVe-5V1luJcG7Bbzv0',
    featured: false,
  },
  {
    slug: 'farm-to-fine-dining',
    tag: 'Culinary',
    date: 'March 10, 2024',
    author: 'Jean-Pierre Blanc',
    title: 'Farm to Fine Dining: The Sona Table',
    excerpt: 'How our chefs transform locally-sourced heritage ingredients into Michelin-worthy tasting menus that celebrate the terroir.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9KdN6sJ2WvxwWtd42Rk9F3kJ3PJRQ0wfZqzgyQWqfnPEQ0iIXwi4cKjU5x7b3De9UsMqXdbwMcCj6MUXGkraN1MhuAkEY8YPwMADH_MSyLQ2LvxYb3YeeH16Y0xq471JIwWt83tsaXRmwii8DrnaXxDJulmD9GWFCkBzUqAkEuiVSxxpcHtcR0BGyvCiLDkCETR0jml-OT8b4d5zhrKzCJSobx9MY38_dfytlNOEtcwqYoOkM9nITr1sz6o3BQkXLrns_tvgx86KL',
    featured: false,
  },
  {
    slug: 'silence-as-luxury',
    tag: 'Design',
    date: 'February 18, 2024',
    author: 'Elena Rostova',
    title: 'Silence as the Ultimate Luxury',
    excerpt: "In an age of endless noise, Sona's acoustic architecture creates sanctuaries of stillness that redefine what it means to truly rest.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_DQpvIyeqKF_9cHgN8tQD8wIplNN4ZSh6Vfk1nli75GxSYaTTQmW7uKmbLeOChc8JzejgH_aKjvRm0RpfP5eYCR6_sUTMWtkLgRCDKSCetmE78CnqYBEmTV4kAmldEI-yzKdTAUg9mww5i9l7yG2xCbu4og5rFoUex9SFQxryzMbqaHtxTBbL6Ot04ar9NA5C37ai_iL-6dNK0UHzwwIPli69MyvqKkEImrvMvAHygZPhO2ZYAk3430dG8n-wVt2PEiIpPBmHB6EG',
    featured: false,
  },
  {
    slug: 'sustainable-heritage-preservation',
    tag: 'Sustainability',
    date: 'January 25, 2024',
    author: 'Julian Thorne',
    title: 'Preserving Heritage Through Sustainable Design',
    excerpt: 'Exploring how Sona balances the conservation of century-old structures with cutting-edge green building practices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrEi5bFu1yH7zQVZv1GyoG3g9Jb3Tz7aKCjlQ3_r6OF-7BVK3s2xBr0x4NVtRQ7cjOsFMBluIw9sMnVH6W0kpdVr0ObfJ7KuxStYzzlEx-pCDRPX-lmNzOQzi9RrtC7VUgeYDPu2i91gnwCTJY9sbfld9hmNXgALWszk42n78lYefDG3uv57ahMsAzmc5mDDXn4Q3UgsQ60qN_HeZFvl_HbpYzrlDKl6ihtXNllLC5uJ1lfDm4kDsFyQqHzcml9hvOio_pEaHI8Tr',
    featured: false,
  },
  {
    slug: 'art-of-arrival',
    tag: 'Experience',
    date: 'January 5, 2024',
    author: 'Mira Tanaka',
    title: 'The Art of Arrival: First Impressions Matter',
    excerpt: 'From the driveway sequence to the welcome ritual, every moment of your arrival at Sona is choreographed with intention.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh7CmsSsM4yHeYjswvjeum5ittnG4cBgOVylYL9Ka1A_V_fFEBnmGQA_A7dNJfrXM8UVsDxQeLOlUViSjPJj0l2lwZ08BhGs4GqcAJP1aTGkDrBDKh_PusuMLh_3eStr1fBUtDybM3vIeceH41E6vCjjyQf-gyHUY3eFoNTBdEWI8cBCTIU1tyed53wrjkDYtOKMUqOHn-K74gGsHkwvan-m-YRCJxR4TRmwhzNhP_Kqixt1v7zBPDTd8b5hAZodXmTUVzc8DJXhxo',
    featured: false,
  },
]

const categories = ['All', 'Architecture', 'Wellness', 'Culinary', 'Design', 'Sustainability', 'Experience']

export default function Blog() {
  const featured = allPosts[0]
  const rest = allPosts.slice(1)

  return (
    <>
      {/* Hero Header */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] block mb-4">The Sona Journal</span>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tighter uppercase leading-none mb-6">
            Blog
          </h1>
          <div className="w-20 h-[2px] bg-primary-container mb-8" />
          <p className="text-secondary max-w-2xl text-base md:text-lg leading-relaxed font-light">
            Stories of architecture, wellness, culinary artistry, and the philosophy behind the Sona experience. Dispatches from the intersection of design and hospitality.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-surface-container-high bg-surface sticky top-[73px] z-30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap ${
                  i === 0
                    ? 'bg-on-surface text-surface'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-surface-container-low"
          >
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={featured.image}
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-container text-on-primary-fixed px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase">
                  {featured.tag}
                </span>
                <span className="text-on-surface-variant/50 text-[10px] uppercase tracking-[0.1em]">Featured</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface leading-tight mb-5 group-hover:text-primary transition-colors duration-500 tracking-tight">
                {featured.title}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 font-light">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-[10px] text-on-surface-variant/60 uppercase tracking-[0.1em]">
                  <span className="font-bold text-on-surface">{featured.author}</span> · {featured.date}
                </div>
                <span className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.12em] translate-x-0 group-hover:translate-x-2 transition-transform duration-500">
                  Read <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-surface pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    src={post.image}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-[9px] font-bold tracking-[0.15em] uppercase">{post.tag}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full" />
                  <span className="text-on-surface-variant/40 text-[10px] tracking-[0.1em]">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface leading-snug mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-on-surface-variant text-sm leading-relaxed font-light flex-1">
                  {post.excerpt}
                </p>

                {/* Author + CTA */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-outline-variant/15">
                  <span className="text-[10px] uppercase tracking-[0.1em]">
                    <span className="font-bold text-on-surface">{post.author}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Read <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
