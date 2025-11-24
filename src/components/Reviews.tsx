import { useEffect, useState, useCallback } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "motion/react"

const reviews: { name: string; location: string; review: string }[] = [
  {
    name: "Chinedu O.",
    location: "Lagos",
    review:
      "“The dashboard makes it easy to see where my money is coming from. Super transparent.”",
  },
  {
    name: "Jane A",
    location: "Abuja",
    review:
      "“ I joined Collective Gains in March and earned back my contribution plus ₦20,000 from referrals in just two months.”",
  },
  {
    name: "Olushola O.",
    location: "Lagos",
    review:
      " “The dashboard makes it easy to see where my money is coming from. Super transparent.”",
  },
  {
    name: "Eunice A.",
    location: "Lagos",
    review:
      " “The dashboard makes it easy to see where my money is coming from. Super transparent.”",
  },
]

function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi])
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <ul className="mx-auto px-10 sm:px-14 md:px-0 text-black mb-10 embla__container items-center gap-5 min-h-[250px]">
        {reviews.map((review, index) => {
          const isActive = index === selectedIndex
          return (
            <li className="embla__slide" key={index}>
              <motion.div
                style={{ gap: isActive ? 5 : 0 }}
                animate={{
                  height: isActive ? 250 : 200,
                  backgroundColor: isActive ? "#E2E6F1" : "#fff",
                }}
                className="bg-white rounded-xl max-w-[400px] mx-auto p-4 sm:p-8 xl:p-10 flex flex-col justify-center"
              >
                <h4 className="font-bold text-lg sm:text-xl">{review.name}.</h4>
                <p className="mb-4">{review.location}</p>
                <blockquote className="">{review.review}</blockquote>
              </motion.div>
            </li>
          )
        })}
      </ul>
      {/* disabled color #C3C3C3  */}
      <div className="w-max mx-auto space-x-10 text-primary">
        <button onClick={scrollPrev} className="bg-white p-3 rounded-full">
          <FaChevronLeft />
        </button>
        <button onClick={scrollNext} className="bg-white p-3 rounded-full">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Reviews
