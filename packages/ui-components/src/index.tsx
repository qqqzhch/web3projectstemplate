// import { ThemeProvider } from '@emotion/react'
// import createTheme from '@monorepo/design-tokens'
import {providers} from 'ethers'
import './index.css'
// const CustomThemeProvider = ({ theme = createTheme, children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export * from './components/footer'
export * from './components/header'
export * from './web3react/index'
export * from './state/index'
export * from './state/teststate'


export { providers }
