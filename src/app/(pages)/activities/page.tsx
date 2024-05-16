import ActivitiesContent from "@/app/(mainsite)/components/activitiespage/ActivitiesContent/ActivitiesContent"
import ActivityHeader from "@/app/(mainsite)/components/activitiespage/ActivityHeader/ActivityHeader"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Activities`,
	  description: `Activities`
}

export default function ActivitiesPage(){
	 return(
	 	 <>
			<ActivityHeader />
			<ActivitiesContent />
	 	 </>
	 )
}