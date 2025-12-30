'use client'

import { FormEvent, useState } from 'react'

interface FormData {
  email: string
  name?: string
  message?: string
}

interface UseFormHandlerReturn {
  data: FormData
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
  resetForm: () => void
}

export const useFormHandler = (): UseFormHandlerReturn => {
  const [data, setData] = useState<FormData>({ email: '', name: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('[v0] Form submitted:', data)
      setIsSuccess(true)
      setData({ email: '', name: '', message: '' })

      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setData({ email: '', name: '', message: '' })
    setError(null)
  }

  return {
    data,
    isLoading,
    isSuccess,
    error,
    handleSubmit,
    resetForm,
  }
}
