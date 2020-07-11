import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import SearchFiltersModule from '../../../searchFilters'
import SearchResultsModule from '../../../searchResults'

const SearchPage = () => (
  <>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography component="div" style={{ height: '100vh' }} >
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchFiltersModule />
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <SearchResultsModule />
          </Grid>
        </Grid>
      </Typography>
    </Container>
  </>
)

export default SearchPage
