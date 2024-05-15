import VisitContent from "@/app/(mainsite)/components/visitpage/VisitContent/VisitContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Visit`,
	  description: `Visit`
}

export default function VisitPage(){
	 return(
	 	 <>
			<VisitContent />
	 	 </>
	 )
}