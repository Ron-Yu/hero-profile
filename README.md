## React app demo for responsive web design and test

### [demo](http://wakeful-bun.surge.sh/)

### The app is based on [create-react-app](https://github.com/facebookincubator/create-react-app)

### check list
* [x] Hero List Page (網址: /heroes)
* [x] Hero Profile Page (網址: /heroes/:heroId)
* [x] “Hero List Page“ 、 “Hero Profile Page“ 都有一個 “Hero List“ 在頁面上水平置中
* [x] “Hero List“ 上的元素我們稱為 “Hero Card“，在 “Hero List“ 中由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
* [x] “Hero Card“ 必須包含圖片和名字，且是可以點擊的連結
* [x] “Hero Card“ 連結會連到單一Hero的 “Hero Profile Page“ ，“Hero List“ 依然在相同位置，並且不因切換連結重新render
* [x] 當在 “Hero Profile Page“ 時要將現在所選中的 “Hero Card“ 用不同的顏色或圖案標示出來
* [x] “Hero Profile Page“ 中，在“Hero List“ 底下會有一個 “Hero Profile“
* [x] “Hero Profile“ 會顯示 Hero 的能力值，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
* [x] “Hero Profile“ 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料，送出的能力值總和必須與拿到的時候相同
* [x] Hero 能力值不能小於零

### How to run app in local development environment
* **clone** this repository
* entry to **hero-profile** directory
* `npm install` or `yarn` to install all dependencies from npm
* `npm run start` or `yarn run start` will start local server on port 3000

### How to test app
* `npm run test` or `yarn run test`

### How to build app for production
* `npm run build` or `yarn run build`

### react components structure
![alt text](https://user-images.githubusercontent.com/5327305/29866132-05c76020-8daa-11e7-9664-287f53dfb022.png)

### react state logic
* use **redux** to control central state
* redux state
  * states
    * heroList
    * heroProfile
      * ability
      * remainingPoints

### third party library
* [redux](https://github.com/reactjs/redux): it's a great tool control central state in whole app
* [react-redux](https://github.com/reactjs/react-redux): make redux state available to react components by **connect** HOC
* [axios](https://github.com/mzabriskie/axios): greeat tool dealing with http request
* [react-router](https://github.com/ReactTraining/react-router): tool for routing (sometimes it's hard to figure out)
* [styled-components](https://github.com/styled-components/styled-components): style your component without external style file
* [animate-css-styled-components](https://github.com/dielduarte/animate-css-styled-components): animate css for styled-components
* [grid-styled](https://github.com/jxnblk/grid-styled):Responsive React grid system built with styled-components
* [material-ui](http://www.material-ui.com/): material design component based on react
* [redux-thunk](https://github.com/gaearon/redux-thunk): redux middleware for dealing with async actions
* [nock](https://github.com/node-nock/nock): mock http response for testing
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store): mock redux store and provide some usuful api


### comments rules
* source code is the best comment
* I will write why I wrote this block of code and what will be finished if comments is necessary.

### problem in this project and how to figure it out
* react-router(v4): it's a breaking change from v3 to v4. I have to figure out the concept and api from scratch.
* try a new way to write style for react. I spent some time researching style-component library and it's ecosystem. it's a fantastic concept to implement style for react component.
* it took lots of time for me to add testing for redux action and reducer. originally, I was struggling with async action and thinking how to handle or mock http response. I searched some reference online and made experiments in this project. finally, I know how to mock http response and finished my test. it will make my app stronger in the long term.
