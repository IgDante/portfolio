'use client'

import { TechBadge } from "@/app/components/tech-badge"
import { Button } from "@/app/components/button"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandInstagram, TbBrandGmail } from 'react-icons/tb'
import { HomePageInfo } from "@/app/types/page-info"

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/IgDante',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/igdante/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://www.instagram.com/igor.dantee/',
        icon: <TbBrandInstagram />
    },
    {
        url: 'mailto:danteigor424@gmail.com',
        icon: <TbBrandGmail />
    }
]

// type homeSectionProps = {
//     homeInfo: HomePageInfo
// }

export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if(contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é Igor e sou</p>
                    <h2 className="text-4xl font-medium mt-2">Desenvolvedor Web</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Estou entusiasmado para aplicar o que aprendi, contribuir com soluções inovadoras e dar início à minha carreira, buscando fazer a diferença em uma empresa.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name='Next.js' />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button onClick={handleContact} className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image 
                    width={420}
                    height={404}
                    src={'/images/profile-photo.jpeg'}
                    alt="Foto do perfil"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover "
                />
            </div>
        </div>
    )
}