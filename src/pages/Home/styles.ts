import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4.5rem;
`

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme['gray-300']};
      font-size: 0.875rem;
    }
  }
`

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-200']};
  background: ${(props) => props.theme['gray-900']};
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 6px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme['blue-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const PostCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export const PostCard = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['gray-400']};
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-50']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }

  p {
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['gray-200']};
  }
`
