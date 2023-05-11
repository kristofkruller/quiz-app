# **REACT-TS-TAIL quiz app frontend** ⚛  
*rtkquery-redux-persist-router*
## **Project install n run** 💾  
**classical run:**
`npm i && npm run dev`  
no .env or special req, only frontend app 🎨

**docker run:**
`docker build -t quiz-app-client .`
`docker run -e WATCHPACK_POLLING=true -v $(pwd)/src -d -p 3050:3050 --name quiz-app quiz-app-client`

*helpers*
images `docker image ls`
list of running containers `docker ps`
kill container `docker rm quiz-app -f`
interact with container `docker exec -it quiz-app bash`

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

Upgrade perspective: auth, reg, login, difficulity set, question set, design ...
