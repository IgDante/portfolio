import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                // Alterar imagem
                width={420}
                height={304}
                src='https://media.graphassets.com/p4Sk1LQsRY2tWVaUMwha'
                alt='Thumbnail'
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        alt=""
                        src='/images/icons/project-title-icon.svg'
                    />
                    Nome-Projeto
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam illum cumque exercitationem temporibus numquam, nisi vel animi debitis consequuntur ut iusto veniam dolore minus voluptatum itaque iure quos ab quam impedit autem corporis qui laudantium! Asperiores quisquam error facilis ut doloremque iusto dolorum distinctio, excepturi porro nihil veniam vel officiis, quia culpa nulla neque odit, assumenda esse tempore accusamus.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="React.js" />
                </div>

                <Link href="/" >
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}