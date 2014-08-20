# CascadiaJS 2014
## What was that all about?

---

# CascadiaSJ 2014
- Single-track, community-organized Javascript conference for the Pacific Northwest
- Two big themes:
    - Technology
    - Culture

---

# The Plan:
- Cover some highlights from both themes
- Steal some demos for wow factor

---

# Culture:
 - Community Building
 - Mentorship & Learning
 - Diversity
---
# On Organising Meetups:
- Jason Campbell [@jxson](http://www.twitter.com/jxson), formerly of [http://js.la](http://js.la/)
- Successful meet-ups are continued, with good leadership, as opposed to wildly popular and with famous speakers
- Provide a professional support network, more diverse than just your co-workers
- Don't worry about everything being perfect, just make sure the content is good and the venue sufficient
- Have a clear vision, and don't pander to noobies (but be welcoming)
- Ask for help, and lots of it, co-ordinate with related meet-ups
- Maybe don't use meetup.com, it's a den of opportunists
- But tolerate recruiters if they play nice
- Sponsors are good too, pizza for 80 people gets expensive, but balance their interests with the audience's
- Run regularly, with a halfway consistent schedule
- Produce artifacts: videos and photos, they will promote the content and the meet-up
- Provide extra time and space for socializing, ensure there's an organized after-event

> "If you build it they will come"
>
> -- That ghost in *Field of Dreams*

---
# On Building Baltimore NodeSchool
- Jason Rhodes [@rhodesjason](http://www.twitter.com/rhodesjason), from Baltimore NodeSchool
- An alternative model for building programming community
- The lecture format can be alienating to beginners, and doesn't itself provide for much interaction
- Not everyone has 4 hours to commit after work to attending talks and hanging out at a bar
- NodeSchool is an *open source* tutor style meet up held on weekends
- Mentors and learners are paired up, and complete a project together
- Mentors and learners both seem to *love* it
- We all have different starting points with programming and the industry, and where they are is largely a matter of privilege
- Build inclusive communities that are conscious of that fact
- NodeSchool works well for people of various ages and motivations
- Also, consider providing childcare for your events, it opens them up hugely

---
 
# Barriers to Entry
## When learning to program isn't the hard part
- Ruth Baril [@dark_roast_ruth](http://www.twitter.com/dark_roast_ruth), as of a recently a freelance Front End Developer, on Barriers to Entry
- Programming is great work that pays well, and learning to program is increasingly easy to start
- Successful careers in the past !== seamless entry into life as a programmer
- Communities, be they professional or open source, aren't particularly welcoming to newcomers
- Newcomers have Unrealistic Expectations: knowing terminology, code -> production is complicated, nothing is transparent
- Be more welcoming to newcomers by:
    - See someone alone at a meet up? try talking to them
    - Offer to answer questions and share your stories
    - Don't ridicule popular resources (e.g. w3schools, but don't be afraid to point out why they might be bad)
     
---
 
# Hacking Mentorship.js
- Marlena Compton and Ryan Dy, who worked at Pivotal Labs, on Hacking Mentor.js
- Mentorships have value for the Mentor and Mentee, teachning and learning are both very satisfying
- Beyond learning and technical skill, mentorship is about instilling confidence
- A good mentor is someone who can be asked questions without making judgements about the asker
- There is an "awkward stage" to learning most things, where you know enough to be dangerous, but are not yet an expert
- Side projects, and code review are a great way to get through the awkward stage

---
 
# No More Unicorns
- CJ Silverio [@ceejbot](http://www.twitter.com/ceejbot), from NPM, Inc.
- I can't paraphrase it well, just watch it: [https://www.youtube.com/watch?v=qYjsDilCM0I](https://www.youtube.com/watch?v=qYjsDilCM0I)
- CS Degrees granted to women peaked in the 1980s
- In 1998, 27% of CS degrees were granted to women, but they made up only 17% of Google's engineering staff at the time
- Other large tech companies do no better, none have more than 20% women in their technical staff
- Industry hiring for diversity is regressive, and regressing
- How you act is what your values are: if you only hire white dudes, you didn't try very hard
- Three simple steps you can take to improve diversity through your hiring process:
    1. Say diversity matters to your organization in your job listings
    2. Ensure that women, and other under-represented groups are present on your hiring teams
    3. Actually hire someone who doesn't look like everybody else
 - Let's do better than not being horrible to women
 - Don't tolerate bad behaviour, intervene and educate
 
---
# Contributors wanted: increasing diversity in open source projects
- Kate Hudson [@k88hudson](http://www.twitter.com/k88hudson) from Mozilla presented on promoting diversity ion contributions to open source projects
- Diversity is a source of success
- It comes in uh.. diverse forms:
    - Identity Diversity: e.g. gender, ethnicity, religious and political affiliations
    - Cognitive Diversity: different kinds of thinkers
 - We don't talk much about how differences can be good collectively, for groups
 - Diversity can trump ability: diverse groups often outperform experienced ones, they suffer less groupthink
 - Software architecture matters, simple modules are easier to learn and work on independently
 - Accept contributions beyond code: e.g. user research
 - If you're doing an open source project with i18n, you're going to have trouble doing it without a diverse team

---
# Technology
## Which is to say Javascript...
---
# Optimising for v8 Performance
- David Manning [@davidlymanning](http://www.twitter.com/davidlymanning) from New Relic
- A couple of years ago, taking good advantage of v8 optimizations required writing JS like it was C++
- That's still sort of true
- A Few quick tips:
    - Prefer constructors over `Object.create()` or object literals
    - Initialize your variables, especially around loops
    - Don't modify the structure of your objects much after their creation (again, constructors good), you will miss out on help from hidden classes
    - Keep functions short, functions over ~100 lines will not get optimized and can never be inlined
    - Closures didn't used to be inline-able, but they are now

---
# Your Web App Is not Accessible
- Marcy Sutton [@marcysutton](http://www.twitter.com/marcysutton) from Substantial
- We build some pretty crazy JS web apps these days, and often don't think about accessibility, and do a pretty bad job of it
- But it's easy to do better!
- Four Pillars: Perceivable, Operable, Understandable and Robust
- WCAG 2.0 ([http://www.w3.org/TR/WCAG20/](http://www.w3.org/TR/WCAG20/)) and ARIA ([https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)) to the rescue
- Easiest wins are for keyboard access and screen readers, because the browser already does a lot for us
- Make a better hamburger button: add a `role` attribute to markup, set a `tab index` and an `aria-label="menu"`, and bam, miles ahead
- It's mostly a matter of updating and adding attributes, and being careful bout styling: e.g. if you have a `:hover` style, consider also adding `:focused`
- If you are tearing out and re-adding bits of the DOM, be sure to explicitly manage focus
- Read the docs, and try playing with keyboard only use and screen readers

---
# Magic of Custom Event Emitters
- Nick Niemeir [@nickneimeir](https://twitter.com/nickniemeir) from New Relic
- Eventing patterns are all over the place: The DOM, jQuery, node, Backbone.js…
- Actually pretty simple to implement yourself! Why not re-invent the Wheel? Sometimes you want a different Wheel! 
- Quick demo time!
- You can add more to suit you: async event handling, off/once/throttling, all sorts of stuff

---
# Gifs vs. Web Components
- Glenn Maddern [@glennmaddern](http://twitter.com/glennmaddern)
- Big full-screen gifs are great: [GIF City](http://gif-city.tumblr.com/)
- Wanted to match Gifs to music, but the ing tag doesn't allow much control
- But Gifs are merely a sequence of frames: use gifexploder.js to grab frames, populate DOM with them and toggle visibility with CSS classes
- Wrap it all in a web component, and get a handy new element: `<x-gif>`
- Exposes most of its API through element attributes
- Demo Time: [geelen.github.io/x-gif](http://geelen.github.io/x-gif)
- With Chrome 36, web components have shipped natively to 300 million+ devices, platform.js polyfills elsewhere
- They're out of the "this is coming soon" phase: they're here now
- They play nice with all sorts of frameworks, including React.js, because in the end it's just HTML