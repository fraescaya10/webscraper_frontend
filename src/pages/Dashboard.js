import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Loader } from 'semantic-ui-react';
import ScrapeSection from '../components/ScrapeSection';
import MembersTableSection from '../components/MembersTableSection';
import axios from 'axios';
import { apiUrl } from '../config/index';

export class Dashboard extends Component {
  state = {
    isLoading: false,
    membersList: []
  }
  static propTypes = {
    membersList: PropTypes.array
  }

  componentDidMount() {
    this.fetchMembersData();
  }

  fetchMembersData = () => {
    this.setState({ isLoading: true });
    axios.get(`${apiUrl}/api/members`)
      .then(res => {
        const membersList = res.data;
        this.setState({ membersList, isLoading: false });
      })
  }

  scrapeMembers = () => {
    this.setState({ isLoading: true });
    axios.get(`${apiUrl}/api/scrape`)
      .then(res => {
        const membersList = res.data;
        this.setState({ membersList, isLoading: false });
      })
  }

  render() {
    const { isLoading, membersList } = this.state;
    return (
      <Container style={{ marginTop: '7em' }} >
        {isLoading ? <Loader active style={{ top: '50%' }} size='massive' content='Loading data...' /> :
          membersList.length > 0 ?
            <MembersTableSection membersData={membersList} /> :
            <ScrapeSection onClickStartScrape={this.scrapeMembers} />}
      </Container>
    )
  }
}

export default Dashboard;
