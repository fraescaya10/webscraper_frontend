import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment, Header, Icon } from 'semantic-ui-react';

function ScrapeSection({ onClickStartScrape }) {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='id card outline' />
        To Start scraping click the button bellow.
    </Header>
      <Button primary onClick={onClickStartScrape}>Start Scraping</Button>
    </Segment>
  );
}

ScrapeSection.propTypes = {
  onClickStartScrape: PropTypes.func.isRequired
};

export default ScrapeSection;
