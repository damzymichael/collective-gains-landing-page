import { useState, useEffect } from "react"

function Navigation({ sections }: { sections: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState(sections[0].id)
  useEffect(() => {
    if (window.location.hash.length > 1) {
      const urlHash = window.location.hash
      const hashExists = sections.find((section) => section.id === urlHash.slice(1))
      if (hashExists) {
        setActiveId(hashExists.id)
        // Scroll to the component
        const element = document.getElementById(hashExists.id)!
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])
  return (
    <nav className="mt-20 font-semibold">
      <ul className="space-y-3">
        {sections.map((section, index) => (
          <li className="" key={index}>
            <a
              href={"#" + section.id}
              onClick={() => setActiveId(section.id)}
              className={
                "block py-1 px-4 border-l-6 truncate " +
                (activeId == section.id
                  ? "text-secondary border-secondary"
                  : "border-transparent text-[#858585]")
              }
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
