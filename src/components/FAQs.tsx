import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { AnimatePresence, motion } from "motion/react"

const _faqs: { question: string; answer: string; displayAnswer: boolean }[] = [
  {
    question: "What do I need to start",
    answer: "Just your email,phone number and a one-time contribution of ₦2000",
    displayAnswer: true,
  },
  {
    question: "When can I withdraw my money?",
    answer:
      "You can withdraw your money after referring three users who complete their payment, subsequent withdrawals can be done immediately",
    displayAnswer: false,
  },
  {
    question: "Is my money safe?",
    answer:
      "Your money is completely safe, this platform was created to raise funds and build a community",
    displayAnswer: false,
  },
  {
    question: "How much can I earn?",
    answer:
      "Your earning can be as much as your referral but you need 3 referrals in a 5-day window to qualify for a reward",
    displayAnswer: false,
  },
  {
    question: "Can I sign up without paying?",
    answer:
      "Yes, signing up process doesn't require payment but you need to complete your payment to be able to refer other users and earn",
    displayAnswer: false,
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach out to us on whatsapp on 07036138115 or email us at support@collectivegains.com.ng",
    displayAnswer: false,
  },
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
