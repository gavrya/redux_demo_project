import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

import GenderOptions from '../genderOptions'
import PropTypes from 'prop-types'

let counter = 0

const SearchFilters = (props) => (
  <Grid container spacing={2} alignItems="center" style={ { border: '1px solid grey', borderRadius: '10px' } }>
    <Grid item xs={12}>
      SearchFilters Module (rendered: {counter++})
    </Grid>

    <Grid item xs={1} />
    <Grid item xs={9}>
      <FormControl fullWidth variant="outlined">
        <TextField
          label="Search field"
          type="search"
          variant="outlined"
          value={props.searchText}
          onChange={props.onSearchTextChange}
        />
      </FormControl>
    </Grid>
    <Grid item xs={2}>
      <Button variant="contained" color="primary" onClick={props.onSearchClick}>
        Search
      </Button>
    </Grid>

    <Grid item xs={12}>
      <GenderOptions value={props.gender} handleChange={props.onGenderChange} />
    </Grid>

    <Grid item xs={12}>
      <Button variant="contained" onClick={props.onSearchReset}>
          Reset Filters
      </Button>
    </Grid>
  </Grid>
)

SearchFilters.propTypes = {
  // params
  searchText: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  // handlers
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onSearchReset: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired
}

export default SearchFilters
