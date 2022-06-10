const app =  require('./app')
const PORT = process.env.PORT || 2222

app.listen(PORT, () => console.log('Now listening on port ' + PORT))