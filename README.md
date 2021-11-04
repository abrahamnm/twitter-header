# Twitter Header GitHub Action

Update your twitter header from a github action.

## Usage

You can consume the action by referencing the v1 branch and using your Twitter App credentials. To connect to the Twitter API you'll need to set up an app (or use an existing one) in the (Twitter Developer Portal)[https://developer.twitter.com/en/portal/], configure the permissions to "Read and write and Direct message" and generate an "API Key and Secret" and "Access Token and Secret" from the "Keys and tokens" section.

Set up those credentials as secrets in your repository and add them to the workflow like in the example below:

```yaml
name: Update my twitter Profile Header
on:
  workflow_dispatch:

jobs:
  twitter-header-update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/javascript-action@v1.0.0
        with:
          header_path: header_file.png
          api_key: ${{ secrets.API_KEY }}
          api_secret: ${{ secrets.API_SECRET }}
          access_token: ${{ secrets.ACCESS_TOKEN }}
          access_token_secret: ${{ secrets.ACCESS_TOKEN_SECRET }}
```

See the [actions tab](https://github.com/abrahamnm/twitter-header/actions) for runs of this action! :rocket:
