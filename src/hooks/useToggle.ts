import { useState } from 'react'

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue)

  function toggleValue(value?: boolean): void {
    setValue((previous) => (typeof value === 'boolean' ? value : !previous))
  }

  return { value, toggleValue }
}
