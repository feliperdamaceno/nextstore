import { useState, useEffect } from 'react'

type ReturnType<T> = {
  storage: T
  updateStorage: React.Dispatch<React.SetStateAction<T>>
}

export function useStorage<T>(key: string, defaultValue: T): ReturnType<T> {
  const [storage, updateStorage] = useState<T>(getInitialData)

  function getInitialData(): T {
    const response = globalThis.window?.localStorage.getItem(key)
    if (response) return JSON.parse(response)
    if (typeof defaultValue === 'function') return defaultValue()
    return defaultValue
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage))
  }, [key, storage])

  return { storage, updateStorage }
}
