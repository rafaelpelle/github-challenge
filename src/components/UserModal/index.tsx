// EXTERNAL DEPENDENCIES'
import React from 'react'
import { format } from 'date-fns'
import { Button, Dialog, DialogActions, DialogContent, Avatar } from '@material-ui/core'
// INTERNAL DEPENDENCIES'
import { User, Repository } from '../../utils/interfaces'
import RepositoryTable from '../RepositoryTable'
import FormField from './FormField'

export default function UserModal(props: Props) {
  const { selectedUser, repositories, handleClose } = props

  return (
    <Dialog open={!!selectedUser} onClose={handleClose} maxWidth='md' fullWidth>
      {!!selectedUser && (
        <DialogContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              style={{ width: '150px', height: '150px', marginRight: '2em' }}
              src={selectedUser.avatar_url}
            />
            <div>
              <FormField label='ID:' value={selectedUser.id} />
              <FormField label='Login:' value={selectedUser.login} />
              <FormField label='Profile URL:' value={selectedUser.html_url} isLink />
              <FormField
                label='Creation Date:'
                value={format(new Date(selectedUser.created_at), 'dd/MM/yyyy')}
              />
            </div>
          </div>
          <RepositoryTable repositories={repositories} />
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {
  selectedUser: User | null
  repositories: Repository[]
  handleClose: () => void
}
