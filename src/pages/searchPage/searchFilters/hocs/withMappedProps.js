import React from 'react'

const withMappedProps = WrappedComponent => props => {
  const mappedProps = {
    ...props,
    onSearchTextChange: event => props.searchTextAction(event.target.value),
    onSearchClick: props.searchEventAction,
    onSearchReset: props.resetAction,
    onGenderChange: event => props.genderAction(event.target.value)
  }

  return <WrappedComponent {...mappedProps} />
}

export default withMappedProps
