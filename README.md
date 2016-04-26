# My Digital Resume
This is my digital resume. It was built using the following:
 - [Meteor v1.3.x](https://www.meteor.com)
 - [Bootstrap 3](http://getbootstrap.com)
 - [Less.js](http://lesscss.org)
 - [skrollr](https://github.com/Prinzhorn/skrollr)
 - [Animate.css](https://daneden.github.io/animate.css/)
 - [typed.js](https://github.com/mattboldt/typed.js/)
 - [cleverbot.io](https://cleverbot.io)

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
  "public": {
    "site_title": "A Man, a Cookbook, and a Computer"
  },
  "private": {
    "cleverbot_userid": your_user_id,
    "cleverbot_api_key": your_api_key
  } 
}
```


Work in progress. Still needs a contact form.
