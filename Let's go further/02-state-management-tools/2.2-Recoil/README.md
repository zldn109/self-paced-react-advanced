# 02-2. 전역상태관리 - Recoil

## 🎯 요구사항
- Recoil를 사용해서 애플리케이션 내의 Context API로부터의 마이그레이션을 해보세요.
- props에 대한 요구사항은 2-1 요구사항과 같습니다.
- Recoil를 **왜** 사용하는지, Context API와 비교했을때 어떤 점이 달랐는지, 또 trade-off가 있는지 적어주세요.
    - 기술적인 것도 좋고 개발자의 경험 측면에서도 좋습니다.

### 😗구현 예시
- 컴포넌트의 이름이나 구조는 마음대로 변경해도 좋습니다.
- 아래의 코드는 atom를 설정하는 예시입니다.
```javascript
import { atom } from 'recoil';

// Atom 정의
export const textState = atom({
  key: 'textState', // 고유한 ID (Recoil에서 상태를 구분하기 위한 key)
  default: '',      // 기본값
});
```


## ✅ 키워드
- props drilling
- 전역상태관리
    - Recoil
    - atom
    - useRecoilValue
    - useSetRecoilState
    - useRecoilState

## 🧙‍♀️ 진행 가이드
- 진행시간 : 1시간 내에 완료하는 것을 목표로 합니다.

## 🔗 참고 문서
- [Recoil 공식문서](https://recoiljs.org/docs/introduction/installation/)
