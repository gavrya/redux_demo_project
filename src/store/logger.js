const logWarn = (message) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(message)
  }
}

const logDir = (data) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.dir(data)
  }
}

export { logWarn, logDir }
