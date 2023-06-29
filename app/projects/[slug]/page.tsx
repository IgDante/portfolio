import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

type ProjectProps = {
    params: {
        slug: string
    }
}

const getProjectsDetails = async (slug: string): Promise<ProjectPageData> => {
    const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `

    return fetchHygraphQuery(
        query,
        60 * 60 * 24
    )
}

export default function Projects({ params: { slug } }: ProjectProps) {
    const { project } = await getProjectsDetails(slug)

    return (
        <>
         <ProjectDetails project={project}/>
         <ProjectSections sections={project.sections}/>
        </>
    )
} 