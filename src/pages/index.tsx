import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../App/Layout/Layout"
import { observer } from "mobx-react-lite"
import { Header } from "../App/Base/Header"
import { themeStore } from "../App/Store/themeStore"

const PageLayout = styled.div`
  background-color: ${({ theme }) => theme.primary};
`

const IndexPage: React.FC = () => {
  const { setToggleTheme, toggleTheme } = themeStore

  const HandleTheme = () => {
    setToggleTheme()
    console.log(toggleTheme)
  }
  console.log(toggleTheme)
  return (
    <Layout>
      <Header>header</Header>
      <PageLayout>
        <h1>hello world</h1>
        <button onClick={() => HandleTheme()}>Click me</button>
      </PageLayout>
    </Layout>
  )
}

export default observer(IndexPage)
