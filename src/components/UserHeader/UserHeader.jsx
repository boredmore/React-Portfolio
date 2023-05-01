import React from 'react'
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'
import { useLocation } from 'react-router-dom'

function UserHeader({ user }) {

    const location = useLocation();

  return (
    <HeaderContainer>
        <Header isHome={location.pathname === '/'}>
            <Image src={user?.basics?.image} />
            <div>
                <h2>{user?.basics?.name}</h2>
                <h4>
                    <a href={`https://gitconnected.com/${user?.basics?.username}`}>
                        @{user?.basics?.username}
                    </a>
                    <br />
                    <p>{user?.basics?.region}</p>
                    <p>{user?.basics?.yearsOfExperience} years of experience as a QA Engineer</p>
                    <ViewResumeLink href={`https://gitconnected.com/${user?.basics?.username}/resume`}>View Resume</ViewResumeLink>
                </h4>
            </div>
        </Header>
    </HeaderContainer>
  )
}

export default UserHeader