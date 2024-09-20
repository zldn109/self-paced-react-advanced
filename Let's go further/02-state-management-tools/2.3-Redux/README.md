# 02-3. 전역상태관리 - Redux

## 🎯 요구사항
```
 npm install redux react-redux @reduxjs/toolkit
```
- Redux toolkit(RTK)를 사용해서 애플리케이션 내의 Recoil로부터의 마이그레이션을 해보세요.
  - rootReducer를 설정하고 import/export 해보세요!
- props에 대한 요구사항은 2-1 요구사항과 같습니다.
- Redux toolkit(RTK)를 **왜** 사용하는지, Recoil과 비교했을때 어떤 점이 달랐는지, 또 trade-off가 있는지 적어주세요.
    - 기술적인 것도 좋고 개발자의 경험 측면에서도 좋습니다.
- Redux Devtools를 이용하고 State의 변화와 Action의 발생을 확인해보세요.

### 😗구현 예시
- 컴포넌트의 이름이나 구조는 마음대로 변경해도 좋습니다.
- 아래는 main.jsx의 설정 모습입니다.
```javascript
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import rootReducer from "./modules";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
});
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
```
- rootReducer는 생김새는 아래와 같습니다(똑같을 필요❌)
```javascript
import {combineReducers} from 'redux'
import isAddModalSlice from "./slices/isAddModalSlice.js";
import isModalSlice from "./slices/isModalSlice.js";
import restaurantsSlice from "./slices/restaurantsSlice.js";
import categorySlice from "./slices/categorySlice.js";

const rootReducer = combineReducers({
    isAddModalSlice : isAddModalSlice,
    isModalSlice : isModalSlice,
    restaurants: restaurantsSlice,
    category: categorySlice,
});

export default rootReducer;
```

## ✅ 키워드
- props drilling
- 전역상태관리
    - Redux
    - store
    - Reducer
    - Slices
    - dispatch
    - useSelector
    - useDispatch

## 🧙‍♀️ 진행 가이드
- 진행시간 : 2시간 내에 완료하는 것을 목표로 합니다.

## 🔗 참고 문서
- [Redux 공식문서](https://ko.redux.js.org/introduction/getting-started/)
- [테코톡(에프이의 useReducer)](https://www.youtube.com/watch?v=xnlCNIpzQq0&list=PLgXGHBqgT2TvpJ_p9L_yZKPifgdBOzdVH&index=42)