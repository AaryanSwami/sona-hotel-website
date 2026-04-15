import { Link } from 'react-router-dom'

const features = [
  'Luxury Suites', 'Private Concierge', 'Artisan Kitchen',
  'Wellness Sanctuary', 'Infinity Lounge', 'Curated Tours',
]

const serviceCards = [
  {
    title: 'Restaurant Services',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9KdN6sJ2WvxwWtd42Rk9F3kJ3PJRQ0wfZqzgyQWqfnPEQ0iIXwi4cKjU5x7b3De9UsMqXdbwMcCj6MUXGkraN1MhuAkEY8YPwMADH_MSyLQ2LvxYb3YeeH16Y0xq471JIwWt83tsaXRmwii8DrnaXxDJulmD9GWFCkBzUqAkEuiVSxxpcHtcR0BGyvCiLDkCETR0jml-OT8b4d5zhrKzCJSobx9MY38_dfytlNOEtcwqYoOkM9nITr1sz6o3BQkXLrns_tvgx86KL',
  },
  {
    title: 'Travel & Camping',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrEi5bFu1yH7zQVZv1GyoG3g9Jb3Tz7aKCjlQ3_r6OF-7BVK3s2xBr0x4NVtRQ7cjOsFMBluIw9sMnVH6W0kpdVr0ObfJ7KuxStYzzlEx-pCDRPX-lmNzOQzi9RrtC7VUgeYDPu2i91gnwCTJY9sbfld9hmNXgALWszk42n78lYefDG3uv57ahMsAzmc5mDDXn4Q3UgsQ60qN_HeZFvl_HbpYzrlDKl6ihtXNllLC5uJ1lfDm4kDsFyQqHzcml9hvOio_pEaHI8Tr',
  },
  {
    title: 'Event & Party',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh7CmsSsM4yHeYjswvjeum5ittnG4cBgOVylYL9Ka1A_V_fFEBnmGQA_A7dNJfrXM8UVsDxQeLOlUViSjPJj0l2lwZ08BhGs4GqcAJP1aTGkDrBDKh_PusuMLh_3eStr1fBUtDybM3vIeceH41E6vCjjyQf-gyHUY3eFoNTBdEWI8cBCTIU1tyed53wrjkDYtOKMUqOHn-K74gGsHkwvan-m-YRCJxR4TRmwhzNhP_Kqixt1v7zBPDTd8b5hAZodXmTUVzc8DJXhxo',
  },
]

const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPMjBEpKs412VWswsjAVRP-y9kbMlswl8EpcBzeDlAIXPus8uOUFl1FLlBx9dUmhz1ljIlkRQ_ZZ6RhdJHWq1_MVBzTW45QgxR6bnpsYofnTAEVEIAznCcoPapBTt1aLLOKbowv77uWRynuz9uSeXzHcZFKmlcF_s6cQh_MXWAJUzx1nHaqH0oW3nMoX6koIZCtweKOPy5A4YN4xd5IYkUAHhgUDAjV3NCzsAfhtZL9Y2UJ9xBHKlO4I-Ivi2OgnhOMRKx9m0_jozz',
    alt: 'Terracotta Arches',
    span: 'col-span-12 md:col-span-7 aspect-[4/5]',
    label: 'Heritage Wing',
    caption: 'The Terracotta Arches',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOhkuBEh-0ERW10WWUJ2l8Kme8j4PWYJnqd85863IIww2DQPHFTUNE_BX70JiVF7GGbLhTt7xfPwDWWu-pMTw_tLauNBQ9BKfb3kIT2VOg-yQLIIkCiRk7B1TrGE2zMC694f8_2SamZs8aYkrd2T0kf76lsbgunCICpULCjFfMqN3YA4H3Q765V-jZRwwAgDbiFL65yZAs4sxyOPeTUaCCGh_bRZWXVAIF-EDevmZ-jCOz5KMcLBkXnitHvzZBi0izqD1FopxB_Pm2',
    alt: 'Breakfast Spread',
    span: 'col-span-12 md:col-span-5 aspect-[16/10]',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQoE4A7UJ4oFVhSXVGjoz7pNrPOpoLkHZ1Wl3Teb6147uT3LLmQJHFkuMkKIIZPMNb5_xxn68Q_X3gWMDDgpXiRyc8RpNW7XfKHUKETCQfuMAgSXVpG7jqwwnY_Eyq85DSd0qjiVMji3aR3vwxAsdIXl-hzqO2odmx8nQWMFEfwiFUIiYOgRsQdY72mpaVs-xCGPPm9nZaZPknG8zy-lZAMsN15VDLNkl9PHrKSBeB9vqFYWQQoUDUbizpyJB7i1luRe61tH1ATWNZ',
    alt: 'Stone Texture',
    span: 'col-span-12 md:col-span-5 aspect-[16/10]',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWhPKT7k6Rr8MjJBtkYrykCwERk8YWWMgFpG8mVBmZnEoQlXdDr9xcxFlACkRJ4vvo0jzjPS2rDdjN5MHSBXMbLxWT0oc5Qm1dqVZFyEDa1Y3YGzRcmodHt-jBEDCd1iK2atnXJhOC89Rvke364DnRdB_zHyw_BVCWbZH8IiMqqRDqnrFkhGwddXuW5W9zoRsI_7Cy5hTPGDBW1Ji7K-Is4wF9sJjZT8NMTZl3-jB8Rdbbz6yDFuFioAhmGTsUT9O4VJLBhSTViV-y',
    alt: 'Marble Tub',
    span: 'col-span-12 md:col-span-4 aspect-square md:h-[400px]',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrV7aKqkYGobZnw2hY3smw2Yz1A0YI_e6X9cFqF6CXxDvg8HFkVtcAJuZegdn9BHmx_myjooT-YZBHxcLnxo8n5bN92oEOxVC_-R9hyVysOXQRVomYz4hJkahnbxt5wuAYLmyDqQ03DcG7D9RLhF1jrfc1TI4B6H66-Rjab6jEsaR_130KPDj5bJS4UYdqjhTU9r5l8BlAVTaLdT-pp7gMO1lpwhWkZHVFj3bCyRqvYXf8fgEgkVED1wZ8Y9VN0DuNhAp6Kz8nLE-7',
    alt: 'Lounge Panorama',
    span: 'col-span-12 md:col-span-8 aspect-video md:h-[400px]',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          alt="Sona Heritage"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Zijx75rwjdbWe2DI91nxq1nWmzWaMDu86cN8WAFSgMSkJKEk70owoWaUN9fEmRmJ-Qnx2tG_FRMjQ6YhyU9wDofppxyMKaeyLzoeYENs4Sa7bvD55W4ZSAFpY_ubMqeA3AMVuqgwBXVgb4roR3rcm0ikWQsB5q1LWq8lyazv8W0lu06efpRC6GrBJi0qncMwbTzZI4-EwFJkOsjh2NtBBxgmGuzTOSd2GwHpHQAGOSvleSHRG9TL-5D6h3viy_DHXrwZbS4BAVcU"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold text-primary-container">Since 1924</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-4">About Us</h1>
          <div className="w-16 h-[2px] bg-primary-container mx-auto" />
        </div>
      </section>

      {/* Heritage Content */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-5 block">Our Heritage</span>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-on-surface leading-tight mb-8">
                Architectural Precision & Timeless Luxury.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-base md:text-lg font-light">
                Sona stands as a beacon of architectural integrity in the heart of the valley. For nearly a century, we have curated experiences that blend the rugged beauty of the surrounding landscape with the refined sophistication of high-modernist design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container filled text-xl">check_circle</span>
                    <span className="text-sm font-bold uppercase tracking-[0.1em] text-on-surface">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img
                alt="Architecture"
                className="w-full h-[220px] sm:h-[320px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6lwgGwXjIth63UrmCxxqL_rubNQS8JZXWWDChAwH0bXw7MPJCAnH7jQyQhTGfugvFsSQzX2pc1V5QXKnywVS0RUffRu3TgxIE74E4VsGd3HP9i-5Lbdr6r7Euj3_WDvTaRjtiydpMHioJratdfYoEdeC_vV75CPCPPwEBLBU2rNkBBgfv5eviYy3hibxZz7wj9km9v4DtjHkl-RQx8LavyjF-fwuziozcIS9xDNf9_S4mAD9HwFzdiVGIkPJO_COpN25jmKhsRNzw"
              />
              <img
                alt="Interior"
                className="w-full h-[220px] sm:h-[320px] md:h-[500px] object-cover mt-6 md:mt-12 grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChINnvGZOZIKEqGY3_ia3L-_7fD-FIpoya6j2J-ouJ06yaxEtXdSlXS65IOVDpf9r14CGV31nes8C6tv1_sinBuiXyVdKCaV2kC0vwL5ySxAhyaG2hjwGUgkjFrcAs5um-0AeXpPpuJ4wl950j4-ql68EMDKq3nS7FWFpg4BwDEf_lsutn_LWcEkBy6bedhGlD0mlpGkdrtjFbYhGd12IYi9dL6Ep3al7qvR5WatGM9Rs8ewyIxsFj3aJpMvGPpPAKAaY3W1zFFIwp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 w-full">
        {serviceCards.map((s) => (
          <div key={s.title} className="relative h-[280px] sm:h-[380px] md:h-[500px] overflow-hidden group">
            <img alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={s.image} />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-all duration-700 flex items-center justify-center p-6 md:p-8 text-center">
              <h3 className="font-headline text-xl md:text-3xl font-black text-white uppercase tracking-[0.15em] leading-tight">
                {s.title}
              </h3>
            </div>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="relative py-20 md:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            alt="Spa"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrbFbtRcEju0X2idcRW2eeRbTIWXIag8Ovgdex9c_x5A9GQSidT2BiDc7R9Lg4E1IgmHyZ7e_gBHHICqF4DFS3270IhJ_H8HfHOxTgrHKtFO0Zz5hk6d-7XQ6ZDE7KJJZi-K9N0sbLHtOHxs4ViPBfPnuYlQN2XnqPOE2KjzaGyKCjchA3uH589KrkArYjB0XNF8u6_DglVy-Ha7blYKGntn7moIAUg22cw-88ZOPViRhXh23Dbw9L4SpQJYQVe-5V1luJcG7Bbzv0"
          />
        </div>
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        <div className="relative z-10 text-center">
          <div className="mb-10 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-primary-container text-primary-container hover:bg-primary-container hover:text-[#0a0a0a] transition-all duration-500 cursor-pointer">
            <span className="material-symbols-outlined text-3xl md:text-4xl filled">play_arrow</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Discover Our Hotel
          </h2>
          <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">A Cinematic Journey into Sona</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">Visual Archive</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface uppercase tracking-tighter">
                The Gallery
              </h2>
            </div>
            <button className="border border-outline px-8 py-3.5 text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-on-surface hover:text-white transition-all duration-500">
              View Full Collection
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-6 items-start">
            {galleryImages.map((img, i) => (
              <div key={i} className={`${i === 0 ? 'sm:col-span-7' : 'sm:col-span-5'} overflow-hidden relative group ${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
                <img
                  alt={img.alt}
                  className={`w-full h-full object-cover ${i > 0 ? 'grayscale hover:grayscale-0' : ''} transition-all duration-700`}
                  src={img.src}
                />
                {img.label && (
                  <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 text-white">
                    <span className="text-[10px] uppercase tracking-[0.3em] mb-1 block opacity-70">{img.label}</span>
                    <p className="font-headline text-lg md:text-2xl font-bold uppercase tracking-tight">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
