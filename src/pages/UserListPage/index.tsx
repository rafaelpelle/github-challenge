// EXTERNAL DEPENDENCIES
import React, { Fragment, useState, useEffect } from 'react'
import { List, Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
// INTERNAL DEPENDENCIES
import './style.css'
import { scrollToTheTop } from '../../utils/theme'
import { UserPreview, User, Repository } from '../../utils/interfaces'
import UserService from '../../services/UserService'
import UserListItem from '../../components/UserListItem'
import UserModal from '../../components/UserModal'
import FullPageLoading from '../../components/FullPageLoading'

export default function UserListPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [users, setUsers] = useState<UserPreview[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])

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

  const handleClick = async (user: UserPreview) => {
    setIsLoading(true)
    try {
      const [userResponse, repoResponse] = await Promise.all([
        UserService.getSingleUser(user.login),
        UserService.getUserRepositories(user.login),
      ])
      setSelectedUser(userResponse.data)
      setRepositories(repoResponse.data)
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleClose = () => {
    setSelectedUser(null)
    setRepositories([])
  }

  return isLoading ? (
    <FullPageLoading />
  ) : (
    <Fragment>
      <Paper className='list-container'>
        <List disablePadding>
          {users.map((user, index) => (
            <UserListItem user={user} key={index} handleClick={handleClick} />
          ))}
        </List>
      </Paper>
      <Pagination
        style={{ width: 'fit-content', margin: '2em auto' }}
        count={100}
        page={page}
        onChange={handleChangePagination}
        color='primary'
      />
      <UserModal selectedUser={selectedUser} repositories={repositories} handleClose={handleClose} />
    </Fragment>
  )
}
