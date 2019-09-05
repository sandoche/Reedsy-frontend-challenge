# Reedsy-frontend-challenge
A repository containing my answers to the frontend engineer challenge by Reedsy

## Instructions
Find the [instructions here](./docs/INSTRUCTIONS.md)

## Answers

### 1. About you
I love to make side-projects, most of them are monetized through purchases or sometime ads. I invite you to check out my website (that I need to redesign): [https://www.sandoche.com](https://www.sandoche.com) or my [Product Hunt page](https://www.producthunt.com/@sandochee).

I made 3 projects with VueJS ([Color Interactor - my first (badly written) project with VueJS -](https://colors.learn.uno/), [GitNews](https://git.news), Learners), 1 with Nuxt ([Undesign](https://undesign.learn.uno)) and 3 mobile apps with NativeScript VueJS ([GitNews](https://gitnews.learn.uno), [TextBlast](https://textblast.learn.uno), [WhatsBlast](https://whatsblast.learn.uno)).

As you can see one of them is not released, actually was my second VueJS project, it was a project intended to be a B2B solution for sharing skills social network inside for companies. The project was pretty big and complex, and even though we may never released it, it's the one that taught me how to use VueJS! 

My favourites projects are Undesign (very simple, but very useful), GitNews (web and mobile) which that I use everyday to discover new repos, and TextBlast which brings me the most money from all these projects! I particularly enjoyed building GitNews since I could re-use the core code of the mobile app to build the web version!

### 2. General

#### 2.1. What kind of front end projects do you enjoy working on? Why?
I enjoy to work on front end projects when:
- I like the technology / framework used: I started frontend with AngularJS, I loved it, then I tried React I didn't like it but I liked the component based architecture, and then went back for the good old VanillaJS whenever it was possible before discovering VueJS. I fell in love with VueJS. I enjoy projects when I enjoy the tech otherwise I suffer :)
- There is a bit of novelty / technical challenge: I want to do things that I know how to do but also new thing to feel that I progress, I need to learn new way of doing, new tools, and have a bit of difficulty to feel like my brain is functionning!
- The project is answering a real need or if it already have users. Otherwise it feels useless. When I was in IBM we spent 9 month on a project that they never released (and that was pretty useless), just another news agregator. It was very boring, luckily I was mainly working on another AngularJS project.
- I can also touch other thing that just the frontend: eventually work on the UX/UI design or the backend.

#### 2.2. Which are your favorite features of HTML5? How have you used them before?
My favorites features of HTML5 are the new form types that works very well with mobile browser, and the semantic tags.
I use semantic tags in all my web projects, and the form types whenever there are forms! Also I think the coolest feature is HTML Canvas but I never had the chance to use it. I would like actually to use it to make generative art in one of my future side projects.

#### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.
When you create a DOM element with `innerHTML` the browser has to re-parse and regenerate all the nodes inside the node where innerHTML has been edited whereas `createElement` will avoid this problem and let the browser only add the right node when added to the DOM. Also, I think that using `createElement` makes it easier to debug.

#### 2.4. Compare two-way data binding vs one-way data flow.
- Two way data binding will bind the component's variable with the template using observers, it allows the template to update automatically when the variable changes, and to change the value of the variable when the value is changed on the template (using an input for example).
- One way data flow will only let you update the component's variable when an event is thrown but if the variable is programmatically changed it will be reflected to the template thanks to an observer.

Two way data building is commonly used with Angular, AngularJS and VueJS where as the one-way data flow is commonly used with React. 

#### 2.5. Why is asynchronous programming important in JavaScript?
Asynchronous programming is important in JavaScript because it does not support multi threading.
Thanks to Asynchronous programming it's possible not too block the UI in a webapp.

### 3. Styling
Find the styling assignement in the [`q3_styling` folder](./q3_styling/)

#### Notes
* I took as an hypothesis that I couldn't change the class names of change any of the HTML otherwise I would have use the BEM naming convention
* I only added the following html code `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` and `<link href="styles/app.css" rel="stylesheet">`
* The build command does not minify
* The build command does not add the browser prefixes
* I developped it and tested on a chromium based browser

### 4. SPA
Find the SPA assignement in the [`q4_spa/client` folder](./q4_spa/client), note that you need to run the [server](./q4_spa/server) in order to have the API running.

