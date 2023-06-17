import { AboutMe } from './partials/AboutMe'
import { ContactMe } from './partials/ContactMe'
import { Hero } from './partials/Hero'
import LastProjects from './partials/LastProjects'

export default function Home() {
  return (
    <div className="w-full lg:min-w-xs lg:max-w-screen-lg flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <Hero />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <LastProjects />
        <ContactMe />
      </div>
    </div>
  )
}
