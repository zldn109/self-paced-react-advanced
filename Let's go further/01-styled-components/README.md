# 01. styled-components를 적용해서 리팩토링하기

## 🎯 요구사항
- 초록스터디-`self-paced-react`의 step5 코드를 가져와 스타일링하는 미션입니다.
- styled-components 라이브러리를 이용해서 컴포넌트들에게 css를 입히고 스타일링 해보세요. 
- styled-components를 왜 사용하는지, 별도의 css파일로 분리한 방법과 어떤 trade-off가 있는지 PR에 적어주세요.
  - (선택) 브라우저가 웹 페이지를 렌더링하는 구조와 과정에 대해서도 공부해보세요.
  - **🔑keywords** : DOM Tree, CSSOM Tree, Render Tree
- 프로젝트내 별도의 css파일은 존재하지 않아야합니다.❌
  - App.css는 허용되며 아래의 코드와 동일해야합니다.
```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

ul,
li {
list-style: none;
}

html,
body {
font-family: sans-serif;
font-size: 16px;
}

/* Colors *****************************************/
:root {
--primary-color: #ec4a0a;
--lighten-color: #f6a88a;
--grey-100: #ffffff;
--grey-200: #d0d5dd;
--grey-300: #667085;
--grey-400: #344054;
--grey-500: #000000;
}

```

### 😗구현 예시
- 컴포넌트의 이름이나 구조는 마음대로 변경해도 좋습니다.
```javascript
import React from 'react';
import styled from 'styled-components';

// Button 컴포넌트를 styled-components로 정의
const Button = styled.button`
  background-color: #ec4a0a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f6a88a;
  }
`;

const App = () => {
  return (
    <div>
      <h1>Hello, styled-components!</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default App;
```

## ✅ 키워드
- **styled-component**
  - Css in JS
  - Scoped Styling

## 🧙‍♀️ 진행 가이드
- 진행시간 : 1시간 내에 완료하는 것을 목표로 합니다.
- vscode 사용시 extension에서 `vscode-styled-components`를 설치해주세요.

## 🔗 참고 문서
- [styled-components 공식문서](https://styled-components.com/docs)
