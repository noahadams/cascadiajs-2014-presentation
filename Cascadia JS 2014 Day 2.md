# Cascadia JS Day 2
## DNS and Cats
- Decent DNS tutorial

## Accessability
- Marcy Sutton from Substantial
- Are your views accessible? It depends on the framework, the screen reader, the browser, your (shitty?) code?
- Perceivable, Operable Understandable, Robust - WCAG 2.0 Principles
- Interactivity is a challenge, add focussed states to things
- Notify of updates
- Hamburger button example is not understandable or operable, only has a css class, basically placeholder markup
- could add "role" attr, "tabindex" attr for keyboard accessibility, "aria-label" attr
- in angular, add "ng-keypress" to divs to get keyboard accessability, or just use a <button>
- add a :focus selector along with :hover for better visual appearence when using a keyboard
- graceful degradation: we can use js for accessible apps
- display:none hides things from screen readers
- update accessability related attributes as you update your views
- aria wants you to specify roles, states and properties
- there are a ton of roles, some are abstract and not to be used directly, they are element type, landmarks
- start with native html tags
- read the docs
- don't overdo it
- application mode disables a screen reader's virtual cursor
- screen readers are modal to properly route keystrokes, some to the reader, some to the browser
- role="application" disables the reader's own kbd shortcuts
- ARIA live regions allow updates about state without taking focus
- aria-live="assertive" will be read immediately
- explicitly manage focus if you are tearing out and restoring big bits of the DOM (I'm looking at you continuously rerendering backbone apps)


## Constantly Losing Stuff
- lessons learned and used doing continuation local storage in node
- @othiym23
- need variables scoped accross concurrent requests
- liek thread local storage
- with threads these are generally just the thread's stack, in node we use potentially async callbacks, so the stack will often be gone
- node uses continuation passing style
- in express you often jsut bolt stuff ontot he side of the response, but this might not always play nice when your data is cyclical and the response gets traversed bya  naive logger
- process-global namespaces
- cls is kind of like domains
- Uses asyncListener, How does asyncListener work? it monkey patches every async function in node-core
- "stackup" uses asyncListener and produces long stack traces, across async boundaries
- asyncListener is currently being bikeshedded, watch out if youre using it.
- What is CLS? provides storage that looks global, but is actually scoped to an async call chain
- the api looks like node domains, because it's based on them
- what is cls useful for: transaction tracing, passing data through complicated web apps, logging, third party-async code
- Sometimes you can use shims, cls-q, cls-redis, to deal with edge cases around connection pools and pipelines
- Sometimes you have to bind callbacks to namespaces explicitly
- EventEMitters are another special case, you need to explicitly bind emitters (like streams) to namespaces
- Let's get real
- Is it safe: some sginificant cpu overhead, more gc pressure and memory overhead, doesn't change behaviour of your program or node
- every new relic user for node is using it
- small but mostly satisfied community of users
- if you want a whole paradigm, try strongloop zones

## All_night_rave.js
- @flohdot
- there will be strobes
- party jobs: djs, vjs, promoters, burly door person, bartenders, performers, dancers, logistics managers
- #1 interactivity, let people participate
- processing & processing.js
- Leverage the internets for interactivity, socket.io is a nice toolkit for collecting all the datas
- <x-gif> + transparent canvas driven by processing over top = funzies

## Making Javascript Tests fast modern and friendly
- @ryanroehmer
- developers will avoid tests that are difficult to write, run or daunting, but when they are easy fast and friendly things will go well
- wrote a backbone.js testing book
- set a foundation, bolting on tests well into a project can be a pain in the butt
- test frameworks provide: reporting, async support, assertions
- lower barriers to entry: make no assumptions, provide test skeletons and be ready to "get out and push"
- write stuff down, the test stack, conventions, guides, and keep it up to date
- what is "fast" for tests: <30 seconds, maybe < 5
- Why is testing slow? network, timers, waits and UI effects
- Know what to look for when trying to speed up tests: ignore pure js code execution, instead look at network/communication outside of JS and explicit waits in code
- The solution: fake out backend server communication and timers
- sinon is an option for this
- Making tests friendly: the culture should support testing and training for the tests
- find test champions who will advocate for the tests, and provide support people writing tests
- educate bosses: create good stories for the cost of bugs
- Track bugs avoided and regressions
- as a higher up, don't make developers rejustify tests


## Barriers to Entry: Learning to Program is the easy part
- Experiential diversity
- Successful careers in the past !== seamless entry into life as a programmer
- llkats gather-the-singletons
- Unrealistic Expectations: knowing terminology, code -> production is complicated, nothing is transparent
- new devs are self consciousand easily embarrassed, are less likely to ask questions and are thus more likely to make mistakes
- offer to answer questions, share stories, be careful ridiculing popular resources, model good behaviour

# Hashing
- @classam
- This is a pretty good introductory talk on hashes, and data structures that use them, both cryptographic and not
- don't use md5

# Distillation.js
- distillation comes in stages, heads (methanol, bad), hearts (ethanol, good), tails (falvour, you may or may not want this)
- traditional distillation is a synchronous process
- Heising 330: continuous distillation
- constantly pump in beer/wine, and maintian a precisely controlled temperature gradient up a column
- they built a continuous still using open source and "maker technology" and a bit of naivety
- must run continuously and is potentially very dangerous
- control system is a "pcduino"
- connects to termperature and barometric sensors and pump and power controllers
- they communicate through a fuse filesystem fromt he devices to a node cor-ordination process
- why node? npm just works, it runs anywhere, it's web forward
- node.js and fuse is not fast enough for some embedded protocols
- can't just press the restart buttonw hen there si a problem
- shit breaks, and when it doesn't it's really bad
- solved witha  mixture of native node modules and external ICs
- lots of code to resolve things without restarts
- watchdog programs and lots fo safety checks
- girhub.com/heising/node330
- makes it easy to interact with sensors and controllers, simple run loop for long running processes, built in common things like unit conversion, pid loops
- dweet.io
- freeboard
- node.js is surprisingly good for industrial processes
- 

# Hacking Mentor.js
- Marlena Compton and Ryan Dy
- they worked at pivotal labs on pivotal tracker
- What is mentoring?
- Mentoring and Pairing
- Why take the time to help someone?
- beyond learning and technical skill, also about confidence
- How do I recognize a good mentor? someone who lets me ask my questions without judgement
- Lessons from Pixar's John Lasseter
- Learning in the awkward phase, Side-projects are a great help here
- reddism
- Relax Ipsum
- Learning to build software in the real world
- Mentoring teaches lessons deeper than what can be understood ina  tutorial
- want to teach people to be good software engineers, a commitment to good code
- failure has a great part to play in building great software
- Learning that you belong
- Learning inclusivity: coworkers, professionals, n00bs, makers
- What kind of javascript community should we build?

## Databases and IoT
- @brycebaril
- Put a bird on it!
- Put databases everywhere: intelligent sync, push/pull replication, aggregating relays, peer networks, and more!
- With local databases, IoT becomes a private cloud
- Intr-*a*-net of things
- Let's make a database that crosses space and time: leveldb, timestreamdb, beaglebone black, private network
- do for databases what npm did for package management
- the unix philosophy applied to databases
- timestreamdb, streaming time series database on top of level db
- What's in the box?
- beaglebone!
- leveldb lets us treat the data the same way in the browser and in node

## Meetups
- @rhodesjason       
- building baltimore nodeschool
- Lecture format leaves things to be desired for meetups, there's always the trip to the bar afterwards, but that's a much bigger time commitment
- tutor style meetup on weekends
- ietf86 shirt is awesome
- mentors and learners both love it!
- pair programming model for the event
- we all have different bottoms, we all started somewhere different
- havinga  white soundign first name si the equivalent of having 8 years of professional experience?
- where your bottom is is a matter of privilege
- edgar allan bro!
- rfc 822 and rfc 2616
- listen more, think more and argue less
- think about providing childcare for your events
- 

## 
- @ceejbot
- the pronoun debate was very very sad
- why don't you see women on node-core?
- cs degrees granted to women peaked in the early 80s
- google has 17% female engineering workforce, 27% of cs degrees went to women at the time
- our industry is regressive, and regressing
- CJ doesn't want to be a unicorn
- CJ was a late invite to nodesummit 2014, purely as a result of critique
- suggested that node core should recruit women, there were crickets
- stubborn: screw you, i'm gonna do this
- oblivious: too busy coding to notice systemic problems
- try determiend and empathetic
- how you act is what your values are
- if you hire a bunch of white dudes, you didn't try
- step one: say diversity matters in your job listings
- step two: enlist your team's help, have women on the hiring team
- step three: hire somebody who doesn't look like everybody else
- your hiring process sucks
- terrible cultural secret: men overstate, women understate
- another hot tip, women are undervalued salarywise
- let's do better than notbeing horrible to women
- talking about diversity in hiring is threatening to those in the status quo group
- the games industry is even worse than this crowd
- the standard you walk past is the standard you accept
- stop bad behaviour when you see it