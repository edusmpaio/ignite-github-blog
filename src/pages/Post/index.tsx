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
import { Link } from 'react-router-dom'

export function Post() {
  return (
    <>
      <PostInfos>
        <PostInfosHeader>
          <Link to="/">
            <CaretLeft size={16} weight="bold" />
            <span>Voltar</span>
          </Link>

          <a
            href="https://github.com/edusmpaio"
            target="_blank"
            rel="noreferrer"
          >
            <span>ver no github</span>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </PostInfosHeader>

        <h1>JavaScript data types and data structures</h1>

        <PostInfosFooter>
          <span>
            <GithubLogo size={20} />
            cameronwll
          </span>
          <span>
            <CalendarDots size={20} weight="fill" />
            Há 1 dia
          </span>
          <span>
            <ChatCircle size={20} weight="fill" />5 comentários
          </span>
        </PostInfosFooter>
      </PostInfos>

      <PostContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nihil
          accusamus deserunt totam earum rem nobis tempore impedit cumque! Aut
          accusantium eius quidem ea dicta rem eligendi, quasi assumenda!
          Exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nihil
          accusamus deserunt totam earum rem nobis tempore impedit cumque! Aut
          accusantium eius quidem ea dicta rem eligendi, quasi assumenda!
          Exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nihil
          accusamus deserunt totam earum rem nobis tempore impedit cumque! Aut
          accusantium eius quidem ea dicta rem eligendi, quasi assumenda!
          Exercitationem.
        </p>
      </PostContent>
    </>
  )
}
