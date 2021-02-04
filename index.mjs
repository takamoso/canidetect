import webpack from 'webpack'
import config from './webpack.config.mjs'

webpack({...config}).run((err, stats) => {
  if (err) {
    return
  }

  console.log('Compiled!')
})