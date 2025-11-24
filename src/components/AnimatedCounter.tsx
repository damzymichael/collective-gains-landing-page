import { useRef } from "react"
import { animate, useInView, useIsomorphicLayoutEffect, type KeyframeOptions } from "motion/react"

type Props = {
  from?: number
  to: number
  formatThousand?: boolean
  animationOptions?: KeyframeOptions
}

function formatNumber(value: number, formatThousand: boolean) {
  if (formatThousand && value > 1000) {
    const kValue = value / 1000
    return `${kValue.toFixed(1)}k`
  }

  return String(Math.floor(value))
}

function AnimatedCounter({ from = 0, to, animationOptions, formatThousand = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    if (!inView) return

    // For if a user disables animation effect
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = formatNumber(to, formatThousand)
      return
    }
    element.textContent = formatNumber(from, formatThousand)
    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(latest) {
        element.textContent = formatNumber(latest, formatThousand)
      },
    })

    return controls.stop
  }, [ref, inView, from, to])
  return <span ref={ref} />
}

export default AnimatedCounter
