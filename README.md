# 4.11.5 -> 4.11.6 broken

hooks don't execute on first render on 4.11.6, they do on 4.11.5

hooks do work when navigating

`good/` uses 4.11.5

`bad/` uses 4.11.6

## test

run `yarn install` and `yarn start` on both

`good/` runs on `localhost:3000`

`bad/` runs on `localhost:3001`
