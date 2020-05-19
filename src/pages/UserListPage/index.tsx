// EXTERNAL DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { List } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
// INTERNAL DEPENDENCIES
import { scrollToTheTop } from '../../utils/theme'
import { UserPreview } from '../../utils/interfaces'
import UserService from '../../services/UserService'
import UserListItem from '../../components/UserListItem'
import FullPageLoading from '../../components/FullPageLoading'

export default function UserListPage(props: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [users, setUsers] = useState<UserPreview[]>([])

  useEffect(() => {
    getUserPage(page)
    scrollToTheTop()
  }, [page])

  const getUserPage = async (currentPage: number) => {
    setIsLoading(true)
    try {
      const { data } = await UserService.getAllUsers(currentPage)
      setUsers(data)
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div>
      {isLoading ? (
        <FullPageLoading />
      ) : (
        <List>
          {users.map((user, index) => (
            <UserListItem user={user} key={index} />
          ))}
        </List>
      )}
      <Pagination
        style={{ width: 'fit-content', margin: '2em auto' }}
        count={100}
        page={page}
        onChange={handleChangePagination}
        color='primary'
      />
    </div>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {}
