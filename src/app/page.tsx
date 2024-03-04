import { HomePageDocument, HomePageQuery, SlideRecord } from '@/gql/generated'
import { datoClient } from '@/lib/client'
import { registerUrql } from '@urql/next/rsc'
import Link from 'next/link'
import { OperationResult } from 'urql'

const { getClient } = registerUrql(datoClient)

export default async function HomeApp() {
  const result: OperationResult & HomePageQuery = await getClient().query(
    HomePageDocument,
    {}
  )

  const {
    data: { homepage }
  } = result

  return (
    <main className='container py-10'>
      <Link href={'/'}>
        <h1 className='font-medium'>Boilerplate Next14</h1>
      </Link>

      <ul>
        {homepage?.slides.map((slide: SlideRecord) => (
          <li key={slide.nome}>{slide.nome}</li>
        ))}
      </ul>
    </main>
  )
}
