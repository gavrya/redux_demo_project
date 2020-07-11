import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import ItemCard from '../itemCard'

let counter = 0

const SearchResults = (props) => (
  <Grid container spacing={2} alignItems="center" justify="center" style={ { border: '1px solid grey', borderRadius: '10px' } }>
    <Grid item xs={12}>
        SearchResults Module (rendered: {counter++})
    </Grid>

    {props.loading && <CircularProgress />}

    {!props.loading && (
      props.items.map(item => (
        <Grid key={item.id} item xs={12}>
          <ItemCard item={item} />
        </Grid>
      ))
    )}
  </Grid>
)

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }
  )).isRequired
}

export default SearchResults
