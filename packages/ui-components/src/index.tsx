import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'
import './index.css'
const CustomThemeProvider = ({ theme = createTheme, children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export * from './components/button/Button'
export * from './components/footer'
export * from './components/header'
export * from './web3react/index'
export { CustomThemeProvider }
