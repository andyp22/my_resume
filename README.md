# My Digital Resume
This is my digital resume. It was built using the following:
 - [Meteor v1.3.x](https://www.meteor.com)
 - [Bootstrap 3](http://getbootstrap.com)
 - [Less.js](http://lesscss.org)
 - [skrollr](https://github.com/Prinzhorn/skrollr)
 - [Animate.css](https://daneden.github.io/animate.css/)
 - [typed.js](https://github.com/mattboldt/typed.js/)
 - [cleverbot.io](https://cleverbot.io)

Live build: [http://www.mancookbookcomputer.com](http://www.mancookbookcomputer.com)

To install locally:
```bash
git clone https://https:github.com/andyp22/my_resume
cd my_resume
npm install
meteor --settings=settings.json
```

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

Work in progress.
