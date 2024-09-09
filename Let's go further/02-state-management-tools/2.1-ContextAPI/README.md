# 02-1. 전역상태관리 - Context API

## 🎯 요구사항
- Context API를 사용해서 애플리케이션 내의 **props drilling** 문제를 해결하세요.
  - props로 **똑같은** 데이터 혹은 함수를 전달하지 않도록 해야합니다.
  - props를 쓴다면 그 이유를 PR에 적어주세요.
- PR에 Context API를 **왜** 사용하는지, 기존의 코드구조와 어떤 **trade-off**가 있는지 적어주세요.
- Context API와 데이터를 사용하는 Component 사이의 **관계를 도식화**하고 이미지를 PR에 첨부해주세요.
  - 실제 코드와 상관없이 일반적인 관계를 나타내야합니다.
  - 도식화 방식은 자유롭게 하셔도 좋습니다.
  - (추천) **Figma**

### 😗구현 예시
- 컴포넌트의 이름이나 구조는 마음대로 변경해도 좋습니다.
- 아래의 코드는 Context를 설정하는 예시입니다.

```javascript
import { createContext, useState } from "react";

// Context 생성
const UserContext = createContext({
    user: { name: "", email: "" },
    setUser: () => {}
});

// Provider 컴포넌트
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "John Doe", email: "johndoe@example.com" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

```

## ✅ 키워드
- props drilling
- 전역상태관리
  - Context
  - Provider
  - Consumer
- Hook : useContext

## 🧙‍♀️ 진행 가이드
- 진행시간 : 2시간 내에 완료하는 것을 목표로 합니다.

## 🔗 참고 문서
- [Context API 공식문서](https://ko.legacy.reactjs.org/docs/context.html)
- [리액트를 다루는 기술(저:김민준(velopert))](https://thebook.io/080203/0501/)
