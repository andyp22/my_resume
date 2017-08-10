# My Digital Resume
This is my digital resume. It was built using the following:

 - [Meteor v1.4.x](https://www.meteor.com) -- *currently at __v1.4.2.6__*
 - Blaze and Iron Router
 - [Bootstrap 3](http://getbootstrap.com)
 - [Less.js](http://lesscss.org)
 - [rellax.js](https://github.com/dixonandmoe/rellax)
 - [Animate.css](https://daneden.github.io/animate.css/)
 - [typed.js](https://github.com/mattboldt/typed.js/)
 - [cleverbot.io](https://cleverbot.io)

Live build: [http://www.mancookbookcomputer.com](http://www.mancookbookcomputer.com)

This is no longer the active version. Please see the [master branch](https://github.com/andyp22/my_resume/tree/master) for the most recent version of source code.

## Installation
To install locally:
```bash
git clone https://https:github.com/andyp22/my_resume
cd my_resume
npm install
meteor --settings=settings.json
```

## Cleverbot
You will need to add a [cleverbot.io userId and API key](https://cleverbot.io/keys) to the settings.json for all functionality to work properly.
```json
{
  ...
  "private": {
    "cleverbot_userid": "your_user_id",
    "cleverbot_api_key": "your_api_key"
  } 
  ...
}
```

## Email
For email to work you will need to configure the settings.json with your own SMTP settings:
```json
{
  ...
  "private": {
    ...
    "email": {
      "smtp_user": "your_smtp_user",
      "smtp_password": "your_smtp_password",
      "smtp_host": "your_smtp_host",
      "smtp_port": "your_smtp_port"
    }
  }
  ...
}
```

## Logging
For [Loggly](http://loggly.com) to log to your account you will need to configure the settings.json with your own settings:
 - **env:** A string representing the logging environment (live, dev, test, etc). Set to 'dev' as the default.
 - **instance:** A unique number representing the application's instance id. Set to 1 as the default.
 - **subdomain:** The Loggly subdomain in which to log messages. *Optional for dev environments.*
 - **loggly:** Object containing loggly specific values. *Optional for dev environments.*
   - **token:** Your Loggly token
   - **tags:** An array of strings to tag your log messages with
 - **isDev:** Boolean value representing whether the app is in a development environment; true *(default)* disables logging to Loggly and instead logs to the console
 - **isTrace:** Boolean value indicating whether to log to Loggly as 'debug' (true - *default*) or 'info' (false)
 
```json
{
  ...
  "private": {
    ...
    "loggly": {
      "env": "string",
      "instance": integer,
      "subdomain": "string",
      "loggly" : {
        "token": "string",
        "tags": [
          "your",
          "loggly",
          "tags"
        ]
      },
      "isDev": boolean,
      "isTrace": boolean
    }
  }
  ...
}
```

## Account Services
Depending on which accounts packages, if any, you choose to use, you may want to configure 
those services before hand. To do that, add a "services" object to your private settings. 
Each service you add should have the service name as the object key with and an object containing
the following properties as the value:
 - **clientId:** The clientId for the service you are configuring.
 - **secret:** The secret key for the service you are configuring.

```json
{
  ...
  "private": {
    ...
    "services": {
      "github": {
        "clientId": "your_clientId",
        "secret": "your_secret"
      },
      "meteor-developer": {
        "clientId": "your_clientId",
        "secret": "your_secret"
      }
      ...
    }
  }
  ...
}
```

***
### Work in progress.
Plans for the future, not in any particular order:
 - Switch to FlowRouter
 - Switch to React
 - Add more unit tests
 - Add some integration tests
 - Make it work on mobile

