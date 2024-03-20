import { useCallback, useEffect, useState } from 'react'
import { UserDto, getUsers } from './api/users'
import './App.css'

function App() {
  const [users, setUsers] = useState<UserDto[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleMoreClick = useCallback(() => {
    (async () => {
      setIsLoadingMore(true)
      const fetchedUsers = await getUsers({ size: 3 })

      setUsers((users) => ([...users, ...fetchedUsers]))
      setIsLoadingMore(false)
    })()
  }, [setIsLoadingMore, setUsers])

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const fetchedUsers = await getUsers({ size: 3 })

      setUsers(fetchedUsers)
      setIsLoading(false)
    })()
  }, [])

  const isMoreButtonDisabled = isLoading || isLoadingMore;

  return (
    <>
      <div className='list-container'>
        {isLoading && <p>Loading users...</p> }

        {!isLoading && users.map((user) => {
          const {id, email, firstName, lastName } = user

          return (
            <div key={id} className='user'>
              <span className='user__name'>{firstName} {lastName}</span>
              <span className='user__email'>{email}</span>
            </div>
          )
        })}
      </div>

      <div className="load-more">
        <button className='load-more__button' disabled={isMoreButtonDisabled} onClick={handleMoreClick}>
          {isMoreButtonDisabled ? '...' : 'More'}
        </button>
      </div>
    </>
  )
}

export default App
