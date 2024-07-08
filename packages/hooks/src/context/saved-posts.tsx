'use client'

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  FunctionComponent,
  PropsWithChildren,
} from 'react'

const key = 'saved-posts'
const SavedPostsContext = createContext<{
  savedPosts: string[]
  savePost: (postId: string) => void
  removePost: (postId: string) => void
}>({} as any)

export const useSavedPosts = () => useContext(SavedPostsContext)

export const SavedPostsContextProvider: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState<string[]>([])

  useEffect(() => {
    try {
      const locallySavedPosts = localStorage.getItem(key)
      if (locallySavedPosts) {
        setSavedPosts(JSON.parse(locallySavedPosts))
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  const savePost = useCallback((postId: string) => {
    try {
      const locallySavedPosts = JSON.parse(
        localStorage.getItem(key) || '[]',
      ) as string[]
      locallySavedPosts.push(postId)
      localStorage.setItem(key, JSON.stringify(locallySavedPosts))
      setSavedPosts(locallySavedPosts)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const removePost = useCallback((postId: string) => {
    try {
      let locallySavedPosts = JSON.parse(
        localStorage.getItem(key) || '[]',
      ) as string[]
      locallySavedPosts = locallySavedPosts.filter((id) => id !== postId)
      localStorage.setItem(key, JSON.stringify(locallySavedPosts))
      setSavedPosts(locallySavedPosts)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <SavedPostsContext.Provider
      value={{
        savedPosts,
        savePost,
        removePost,
      }}
    >
      {children}
    </SavedPostsContext.Provider>
  )
}
