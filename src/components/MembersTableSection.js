import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

function MembersTableSection({ membersData }) {

  const headerColumns = ['Name', 'Role', 'Division', 'Location', 'Department'];

  return (
    <>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Member List</Header.Content>
      </Header>
      <Table padded>
        <Table.Header>
          <Table.Row>
            {
              headerColumns.map((headerColumn, index) => (
                <Table.HeaderCell key={index}>{headerColumn}</Table.HeaderCell>
              ))
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {membersData.map((bodyColumn, index) => (
            <Table.Row key={index}>
              <Table.Cell>{bodyColumn.name}</Table.Cell>
              <Table.Cell>{bodyColumn.role}</Table.Cell>
              <Table.Cell>{bodyColumn.division}</Table.Cell>
              <Table.Cell>{bodyColumn.city}</Table.Cell>
              <Table.Cell>{bodyColumn.department}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>)
}

export default MembersTableSection
