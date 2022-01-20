import { PropsWithChildren, createContext, useReducer } from 'react'

const initialState = { emoji: '' }

type AppState = {
  emoji?: string
  updatedToast?: (message: string) => void
}
type Action = { type: 'ADD_TOAST'; payload: string }

function toastReducer(_: AppState, action: Action) {
  switch (action.type) {
    case 'ADD_TOAST':
      return { emoji: action.payload }
    default:
      throw new Error()
  }
}

export const ToastContext = createContext<AppState>(initialState)

export const ToastProvider = (props: PropsWithChildren<AppState>) => {
  const [state, dispatch] = useReducer(toastReducer, initialState)

  const updatedToast = (message: string) =>
    dispatch({ type: 'ADD_TOAST', payload: message })

  return (
    <ToastContext.Provider
      value={{
        emoji: state.emoji,
        updatedToast,
      }}
      {...props}
    />
  )
}
