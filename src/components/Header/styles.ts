import styled from 'styled-components'
import backgroundImage from '../../assets/header-cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  img {
    height: 6.125rem;
    margin-top: 4rem;
  }
`
