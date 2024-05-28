import { useEffect, useState } from 'react'
import axios from 'axios'

import { ArrowSquareOut, GithubLogo, Users } from '@phosphor-icons/react'
import { ProfileContainer, ProfileContent, ProfileHeader } from './styles'

interface GithubUserType {
  name: string
  login: string
  avatarUrl: string
  bio: string
  followers: number
  htmlUrl: string
}

export function Profile() {
  const [githubUser, setGithubUser] = useState<GithubUserType | null>(null)

  async function fetchGithubUserData() {
    const response = await axios.get('https://api.github.com/users/edusmpaio')

    const { name, login, avatar_url, bio, followers, html_url } = response.data

    setGithubUser({
      name,
      login,
      avatarUrl: avatar_url,
      bio,
      followers,
      htmlUrl: html_url,
    })
  }

  useEffect(() => {
    fetchGithubUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={githubUser?.avatarUrl} alt="" />

      <div>
        <ProfileHeader>
          <strong>{githubUser?.name}</strong>
          <a href={githubUser?.htmlUrl} target="_blank" rel="noreferrer">
            <span>github</span>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </ProfileHeader>

        <ProfileContent>
          <p>{githubUser?.bio}</p>

          <div>
            <span>
              <GithubLogo size={20} />
              {githubUser?.login}
            </span>
            <span>
              <Users size={20} weight="fill" />
              {githubUser?.followers} seguidores
            </span>
          </div>
        </ProfileContent>
      </div>
    </ProfileContainer>
  )
}
