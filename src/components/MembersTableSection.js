import React from 'react';
import PropTypes from 'prop-types';
import { Table, Header, Icon, Segment, Select } from 'semantic-ui-react';
import Paginator from './Paginator';

function MembersTableSection({ membersData }) {

  const [originalList, setOriginalList] = React.useState(membersData);
  const [membersList, setMembersList] = React.useState([]);
  const [pagesList, setPagesList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [itemsPerPage] = React.useState(10);
  const headerColumns = ['Name', 'Role', 'Division', 'Location', 'Department'];
  const sortByOptions = [{ text: 'Location', value: 'city' }, { text: 'Division', value: 'division' }]

  React.useEffect(() => {
    const idxLastItem = currentPage * itemsPerPage;
    const idxFirstItem = idxLastItem - itemsPerPage;
    let newMembersList = originalList.slice(idxFirstItem, idxLastItem);
    setMembersList(newMembersList);

    if (totalPages === 0) {
      const totalPages = Math.ceil(originalList.length / itemsPerPage);
      let pagesList = [];
      for (let i = 0; i < totalPages; i++) {
        pagesList.push(i + 1);
      }
      setTotalPages(totalPages);
      setPagesList(pagesList)
    }
  }, [originalList, currentPage, setMembersList, itemsPerPage, totalPages, setTotalPages])

  const handleSortTable = (e, { value }) => {
    const currentList = [...originalList];
    currentList.sort((elem1, elem2) => {
      if (elem1[value] > elem2[value]) {
        return 1;
      }
      if (elem1[value] < elem2[value]) {
        return -1;
      }
      return 0;
    });
    setOriginalList(currentList);
    setCurrentPage(currentPage);
  };

  return (
    <Segment placeholder>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Member List</Header.Content>
      </Header>
      <Segment>
        Sort by:&nbsp;
        <Select
          options={sortByOptions}
          placeholder='Choose an option'
          onChange={handleSortTable} />
      </Segment>
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
          {membersList.map((bodyColumn, index) => (
            <Table.Row key={index}>
              <Table.Cell>{bodyColumn.name}</Table.Cell>
              <Table.Cell>{bodyColumn.role}</Table.Cell>
              <Table.Cell>{bodyColumn.division}</Table.Cell>
              <Table.Cell>{bodyColumn.city}</Table.Cell>
              <Table.Cell>{bodyColumn.department}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Paginator
                pagesList={pagesList}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage} />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>);
}

MembersTableSection.propTypes = {
  membersData: PropTypes.array.isRequired
};

export default MembersTableSection;
