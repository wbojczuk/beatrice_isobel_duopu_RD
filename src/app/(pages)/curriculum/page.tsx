import CurriculumContent from "@/app/(mainsite)/components/curriculumpage/CurriculumContent/CurriculumContent"
import CurriculumHeader from "@/app/(mainsite)/components/curriculumpage/CurriculumHeader/CurriculumHeader"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Curriculum`,
	  description: `Curriculum`,
}

export default function CurriculumPage(){
	 return(
	 	 <>
			<CurriculumHeader />
			<CurriculumContent />
	 	 </>
	 )
}