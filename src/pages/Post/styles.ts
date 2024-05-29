import styled from 'styled-components'

export const PostInfos = styled.div`
  background: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-50']};
    margin-bottom: 0.5rem;
  }
`

export const PostInfosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  a {
    color: ${(props) => props.theme['blue-500']};
    text-transform: uppercase;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;

    span {
      line-height: 120%;
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PostInfosFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-300']};

    svg {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`
