import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const ItemCard = (props) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={props.item.image}
        title={props.item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
}

export default ItemCard
