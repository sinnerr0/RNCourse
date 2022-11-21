# RNCourse

React Native 강의(https://www.udemy.com/course/react-native-2022-ko/)를 듣고 따라하면서 관련 기록을 남깁니다.

# Section 2

- flexbox가 자주 사용하는 스타일이라 default layout style 인건 편한 듯
- 컴포넌트가 stlye 상속이 없고 android, ios마다 적용되거나 적용되지 않는 style이 및 props가 있어 둘다 에뮬레이터를 띄워놓고 실행해야 할 듯
  <img src="docs/section2.png" width="700px" alt="section2" />

# Section 4

- StyleSheet에 대해서 익숙해 지는 시간이었음
- RN 컴포넌트/API 뿐 아니라 Expo SDK/API에도 RN 개발하는데 필요한 내용들이 많이 있어 보임
- Text 컴포넌트간은 부모/자식 관계를 가질 수 있고 스타일이 상속될 수 있다.
- expo-app-loading이 deprecated되고 expo-splash-screen으로 바꾸는 것을 해보았다.

# Section 5

- Dimensions, useWindowDimensions를 이용하여 반응형으로 구현 가능
- Platform을 이용하여 플랫폼 구분 가능
- 파일 확장자(android, ios)를 이용하여 플랫폼 전용 코드를 작성 가능

# Section 6

- useLayoutEffect를 한 번도 사용하지 않았는데 어떨때 사용하는지 알 수 있었음
- React Navigation 즐찾 추가
- Drawer 수행 시 아래 에러 발생하면 강의에 나온 해결방법 말고 링크된 깃헙 이슈 답변으로 해결하는게 정답 인 듯  
  `Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?`
  https://github.com/software-mansion/react-native-reanimated/issues/1875#issuecomment-1125706058

# Section 9

- input 입력에 대한 처리를 배움
- 날짜 출력하는데 Date.toISOString를 사용하고 있어 잘못 사용하고 있음. 영국사람인가? 아닌거 같은데...

# Section 11

- 여기서도 deprecated된 expo-app-loading 대신 expo-splash-screen 적용
- token 저장에 @react-native-async-storage/async-storage를 사용하는데 암호화되지 않은 저장소이기 때문에 expo-secure-store를 사용하여 저장시키는 것으로 변경

# Section 12

- 여기서도 deprecated된 expo-app-loading 대신 expo-splash-screen 적용

# Section 13

- 바로 안되는 경우나 에러가 발생되는 경우가 있어 android는 Android Studio에서 프로젝트를 한 번 열고 패키지 다운로드 및 초기 환경이 설정될 수 있도록 하고, ios는 xcworkspace를 실행시켜 Xcode를 열어 빌드 및 설정이 정상인지 확인한다음에 실행하는 것이 좋을 듯.

# Section 14

-
