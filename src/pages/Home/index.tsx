import { Profile } from './components/Profile'
import {
  HomeContainer,
  HomeHeader,
  PostCard,
  PostCards,
  SearchInput,
} from './styles'

export function Home() {
  return (
    <>
      <Profile />

      <HomeContainer>
        <HomeHeader>
          <div>
            <strong>Publicações</strong>
            <span>6 publicações</span>
          </div>

          <form>
            <SearchInput type="text" placeholder="Buscar conteúdo" />
          </form>
        </HomeHeader>

        <PostCards>
          {Array.from({ length: 6 }).map((_, i) => (
            <PostCard to={`/post/${i + 1}`} key={i}>
              <div>
                <strong>JavaScript data types and data structures</strong>
                <span>Há 1 dia</span>
              </div>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have.
              </p>
            </PostCard>
          ))}
        </PostCards>
      </HomeContainer>
    </>
  )
}
