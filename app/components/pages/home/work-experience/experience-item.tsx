import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                    src='https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5'
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="logo-empresa" />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a
                        href="/"
                        target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ Nome empresa
                    </a>
                    <h4 className="text-gray-300">Cargo</h4>

                    <span className="text-gray-500">
                        Tempo de empresa
                    </span>

                    <p>
                        Descrição da função
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React.js"/>
                    <TechBadge name="React.js"/>
                    <TechBadge name="React.js"/>
                    <TechBadge name="React.js"/>
                </div>
            </div>
        </div>
    )
}