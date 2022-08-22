const post = require("../models/Post.js");

const postdata = [
  {
    post_title: "How can I get better at writing code?",
    post_body: "I've been at this for a while but I'm not seeing results...",
    user_id: 10,
  },
  {
    post_title: "Time flies when you're using Javascript",
    post_body: "I never feel more satisfied then after I finish a complicated function.",
    user_id: 8,
  },
  {
    post_title: "Anything can be achieved if you set your mind to it!",
    post_body: "When you have a dream, you've got to grab it and never let go.",
    user_id: 1,
  },
  {
    post_title: "Is it just me or is the new Handlebars NPM package awesome?",
    post_body: "Loving the new features, makes it so easy to use!",
    user_id: 4,
  },
  {
    post_title: "HTML & CSS are king!",
    post_body: "These are the starting 'languages for every developer, Amirite?'",
    user_id: 7,
  },
  {
    post_title: "How do I negotiate for a higher salary as a Developer?",
    post_body: "I’m at a place in my life where I feel I deserve more money.",
    user_id: 4,
  },
  {
    post_title: "Don't give up mid project",
    post_body: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    user_id: 1,
  },
  {
    post_title: "How to continue growth as a develop.",
    post_body: "Always keep up to date with the newest technologies and updates on online forums and blogs like these.",
    user_id: 1,
  },
  {
    post_title: "How to land a tech job...",
    post_body: "Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a Software Engineer.",
    user_id: 9,
  },
  {
    post_title: "I'm trying but hitting roadblocks...",
    post_body: "Accept who you are. You can only put in so much effort before starting to hit the fence.",
    user_id: 5,
  },
  {
    post_title: "Bootstrap is the easiest library to take advantage of IMHO",
    post_body: "With all the features Bootstrap offers, it's hard to not take master it quickly.",
    user_id: 3,
  }
];

const seedposts = () => post.bulkCreate(postdata);

module.exports = seedposts;
