var port = process.env.PORT || 8000


app.use(knexLogger(knex));


app.listen(PORT, () => {
  console.log("swifswap app listening on port " + PORT);
});
