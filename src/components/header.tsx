'use client'

import { Logo } from '@/assets/logo'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'

type AmbientType = {
  id: string,
  name: string,
  description: string,
  link: string
}

export function Header() {
  const ambientes: Array<AmbientType> = [
    {
      id: '0788681e-dfca-4e69-986a-adc5ab14f0b6',
      name: 'Cozinha',
      description: 'O coração da casa pensado nos mínimos detalhes',
      link: '/cozinha'
    },
    {
      id: '65d2dbcb-695d-40d4-9956-ddf6591b973d',
      name: 'Dormitório',
      description: 'Recarregue suas energias com ambiente pensando para você',
      link: '/dormitorio'
    },
    {
      id: 'e5337752-ce6b-48a7-be06-f7dc5fd5eb48',
      name: 'Sala',
      description: 'Espaço ideal para reunir amigos e familiares',
      link: '/sala'
    },
    {
      id: '7ca39bee-b72a-49e7-b8ff-60f6135c0caa',
      name: 'Banheiro',
      description:
        'Aproveite a praticidade dos planejados para atender às necessidades de toda família',
      link: '/banheiro'
    },
    {
      id: '7806631d-de2d-45da-8196-af9b6c458811',
      name: 'Home Office',
      description:
        'Tenha um local de trabalho elegante, ergonômico e funcional',
      link: '/home-office'
    }
  ]

  return (
    <header className='absolute inset-x-0 top-10'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <Logo className='h-7' />
        </Link>

        <NavigationMenu className='text-sm font-medium'>
          <NavigationMenuList className='space-x-6'>
            <NavigationMenuItem
              className='rounded px-4 py-2 text-neutral-50 hover:bg-neutral-100/20'
              asChild>
              <Link href={'/'}>Início</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-neutral-50 hover:bg-neutral-900 focus:bg-neutral-900'>
                Ambientes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='flex w-[512px] flex-col p-6'>
                  {ambientes.map(ambiente => (
                    <NavigationMenuLink
                      key={ambiente.id}
                      href={ambiente.link}
                      className='rounded px-6 py-3 hover:bg-neutral-100'>
                      <p className='text-neutral-900'>{ambiente.name}</p>
                      <span className='text-sm text-neutral-500'>
                        {ambiente.description}
                      </span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem
              className='rounded px-4 py-2 text-neutral-50 hover:bg-neutral-100/20'
              asChild>
              <Link href={'/'}>Sobre</Link>
            </NavigationMenuItem>

            <NavigationMenuItem
              className='rounded px-4 py-2 text-neutral-50 hover:bg-neutral-100/20'
              asChild>
              <Link href={'/'}>Contato</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Button variant={'primary'} asChild>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Solicite seu orçamento
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
