import { ChangeEvent, useEffect, useState } from 'react'
import { searchApi } from '../../lib/axios'
import { formatDistanceToNow } from '../../lib/dayjs'

import { Profile } from './components/Profile'
import {
  HomeContainer,
  HomeHeader,
  PostCard,
  PostCards,
  SearchInput,
} from './styles'
import { useDebounceValue } from '../../hooks/useDebounceValue'

interface IssueResponse {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface Issue {
  id: number
  number: number
  title: string
  body: string
  createdAt: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [filter, setFilter] = useState('')

  const debouncedFilter = useDebounceValue(filter, 800)

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value.trim())
  }

  async function fetchIssues(query?: string) {
    const response = await searchApi.get('/issues', {
      params: {
        q: `${query} repo:edusmpaio/ignite-github-blog`,
      },
    })

    const fetchedIssues = response.data.items.map(
      ({ id, number, title, body, created_at }: IssueResponse) => {
        return {
          id,
          number,
          title,
          body,
          createdAt: created_at,
        }
      },
    )

    setIssues(fetchedIssues)
  }

  useEffect(() => {
    fetchIssues(debouncedFilter)
  }, [debouncedFilter])

  return (
    <>
      <Profile />

      <HomeContainer>
        <HomeHeader>
          <div>
            <strong>Publicações</strong>
            <span>{issues.length} publicações</span>
          </div>

          <SearchInput
            type="text"
            placeholder="Buscar conteúdo"
            onChange={handleSearch}
            value={filter}
          />
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
