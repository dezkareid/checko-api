module.exports = {
  port: process.env.PORT || 9000,
  database_url: process.env.STRING_CONNECTION || 'mongodb://localhost:27017/checko'
}
