
import GitHub from "./components/GitHub.jsx"
import Expericen from "./components/Expericen.jsx"
import Intro from "./components/Intro"
import Skill from "./components/Skill.jsx"

export default function page() {
  return (
  <main className=" overflow-hidden">
 <Intro/>
 <GitHub/>

 <Expericen/>
 <Skill/>
  </main>
  )
}
