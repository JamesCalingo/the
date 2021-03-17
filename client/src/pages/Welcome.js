import React from "react"

export default function Welcome() {
  return(
    <div className="mx-5">
      <h1 className='text-center display-3 logo'>Welcome to<br />The Encouragement Network!</h1>
      <h2 className='logo text-center mb-3'>
        A place for people to leave encouraging messages for one another!
      </h2>

    <h3 className="mb-3">Hi! I'm glad you're here.<br />
    I'm sure you may have some questions about this, so let me answer them for you:</h3>

      <h4>What exactly is this?</h4>
      <p>It's exactly as the tagline suggests - a place for people to leave encouraging messages to one another. If you ever need a pick me up, you can (hopefully) find it here.</p>

      <h4>Why did you do this?</h4>
      <p>Short answer: Let's be honest: life isn't easy. We could all use a pick-me-up every now and again, and I'd like this to be a place where people can find those pick-me-ups.<br />
      Long answer: <a href="/story">Read here</a>
      </p>

      <h4>Where do you see this app going?</h4>
      <p>As of me writing this FAQ, the only thing available is the ability to write and read messages. I am currently working on implementing a report system for inappropriate content. After that, I want to implement a system where users can request messages for their specific needs.</p>

      <h4>How do I know who wrote these messages?</h4>
      <p>You don't - and that's intentional.<br />
      I believe that knowing that just one person in the world is rooting for you, even if you have no idea who they are, is incredibly helpful. Besides, I don't want any attention seekers here spamming messages just to make themselves look good.</p>

      <h4>What if my question wasn't answered, or I have something to ask you?</h4>
      <p>You can email me at <a href="mailto:james.calingo.web@gmail.com">james.calingo.web@gmail.com</a>.</p>

      <h3 className="text-center">If you're ready to dive in, <a href="/messages">View the current set of messages here</a>! Or, if you want to submit a message for others yourself, <a href="/create">You can do that here</a>!</h3>
      <a className="github-link" href='https://github.com/JamesCalingo/theEncouragementNetwork'>Github</a>
    </div>
  )
}