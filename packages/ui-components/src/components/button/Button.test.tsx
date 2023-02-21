import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { Button } from './Button'

test('Header contains correct text', () => {
  render(<Button label={'Hello button'} />)
  const text = screen.getByText('Hello button')
  expect(text).toBeDefined()
})
