# NODE-HEROKU

This is a simple Node application to test Heroku.

## Deploy the code on Heroku

git push heroku master

## Ensure that at least one instance of the app is running

heroku ps:scale web=1

## Open the website

heroku open

## View logs

heroku logs --tail