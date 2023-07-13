import { render, screen,act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from './index'

describe('Counter', () => {
  test('should render successfully', async () => {
    renderCounter()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: /one up/i })
    ).toBeInTheDocument()
  })

  test('should increase count by clicking a button', async () => {
    const user = userEvent.setup()

    renderCounter()

    expect(await screen.findByText(/^1$/)).toBeInTheDocument()
  
    await act(async()=>{
      await user.click(await screen.findByRole('button', { name: /one up/ }))
    })
    
    expect(await screen.findByText(/^2$/)).toBeInTheDocument()
  })
})

const renderCounter = () => {
  return render(<Counter />)
}