import React from 'react'
import Layout from '../../components/Layout'
import { Container, WorkItem, WorkTitle, JobTitle } from './styles'
import { SectionTitle } from '../../styles'

function work({ user }) {
  return (
    <Layout user={user}>
    <Container>
        <SectionTitle>Work</SectionTitle>
        <ul>
            {user?.work?.map((work, i) => (
                <WorkItem key={i}>
                    <WorkTitle>{work.position}</WorkTitle>
                    <div>
                        <JobTitle>{work.conpany}</JobTitle>
                        <p>{work.location}</p>
                        <p>{work.start.year} - {work.end.year == null ? <>Present</> : work.end.year}</p>
                        <p>{work.summary}</p>
                    </div>
                </WorkItem>
            ))}
        </ul>
    </Container>
    </Layout>
  )
}

export default work