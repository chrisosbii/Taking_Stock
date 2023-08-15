# Taking_Stock
Group Project Three where we worked on a react project using stock data


Pages for the app and then the types of queries/mutations
  Home
  Loggin
    VERIFY_USER (verify the user is logged in using webtoken and begin their session)
  Register
    ADD_USER (add user to database and log them in)
  ProfilePage
    USER_INFORMATION (get user profile info and print onto page)
  SearchStocks
    STOCK_DATA (get stock data and print onto page)
    FAVORITE_A_STOCK (put stock_id into users favorite array)
  StockDetail
    STOCK_DETAILS
  *Header/Footer
    WEBSOCKET (display websocket in footer)
    USERNAME (place username in header if user is logged in)



example symbol fetch from twelve data
  AAPL: {
    symbol: 'AAPL',
    name: 'Apple Inc',
    exchange: 'NASDAQ',
    mic_code: 'XNGS',
    currency: 'USD',
    datetime: '2023-08-14',
    timestamp: 1692043140,
    open: '177.97000',
    high: '179.69000',
    low: '177.30499',
    close: '179.50999',
    volume: '35719646',
    previous_close: '177.78999',
    change: '1.72000',
    percent_change: '0.96743',
    average_volume: '63077155',
    is_market_open: false,
    fifty_two_week: {
      low: '124.17000',
      high: '198.23000',
      low_change: '55.34000',
      high_change: '-18.72000',
      low_change_percent: '44.56793',
      high_change_percent: '-9.44358',
      range: '124.169998 - 198.229996'
    }
  },