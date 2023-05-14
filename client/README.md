# **REACT-TS-TAIL quiz app frontend** ⚛  
*rtkquery-redux-persist-router*  
## **Project install n run** 💾  
CLI:  
`git clone https://github.com/kristofkruller/quiz-app.git`  
`cd quiz-app`  
  
**classical run:**  
CLI in sequence (first change dir then run the app)  
`cd client`  
`npm i && npm run dev`  
  
no .env or special req, only frontend app 🎨  
  
**docker run:**  
First install docker desktop [for windows or ?OS], run it, and download NodeJs (and nginx image - not needed for client side only) - in the desktop app or from docker hub! *if u r using linux i assume u dont need this guide*  
  
commanded by a [shell script] so use in CLI like:  
  
<"./bin/deploy.sh"><"dev or prod"><"up or down">  
so for example let's run the app in dev  
`./bin/deploy.sh dev up`  
if u r done just ctrl+c for killin the session like usually  
  
and let's say u r done and wanna clear the img and conti - just  
`./bin/deploy.sh dev down`  
  
*misc info*  
images `docker image ls`  
list of running containers `docker ps`  
kill image `docker image rm -f <app image name>`  
kill container `docker rm <app container name> -f`  
interact with container `docker exec -it <app container name> bash`  
  
## **Requirement specification** 🎂   
### Welcome:  
- Static Text  
- BEGIN button navigates to the Quiz screen and starts the Quiz  
### Quiz Screen:  
- The headline is from question category  
- The card element contains the current question  
- The next question should appear after the current question is answered True or False  
- After all questions have been answered, navigate to the Results Screen  
- The API may return a question more than once, handle this case as well  
### Results screen:  
- The Score shows correct and total  
- Displays a list of the questions and whether the answer was correct or not  
- PLAY AGAIN starts over and navigates to the Home Screen  

## **Data** 
[https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean]

## **App structure note**  
`Welcome` [/] screen static text *log in req?*   
logged in [/question] slug - `persist store` for answers   
`rtk query` for destuctured cache data  
`onClick` driven mechanics  
`Results` [/result] slug for summary, full list, play again with persist storage reset  
### Tree🌲  
*`root`* .d.ts, .configs, npm, index classic stuff  
*src* app core files (4)  
*assets* helpers, loading, non reactive mid-front elements, functions, info providers  
*components* for structure layouts, handlers and classic ui components, sub foldered  
*routes* pages  
*store* redux state store, slices for different data, logic, store constructor, fetch, cache  
  
## **Additional info**  
- [root/app.d.ts] for interfaces  
- `he` lib for html decoding  
- `react-icons` to provide iconset / SVGs  
- `persist` for putting stato to LS  
  
Upgrade perspective: auth, reg, login, setters via dynamic fetch: (${difficulity}, ${questionNum}, ...), design ...  
