import React from 'react'
import Layout from '../../components/Layout'
import { Container, ProjectTitle, ProjectItem, SkillContainer } from './styles'
import { SectionTitle, Pill } from '../../styles'

function Projects({ user }) {
  return (
    <Layout user={user}>
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <ul>
                {user?.Projects?.map((project, i) => (
                    <ProjectItem key={i}>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <p>{project.summary}</p>
                        <SkillContainer>
                            {[...Projects.languages].map((item, j) => (
                                <Pill key={j}>{item}</Pill>
                            ))}
                        </SkillContainer>
                    </ProjectItem>
                ) ) }
            </ul>
        </Container>
    </Layout>
  )
}

export default Projects

// <p>{work.start.year} - {work.end.year == null ? <>Present</> : work.end.year}</p>