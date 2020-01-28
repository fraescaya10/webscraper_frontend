import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

function Paginator({ pagesList, currentPage, totalPages, setCurrentPage }) {
  return (
    <Menu floated='right' pagination>
      <Menu.Item
        as='a'
        icon
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}>
        <Icon name='chevron left' />
      </Menu.Item>
      {
        pagesList.map((number, index) => (
          <Menu.Item
            as='a'
            key={index}
            onClick={() => setCurrentPage(number)}
            active={currentPage === number}>
            {number}
          </Menu.Item>)
        )
      }
      <Menu.Item
        as='a'
        icon
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}>
        <Icon name='chevron right' />
      </Menu.Item>
    </Menu>
  );
}

Paginator.propTypes = {
  pagesList: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Paginator;
