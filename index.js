const core = require('@actions/core')
const process = require('process')
const { TwitterClient } = require('twitter-api-client')
const fse = require('fs-extra')

const {
  INPUT_HEADER_PATH,
} = process.env

const twitterClient = new TwitterClient({
  apiKey: process.env.INPUT_API_KEY,
  apiSecret: process.env.INPUT_API_SECRET,
  accessToken: process.env.INPUT_ACCESS_TOKEN,
  accessTokenSecret: process.env.INPUT_ACCESS_TOKEN_SECRET
})

async function run () {
  try {
    const base64 = await fse.readFile(INPUT_HEADER_PATH, { encoding: 'base64' })
    await twitterClient.accountsAndUsers.accountUpdateProfileBanner({
      banner: base64
    })
    core.info('Profile header updated successfully')
  } catch (err) {
    if (err.data && err.statusCode) {
      const message = JSON.parse(err.data).error
      core.setFailed(`Twitter API error: ${message}`)
    } else {
      core.setFailed(err.message)
    }
  }
}

run()
