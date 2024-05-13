import Apply from "@/app/(mainsite)/components/homepage/Apply/Apply";
import Discover from "@/app/(mainsite)/components/homepage/Discover/Discover";
import Flag from "@/app/(mainsite)/components/homepage/Flag/Flag";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Located from "@/app/(mainsite)/components/homepage/Located/Located";
import Opportunites from "@/app/(mainsite)/components/homepage/Opportunites/Opportunites";
import Options from "@/app/(mainsite)/components/homepage/Options/Options";


export default function Home() {
  return (
    <>
      <Header />
      <Flag />
      <Discover />
      <Apply />
      <Located />
      <Options />
      <Opportunites />
    </>
  )
}
