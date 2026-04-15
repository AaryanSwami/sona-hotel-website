import { useParams, Link, Navigate } from 'react-router-dom'

// Shared post data — single source of truth
const allPosts = [
  {
    slug: 'architectural-soul-modern-hospitality',
    tag: 'Architecture',
    date: 'April 15, 2024',
    author: 'Kerry Jones',
    readTime: '8 Min Read',
    location: 'Westlake, CA',
    title: 'The Architectural Soul of Modern Hospitality',
    excerpt: 'True luxury is found in the intentionality of space—the way light traverses a room at 4 PM, and the silence that follows a heavy oak door closing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtlQjt4MvUh2_97bZtGUPFUPM0zf-LQh6OA6qi4oq3XJGo9Qzt2NxPRca2CRls3Z_BfsvIiKgDtEl28NjTM7E-ifE1YWrCEzDDOScz9xMxIvmasFTZoZFobI8Qm98KtJ4JIoADXgIo-rd4REa0XfqisYnX7dQqTVs0MI5qdcxou1eL1CfIA6hwQLViGBwv4rtE52nUD5E3IWlvNzj8LSNgPI0yMR8foH6rvVJKtdibFPT4O6jNvLbL_15nZ6Zc9U08wBr91RwmrVwe',
    body: [
      'True luxury is no longer defined by the height of a ceiling or the thread count of a sheet. It is found in the intentionality of space—the way light traverses a room at 4 PM, and the silence that follows a heavy oak door closing.',
      'In our pursuit of the sublime, we have looked toward the structures that have stood for centuries. Architecture is not merely about housing a guest; it is about creating a dialogue between the inhabitant and the environment. At Sona, we treat every corridor as a gallery and every window as a curated lens.',
      'The interplay of raw concrete, reclaimed timber, and soft linen creates a sensory experience that grounds the traveler. It is a philosophy of subtraction—removing the noise of the modern world to reveal the quiet textures of existence.',
      'Beyond the visual, there is a rhythm to architectural hospitality. It is found in the sequence of arrival, the unfolding of views, and the tactile transition from public to private realms. We believe that a well-designed space should not demand attention, but rather reward it.',
    ],
  },
  {
    slug: 'ancient-rituals-modern-science',
    tag: 'Wellness',
    date: 'March 28, 2024',
    author: 'Mira Tanaka',
    readTime: '6 Min Read',
    location: 'Kyoto, Japan',
    title: 'Ancient Rituals, Modern Science',
    excerpt: 'Our spa draws on centuries-old botanical traditions reimagined through contemporary wellness research and clinical precision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbFbtRcEju0X2idcRW2eeRbTIWXIag8Ovgdex9c_x5A9GQSidT2BiDc7R9Lg4E1IgmHyZ7e_gBHHICqF4DFS3270IhJ_H8HfHOxTgrHKtFO0Zz5hk6d-7XQ6ZDE7KJJZi-K9N0sbLHtOHxs4ViPBfPnuYlQN2XnqPOE2KjzaGyKCjchA3uH589KrkArYjB0XNF8u6_DglVy-Ha7blYKGntn7moIAUg22cw-88ZOPViRhXh23Dbw9L4SpQJYQVe-5V1luJcG7Bbzv0',
    body: [
      'For centuries, healers across Asia have understood what modern bioscience is only beginning to confirm: the body responds to environment as much as it does to medicine.',
      'At Sona Spa, we have spent three years working with ethnobotanists, neuroscientists, and traditional practitioners to create protocols rooted in ancient wisdom and validated by clinical data.',
      'Our signature Hinoki Steam Ritual draws on Japanese forest bathing principles—shinrin-yoku—combined with guided breathwork and pressure-point therapy mapped by contemporary pain research.',
      'The result is not simply relaxation. It is restoration at a cellular level, a recalibration of the nervous system that guests describe as feeling "years younger" after just three days.',
    ],
  },
  {
    slug: 'farm-to-fine-dining',
    tag: 'Culinary',
    date: 'March 10, 2024',
    author: 'Jean-Pierre Blanc',
    readTime: '5 Min Read',
    location: 'Westlake, CA',
    title: 'Farm to Fine Dining: The Sona Table',
    excerpt: 'How our chefs transform locally-sourced heritage ingredients into Michelin-worthy tasting menus that celebrate the terroir.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9KdN6sJ2WvxwWtd42Rk9F3kJ3PJRQ0wfZqzgyQWqfnPEQ0iIXwi4cKjU5x7b3De9UsMqXdbwMcCj6MUXGkraN1MhuAkEY8YPwMADH_MSyLQ2LvxYb3YeeH16Y0xq471JIwWt83tsaXRmwii8DrnaXxDJulmD9GWFCkBzUqAkEuiVSxxpcHtcR0BGyvCiLDkCETR0jml-OT8b4d5zhrKzCJSobx9MY38_dfytlNOEtcwqYoOkM9nITr1sz6o3BQkXLrns_tvgx86KL',
    body: [
      'Every dish at The Sona Table begins six months before it reaches your plate. Our culinary team works directly with twelve heritage farms within a 40-mile radius, guiding planting schedules around our seasonal tasting menus.',
      'Chef Jean-Pierre Blanc describes his philosophy as "cooking backwards"—starting not with a recipe, but with what the land is offering at its peak, then building a dish that honors rather than obscures the ingredient.',
      'This season\'s menu features a heritage tomato tart with bronze fennel and aged goat cheese from Tillamook; a wood-roasted California halibut with heirloom bean cassoulet and smoked paprika oil; and a dessert of roasted figs with lavender honey ice cream and almond praline.',
      'The result is a dining experience that feels both deeply local and internationally refined—a menu that could only exist here, at this table, in this season.',
    ],
  },
  {
    slug: 'silence-as-luxury',
    tag: 'Design',
    date: 'February 18, 2024',
    author: 'Elena Rostova',
    readTime: '7 Min Read',
    location: 'Westlake, CA',
    title: 'Silence as the Ultimate Luxury',
    excerpt: 'In an age of endless noise, Sona\'s acoustic architecture creates sanctuaries of stillness that redefine what it means to truly rest.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_DQpvIyeqKF_9cHgN8tQD8wIplNN4ZSh6Vfk1nli75GxSYaTTQmW7uKmbLeOChc8JzejgH_aKjvRm0RpfP5eYCR6_sUTMWtkLgRCDKSCetmE78CnqYBEmTV4kAmldEI-yzKdTAUg9mww5i9l7yG2xCbu4og5rFoUex9SFQxryzMbqaHtxTBbL6Ot04ar9NA5C37ai_iL-6dNK0UHzwwIPli69MyvqKkEImrvMvAHygZPhO2ZYAk3430dG8n-wVt2PEiIpPBmHB6EG',
    body: [
      'We live in an era of sonic excess. Open offices, streaming notifications, and the ambient hum of urban infrastructure have normalized a state of perpetual low-grade auditory stress.',
      'At Sona, we worked with acoustic engineers from the Fraunhofer Institute to design spaces where silence is not the absence of sound, but an active, designed quality.',
      'Walls are constructed with staggered-stud framing and mass-loaded vinyl decoupling. Windows are triple-glazed with argon fill. Corridors are finished with recycled cork and wool panels that absorb rather than reflect sound.',
      'The effect is profound. Guests report that the silence itself feels "thick"—a physical quality, like stepping into cool water. It is the luxury of being truly alone with one\'s thoughts.',
    ],
  },
  {
    slug: 'sustainable-heritage-preservation',
    tag: 'Sustainability',
    date: 'January 25, 2024',
    author: 'Julian Thorne',
    readTime: '9 Min Read',
    location: 'Westlake, CA',
    title: 'Preserving Heritage Through Sustainable Design',
    excerpt: 'Exploring how Sona balances the conservation of century-old structures with cutting-edge green building practices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrEi5bFu1yH7zQVZv1GyoG3g9Jb3Tz7aKCjlQ3_r6OF-7BVK3s2xBr0x4NVtRQ7cjOsFMBluIw9sMnVH6W0kpdVr0ObfJ7KuxStYzzlEx-pCDRPX-lmNzOQzi9RrtC7VUgeYDPu2i91gnwCTJY9sbfld9hmNXgALWszk42n78lYefDG3uv57ahMsAzmc5mDDXn4Q3UgsQ60qN_HeZFvl_HbpYzrlDKl6ihtXNllLC5uJ1lfDm4kDsFyQqHzcml9hvOio_pEaHI8Tr',
    body: [
      'The original Westlake estate was built in 1897 by architect Harold Morse, a protégé of Henry Hobson Richardson. Its sandstone walls and timber-framed roofline represent a regional vernacular that we were determined to honor.',
      'Working with heritage conservation specialists from London and local structural engineers, we developed a restoration philosophy we call "honest intervention"—making new additions clearly identifiable as modern while ensuring they never overshadow the original fabric.',
      'New guest wings are constructed in cross-laminated timber with a LEED Platinum rating. Solar arrays are hidden within a restored water tower. Rainwater harvesting supplies 60% of irrigation. All food waste is composted on-site.',
      'The result is a building that carries 125 years of history while operating at the forefront of sustainable hospitality—a living example that preservation and progress are not opposing forces.',
    ],
  },
  {
    slug: 'art-of-arrival',
    tag: 'Experience',
    date: 'January 5, 2024',
    author: 'Mira Tanaka',
    readTime: '4 Min Read',
    location: 'Westlake, CA',
    title: 'The Art of Arrival: First Impressions Matter',
    excerpt: 'From the driveway sequence to the welcome ritual, every moment of your arrival at Sona is choreographed with intention.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh7CmsSsM4yHeYjswvjeum5ittnG4cBgOVylYL9Ka1A_V_fFEBnmGQA_A7dNJfrXM8UVsDxQeLOlUViSjPJj0l2lwZ08BhGs4GqcAJP1aTGkDrBDKh_PusuMLh_3eStr1fBUtDybM3vIeceH41E6vCjjyQf-gyHUY3eFoNTBdEWI8cBCTIU1tyed53wrjkDYtOKMUqOHn-K74gGsHkwvan-m-YRCJxR4TRmwhzNhP_Kqixt1v7zBPDTd8b5hAZodXmTUVzc8DJXhxo',
    body: [
      'The hospitality industry speaks often of the guest journey. At Sona, we prefer to speak of the guest arrival—because those first twelve minutes set the emotional tone for everything that follows.',
      'Our driveway is intentionally long: 400 metres of sweeping gravel that decelerates not just your vehicle, but your nervous system. Mature oak trees line both sides, their canopy creating a natural decompression chamber between the world you have left and the one you are entering.',
      'At the door, you are not checked in—you are welcomed. Your name is known before you arrive. Your preferences have been studied. A warm towel, your preferred beverage, and a single line of personal greeting replace the clipboard and transaction of conventional check-in.',
      'It is a small choreography, rehearsed daily, that communicates a single idea: you are expected, you are known, and you are home.',
    ],
  },
]

const comments = [
  {
    name: 'Marcello Ricci',
    time: '2 Days Ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLxSUKNMKFI5U6ZoM_1eBrwI0ui0TeYUoTHErTZlzGzGE7iLjN8gb8Hd-2Qen3gm6lJdSA1rG3zK5qyBfn8By0KNRNn1zoJwX19vyZfeavXuCfTj-wZW9PtfSErFv6Q40xdFED1giRhXwtn2AvAuFOxefcdD5QK28vXsV5tSx2oGU6NKpOlEVh3mx-Vr_xxduVbFBHUOEG3dkfiAg4rUWtZxUALHK5AjW0nTeiAdMCbCPCD_mf2NpXZWt16b0MKu3w-FTHklJ8IrDr',
    text: 'This piece perfectly captures the essence of what I felt during my stay last October. The way the light interacts with the timber beams in the main hall is something I think about often.',
    indent: false,
  },
  {
    name: 'Elena Vance',
    time: '1 Day Ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW_KsgyCNQg0Vxlu6VlLxVTYYdkS9DgZP10BPTPdGSUQ7br3tLFYstm7r_PSUTyctXbC3jXLAl1tH_dI1wbWuoMLfipjbfy2staCtg2OP0kq5hZ8fKKtr5_MBCdCTbtir0MfdM8E2OBnZCrbiEXo_BDAXVvwve5c_116vnL8PHU_13wDfPUxZ0gsJkN_BeecNcdmW8ncAxN1y6KBlzVyMRUGQpfX5iUzgvc6kl4uYGz7wU764qo4q0uITwLcCXCM1najioItIz90bf',
    text: "Agree completely, Marcello. It's rare to find a place that respects silence as much as Sona does. Truly an architectural journal come to life.",
    indent: true,
  },
]

const articleImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQLJ9zj74gkZpGF3wulRrNh1PS3tq1JAbS8eeJVEZCqt_nkg4xTBIsYejkv-tLGe3h4IXwO-eFJh_buIe_dMwwloBTR0be-CNLW1Hfov7TcWpxNb8GzW__KBgviRLilkjtwA2GtNCTLqV-LHWNjgFAIyTa4eP4yN8gRXJ97OdHDDnpJ5EgX48XI49oMJS4Boe3SN1cghjXMNumivsq6XLut5YW7KQPRrYAzFBeBDrV7-565YoAKHJfPl67khs5qKWG1vOoOPfNTkfn',
    alt: 'Traditional Pagoda',
    offset: '',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAGUcE9NpliUSQQckgfrmXHr8I7vTWrlfL1DgFoEULxJt0fnMUYvI74KkSZ5QIx5-8KWKVCVUnOREvTbAWphdb92WqJoGJdsG4PS2P7vwP91ID9PbQFP8yjriFDU0IjkycNlvVPk89qSxfic9bPsaNZUNUWLNmziaZvdKNaoBgJFmufZ2Y1rmErIQnLQrPZz-oCesTzQJb3PIhj2jbLu0QFiZrGKOrHc_6-HTncQTAETRu1Do722KukHf7gfwB7wHmvpJNXecqXoiS',
    alt: 'Mountain Lake',
    offset: 'mt-8 md:mt-12',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYl_FY7czyScikbPDyAsqQdWR4TX_GJEcaG3tAUX7JUFTEG8XGMXSWiz5HiMrNUD_Ty-xaJGclVJC1CmHR5n7ALNddFLkJCpKfPRskEcvZqRKnMaRUu17cw2kmrlUZDl3h2hppbH1mZy3gi56fXd5q1ZIZ6LR7LVwPuE_XIZKABDoJLvJCXQDesUijNRLbQcl4swFGV3FS2aM7ZyhpFIYSepLKku7GMR3GKG38gjHf9PGtBv6zFtkIflW_EK5LR6JDIZ0q5pchXD_p',
    alt: 'Beach Hammock',
    offset: 'mt-16 md:mt-24',
  },
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = allPosts.find((p) => p.slug === slug)

  // 404 fallback — redirect to blog listing
  if (!post) return <Navigate to="/blog" replace />

  // Get related posts (other articles, max 3)
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* === HERO === */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-inverse-surface">
        <div className="absolute inset-0 opacity-50">
          <img
            alt={post.title}
            className="w-full h-full object-cover"
            src={post.image}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

        {/* Back to Blog breadcrumb */}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[10px] uppercase tracking-[0.15em] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Journal
          </Link>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="bg-primary-container text-on-primary-fixed px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase">
              {post.date}
            </span>
            <span className="text-surface/70 text-[11px] tracking-[0.12em] uppercase">By {post.author}</span>
          </div>
          <h1 className="text-surface font-headline text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight tracking-tighter mb-6">
            {post.title}
          </h1>
          <div className="w-20 h-[2px] bg-primary-container mx-auto" />
        </div>
      </section>

      {/* === ARTICLE BODY === */}
      <article className="bg-surface">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28 space-y-10">
              <div>
                <h4 className="text-on-surface font-bold text-[10px] tracking-[0.2em] uppercase mb-5">Discovery</h4>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                    {post.location}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                    {post.readTime}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">label</span>
                    {post.tag}
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-outline-variant/20">
                <h4 className="text-on-surface font-bold text-[10px] tracking-[0.2em] uppercase mb-4">Share Story</h4>
                <div className="flex gap-4">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">share</button>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">bookmark</button>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20">
                <h4 className="text-on-surface font-bold text-[10px] tracking-[0.2em] uppercase mb-4">Author</h4>
                <p className="text-sm font-bold text-on-surface">{post.author}</p>
                <p className="text-xs text-on-surface-variant mt-1">Contributing Writer, The Sona Journal</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-8">
            {/* Pull quote */}
            <p className="text-xl md:text-2xl lg:text-3xl text-on-surface leading-relaxed font-headline italic font-light border-l-2 border-primary-container pl-6 md:pl-8">
              {post.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-[1.9] font-light">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] py-6 md:py-10">
              {articleImages.map((img) => (
                <div key={img.alt} className={`aspect-[3/4] overflow-hidden ${img.offset}`}>
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    src={img.src}
                  />
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-outline-variant/15">
              <span className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold">Tags:</span>
              {[post.tag, 'Sona Hotel', 'Luxury', 'Hospitality'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 border border-outline-variant/30 text-[9px] uppercase tracking-[0.12em] text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* Comments */}
            <section className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-outline-variant/20">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-12 tracking-tight">
                Conversation <span className="text-on-surface-variant/40">(0{comments.length})</span>
              </h3>
              <div className="space-y-10">
                {comments.map((c) => (
                  <div key={c.name} className={`flex gap-5 md:gap-8 ${c.indent ? 'ml-8 md:ml-20' : ''}`}>
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 overflow-hidden bg-surface-container-high rounded-none">
                      <img alt={c.name} className="w-full h-full object-cover" src={c.avatar} />
                    </div>
                    <div className="flex-1 pb-8 border-b border-outline-variant/10">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-bold text-xs tracking-[0.1em] uppercase text-on-surface">{c.name}</h5>
                        <span className="text-[10px] text-on-surface-variant/50 uppercase tracking-[0.1em]">{c.time}</span>
                      </div>
                      <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base mb-4">{c.text}</p>
                      <div className="flex gap-6">
                        <button className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-primary hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>favorite</span> Like
                        </button>
                        <button className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] uppercase text-on-surface-variant hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>reply</span> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment Form */}
            <section className="mt-12 md:mt-16 p-8 md:p-12 bg-surface-container-low">
              <h3 className="font-headline text-xl md:text-2xl font-bold mb-10 text-on-surface tracking-tight">Leave a Comment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-2 block">Name *</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30 text-sm" placeholder="Your full name" type="text" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-2 block">Email *</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30 text-sm" placeholder="your@email.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-2 block">Comment *</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/30 resize-none text-sm" placeholder="Share your thoughts..." rows={5} />
                </div>
                <div className="pt-4 flex justify-end">
                  <button className="bg-primary text-on-primary px-10 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity" type="submit">
                    Post Comment
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </article>

      {/* === RELATED POSTS === */}
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase block mb-3">Continue Reading</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight">More Stories</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.12em] group shrink-0">
              All Articles <span className="h-[2px] w-8 bg-primary-container transition-all duration-500 group-hover:w-12" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((rp) => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img alt={rp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={rp.image} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary text-[9px] font-bold tracking-[0.15em] uppercase">{rp.tag}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full" />
                  <span className="text-on-surface-variant/40 text-[10px]">{rp.date}</span>
                </div>
                <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface leading-snug group-hover:text-primary transition-colors tracking-tight">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
