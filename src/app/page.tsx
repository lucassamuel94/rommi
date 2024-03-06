import { Header } from '@/components/header'
import { HomePageDocument, HomePageQuery, SlideRecord } from '@/gql/generated'
import { datoClient } from '@/lib/client'
import { registerUrql } from '@urql/next/rsc'
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
    <main>
      <div className='h-[800px] bg-black'>
        <Header />
      </div>

      <ul>
        {homepage?.slides.map((slide: SlideRecord) => (
          <li key={slide.nome}>{slide.nome}</li>
        ))}
      </ul>
    </main>
  )
}
