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
  savedPosts: number[]
  savePost: (postId: number) => void
  removePost: (postId: number) => void
}>({} as any)

export const useSavedPosts = () => useContext(SavedPostsContext)

export const SavedPostsContextProvider: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState<number[]>([])

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

  const savePost = useCallback((postId: number) => {
    try {
      const locallySavedPosts = JSON.parse(localStorage.getItem(key) || '[]')
      locallySavedPosts.push(postId)
      localStorage.setItem(key, JSON.stringify(locallySavedPosts))
      setSavedPosts(locallySavedPosts)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const removePost = useCallback((postId: number) => {
    try {
      let locallySavedPosts = JSON.parse(localStorage.getItem(key) || '[]')
      locallySavedPosts = locallySavedPosts.filter(
        (id: number) => id !== postId,
      )
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
