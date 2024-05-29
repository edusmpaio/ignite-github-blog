import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

import { issuesApi } from '../../lib/axios'

import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'

import {
  PostContent,
  PostInfos,
  PostInfosFooter,
  PostInfosHeader,
} from './styles'
import { formatDistanceToNow } from '../../lib/dayjs'

interface Issue {
  title: string
  htmlUrl: string
  body: string
  createdAt: string
  userLogin: string
  comments: number
}

export function Post() {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  async function fetchCurrentIssueByNumber(issueNumber: string) {
    const response = await issuesApi.get(String(issueNumber))

    const {
      title,
      html_url,
      body,
      created_at,
      user: { login },
      comments,
    } = response.data

    setIssue({
      title,
      htmlUrl: html_url,
      body,
      createdAt: created_at,
      userLogin: login,
      comments,
    })
  }

  useEffect(() => {
    if (issueNumber) {
      fetchCurrentIssueByNumber(issueNumber)
    }
  }, [issueNumber])

  return (
    <>
      <PostInfos>
        <PostInfosHeader>
          <Link to="/">
            <CaretLeft size={16} weight="bold" />
            <span>Voltar</span>
          </Link>

          <a href={issue?.htmlUrl} target="_blank" rel="noreferrer">
            <span>ver no github</span>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </PostInfosHeader>

        <h1>{issue?.title}</h1>

        <PostInfosFooter>
          <span>
            <GithubLogo size={20} />
            {issue?.userLogin}
          </span>
          <span>
            <CalendarDots size={20} weight="fill" />
            {issue?.createdAt && formatDistanceToNow(issue?.createdAt)}
          </span>
          <span>
            <ChatCircle size={20} weight="fill" />
            {issue?.comments} comentários
          </span>
        </PostInfosFooter>
      </PostInfos>

      <PostContent>{<Markdown>{issue?.body}</Markdown>}</PostContent>
    </>
  )
}
