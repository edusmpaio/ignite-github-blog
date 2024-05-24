import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;

  img {
    height: 9.25rem;
    border-radius: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 0.5rem;
    gap: 0.5rem;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-50']};
  }

  a {
    color: ${(props) => props.theme['blue-500']};
    text-transform: uppercase;
    font-size: 0.75rem;
    display: flex;
    gap: 6px;
    text-decoration: none;

    span {
      line-height: 160%;
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['gray-200']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['gray-100']};

      svg {
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }
`
