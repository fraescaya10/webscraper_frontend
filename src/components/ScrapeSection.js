import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

function ScrapeSection({ onClickStartScrape }) {
  return (
    <Grid container style={{ padding: '5em 0em' }}>
      <Grid.Row centered columns={4}>
        <Grid.Column>
          To Start scraping click the button bellow
      </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={4}>
        <Button primary onClick={onClickStartScrape}>Start Scraping</Button>
      </Grid.Row>
    </Grid>
  )
}

export default ScrapeSection
