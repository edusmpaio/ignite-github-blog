import { ArrowSquareOut, GithubLogo, Users } from '@phosphor-icons/react'
import { ProfileContainer, ProfileContent, ProfileHeader } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/edusmpaio.png" alt="" />

      <div>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <a
            href="https://github.com/edusmpaio"
            target="_blank"
            rel="noreferrer"
          >
            <span>github</span>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </ProfileHeader>

        <ProfileContent>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div>
            <span>
              <GithubLogo size={20} />
              cameronwll
            </span>
            <span>
              <Users size={20} weight="fill" />
              32 seguidores
            </span>
          </div>
        </ProfileContent>
      </div>
    </ProfileContainer>
  )
}
