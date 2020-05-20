// EXTERNAL DEPENDENCIES'
import React from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core'
// INTERNAL DEPENDENCIES'
import { Repository } from '../../utils/interfaces'

export default function RepositoryTable(props: Props) {
  return (
    <TableContainer>
      <Typography style={{ margin: '1em 0.5em' }}>
        <strong>Repositories:</strong>
      </Typography>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.repositories.map((repo) => (
            <TableRow key={repo.id}>
              <TableCell>{repo.id}</TableCell>
              <TableCell>{repo.name}</TableCell>
              <TableCell>
                <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                  {repo.html_url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {
  repositories: Repository[]
}
