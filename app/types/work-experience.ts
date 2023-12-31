import { KnownTech } from "./projects"
import { RichTextContent } from '@graphcms/rich-text-types'

export type workExperience = {
    companyLogo: {
        url: string
    }
    role: string
    companyName: string
    companyUrl: string
    startDate: string
    endDate: string
    technologies: KnownTech[]
    description: {
        raw: RichTextContent
    }
}