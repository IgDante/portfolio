import { HeroSection } from "./components/pages/home/hero-section.tsx";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info.js";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        } 
      }
    }
  `

  return fetchHygraphQuery(
    query
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData();

  console.log(pageData);

  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
