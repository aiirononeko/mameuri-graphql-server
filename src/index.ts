import app from './app'

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`GraphQL server ready ad: http://localhost:${PORT}`)
})
