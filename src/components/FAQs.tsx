import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { AnimatePresence, motion } from "motion/react"

const defaultAnswer = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

const _faqs: { question: string; answer: string; displayAnswer: boolean }[] = [
  {
    question: "What do I need to start",
    answer: "Just an email/phone number and a one-time contribution of ₦2000",
    displayAnswer: true,
  },
  { question: "How do I earn?", answer: defaultAnswer, displayAnswer: false },
  { question: "When can I withdraw my money?", answer: defaultAnswer, displayAnswer: false },
  { question: "Is my money safe?", answer: defaultAnswer, displayAnswer: false },
  { question: "Is this a loan or investment scheme?", answer: defaultAnswer, displayAnswer: false },
]

function FAQs() {
  const [faqs, setFaqs] = useState(_faqs)

  function toggleFaq(index: number) {
    const faqs_ = faqs.map((faq, id) => {
      if (index !== id && faq.displayAnswer) {
        faq.displayAnswer = false
      } else if (index == id) {
        faq.displayAnswer = !faq.displayAnswer
      }
      return faq
    })
    setFaqs(faqs_)
  }
  return (
    <ul className="space-y-3">
      {faqs.map(({ question, answer, displayAnswer }, index) => (
        <li key={index}>
          <div
            role="button"
            onClick={() => toggleFaq(index)}
            className="bg-[#E2E6F1] text-black p-3 border border-primary rounded-xl hover:cursor-pointer"
          >
            <header className="flex justify-between items-center">
              <h5 className="font-bold text-lg sm:text-xl">{question}</h5>
              <button className="bg-primary text-[#E2E6F1] p-2 text-sm rounded-full">
                <FaChevronDown />
              </button>
            </header>
            <AnimatePresence>
              {displayAnswer && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-sm sm:text-base pr-10"
                >
                  {answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FAQs
