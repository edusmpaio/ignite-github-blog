import { useEffect, useState } from 'react'
import { searchApi } from '../../lib/axios'

import { Profile } from './components/Profile'
import {
  HomeContainer,
  HomeHeader,
  PostCard,
  PostCards,
  SearchInput,
} from './styles'
import { formatDistanceToNow } from '../../lib/dayjs'

interface IssueResponse {
  id: number
  number: number
  title: string
  user: {
    login: string
  }
  body: string
  created_at: string
}

interface Issue {
  id: number
  number: number
  title: string
  user: {
    login: string
  }
  body: string
  createdAt: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query?: string) {
    const search = query || ''

    const response = await searchApi.get('/issues', {
      params: {
        q: `${search} repo:edusmpaio/ignite-github-blog`,
      },
    })

    const fetchedIssues = response.data.items.map(
      ({ id, number, title, user, body, created_at }: IssueResponse) => {
        return {
          id,
          number,
          title,
          user: {
            login: user.login,
          },
          body,
          createdAt: created_at,
        }
      },
    )

    setIssues(fetchedIssues)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <>
      <Profile />

      <HomeContainer>
        <HomeHeader>
          <div>
            <strong>Publicações</strong>
            <span>{issues.length} publicações</span>
          </div>

          <form>
            <SearchInput type="text" placeholder="Buscar conteúdo" />
          </form>
        </HomeHeader>

        <PostCards>
          {issues.map((issue) => (
            <PostCard to={`/post/${issue.number}`} key={issue.id}>
              <div>
                <strong>{issue.title}</strong>
                <span>{formatDistanceToNow(issue.createdAt)}</span>
              </div>
              <p>{issue.body}</p>
            </PostCard>
          ))}
        </PostCards>
      </HomeContainer>
    </>
  )
}
