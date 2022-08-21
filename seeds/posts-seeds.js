const post = require('../models/Post.js');

const postdata = [
  {
    post: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.',
    author: 'Will Ferrell',
    user_id: 10
  },
  {
    post: "I never feel more alone than when I’m trying to put sunscreen on my back.",
    author: 'Jimmy Kimmel',
    user_id: 8
  },
  {
    post: "When you have a dream, you've got to grab it and never let go.",
    author: 'David Goggins',
    user_id: 1
  },
  {
    post: "The bad news is time flies. The good news is you're the pilot.",
    author: 'Michael Altshuler',
    user_id: 4
  },
  {
    post: 'Common sense is like deodorant. The people who need it most never use it.',
    author: 'Anonymous',
    user_id: 7
  },
  {
    post: 'I’m at a place in my life when errands are starting to count as going out.',
    author: 'Anonymous',
    user_id: 4
  },
  {
    post: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
    user_id: 1
  },
  {
    post: 'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.',
    author: 'Lady Gaga',
    user_id: 1
  },
  {
    post: 'Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician.',
    author: 'Adam Gropman',
    user_id: 9
  },
  {
    post: 'Accept who you are. Unless you’re a serial killer.',
    author: 'Ellen DeGeneres',
    user_id: 5
  },
  {
    post: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
    author: 'Ralph Waldo Emerson',
    user_id: 3
  },
  {
    post: 'MBelief creates the actual fact.',
    author: 'William James',
    user_id: 10
  },
  {
    post: 'Why do they call it rush hour when nothing moves?',
    author: 'Robin Williams',
    user_id: 8
  },
  {
    post: 'If we’re going to pay this much for crab, it better sing and dance and introduce us to the Little Mermaid.',
    author: 'Claire Foster (Tina Fey), Date Night',
    user_id: 3
  },
  {
    post: "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
    author: 'Ava DuVernay',
    user_id: 3
  },
  {
    post:
      'Not having the best situation, but seeing the best in your situation is the key to happiness.',
    author: 'Marie Forleo',
    user_id: 7
  },
  {
    post: 'People say, ‘But Betty, Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board.',
    author: 'Betty White',
    user_id: 6
  },
  {
    post: 'The worst part of online shopping is having to get up and get your credit card from your purse.',
    author: 'Anonymous',
    user_id: 4
  },
  {
    post: 'Weaknesses are just strengths in the wrong environment.',
    author: 'Marianne Cantwell',
    user_id: 6
  },
  {
    post: 'In a gentle way, you can shake the world.',
    author: 'Mahatma Gandhi',
    user_id: 7
  }
];

const seedposts = () => post.bulkCreate(postdata);

module.exports = seedposts;
