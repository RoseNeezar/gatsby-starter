import React from "react"
import styled from "styled-components"

const PageLayout = styled.div`
  background-color: ${({ theme }) => theme.LightTheme.primary};
`

const IndexPage: React.FC = () => {
  return (
    <PageLayout>
      <h1>hello world</h1>
    </PageLayout>
  )
}

export default IndexPage
