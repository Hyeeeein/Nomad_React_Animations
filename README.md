# Nomad_React-Animations

## Installation

```
$ npm install framer-motion
```

## framer-motion

### framer-motion 과 CRA 의 버전이 맞지 않아 생기는 오류

- ECMAscript 는 cra 5 에서 도입되었기 때문에 framer-motion 는 ECMAscript module 로 변경되어서 cra 4 를 이용하고 있다면 에러가 남
- cra 의 설정 사항을 override(덮어쓰기)해야 함
- CRACO(Create React App Configuration Override) 설치 : npm i @craco/craco --save
- craco.config.js 를 최상위 루트에 추가하여 cra 의 커스텀 설정사항을 적용시키도록 할 것임

```
// craco.config.js
  module.exports = {
    webpack: {
      configure: {
        module: {
          rules: [
            {
              type: "javascript/auto",
              test: /\.mjs$/,
              include: /node_modules/,
            },
          ],
        },
      },
    },
  };
```

```
// package.json
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
```

### motion

- 어떤 요소에 애니메이션을 사용하고 싶다면 motion 으로부터 요소를 불러와야 함
- 예를 들어, `<motion.div></motion.div>` 이런 식으로 사용해야 함
- 컴포넌트 형태로 사용하고 있는 styled-components 의 경우, 컴포넌트를 선언해준 곳에 `styled(motion.div)` 로 수정해주면 됨

### motion basic

- initial : 애니메이션을 시작하는 방식을 명시, 즉 요소의 초기 상태를 작성
- animate : 애니메이션을 주고 싶은 스타일 정의
- exit : 애니메이션이 끝나갈 때 스타일 정의

- 위 세개 props 각각 x, y 로 좌표를 설정할 수 있는 속성을 지정할 수 있음

### transition : 애니메이션 변화 설정(속도, 변화시간 등)

- type : 자동으로 튕기는 모션이 생기는데 type 으로 spring 이 기본적으로 설정되어 있기 때문, 따라서 속성값으로 tween 을 주면 선형적인 모션으로 변경
- stiffness : 물리현상을 시뮬레이트, 슬로우 모션과 비슷
- damping : 반동력 (0 으로 설정하면 무기한으로 반동)
- bounce : 튕김 속도 지정. 속성값은 0~1 로 stiffness, damping, mass 가 있다면 bounce 와 duration 은 덮어써짐
- delayChildren : 자식 모두에게 동일한 delay 적용
- staggerChildren : 자식 각각에게 순서대로 효과가 나타날 수 있도록 적용(예. 순서대로 나타나야할 때)

### variants

- animate, transition, initial 등 한 번에 모아서 지정할 수 있음
- 변수 데이터로 따로 지정해놓고 props 에 variants 의 값으로 해당 변수 이름을 작성한 후 animate, transition, initial 등 각각 쓴 값의 이름을 각 props 에 지정해주기만 하면 됨.(이름은 달라도 됨)
- 따로 지정해주지 않아도 자식 요소들에게도 부모가 지정한 이름이 적용

### while

- whileHover : 요소 위에 커서가 있는 동안 작동할 애니메이션
- whileTap : 클릭했을 때 작동할 애니메이션
- whileDrag : 요소를 가지고 움직일 때 작동할 애니메이션
- 모두 variants 에 넣어서 사용할 수 있음

### drag

- drag : drag 가 가능하게 됨, 이때 값으로 x 또는 y 를 입력하면 해당 좌표로만 drag 가 가능함
- dragConstraints : dragging 이 허용될 수 있는 영역. top, bottom, left, right 직접 지정 가능. 어떠한 영역 안에서만 작동되도록 하고 싶다면 useRef 를 사용하여 값으로 넣어주면 그 영역 안에서만 이동
- dragSnapToOrigin : 기존에는 dragging 을 멈추면 그 자리에 계속 있었으나 이 옵션을 사용하면 원래 위치로 돌아감
- dragElastic : 0~1 사이. 당기는 힘을 의미. 작아질수록 제자리에서 당기는 힘이 세져 요소가 커서를 따라오지 못함

### MotionValue

- 어떤 움직임이나 동작을 탐지하여 값을 탐지
- 예를 들어, x 좌표의 값을 탐지한다고 했을 때 style 의 x 값은 useMotionValue 로 가져온 변수의 값이 됨. 기본값은 0
- MotionValue 가 업데이트될 때 리액트의 랜더링 사이클이 발동되지 않음. react 의 state 형태가 아니라는 의미.

- 실시간으로 변경된 값이 보고 싶을 때 방법

```
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);
```

- `<button onClick={() => x.set(200)}>click</button>` ➡️ 이런 식으로 값을 세팅할 수도 있음

### useTransform

- 어떠한 값을 원하는 값으로 변환해줌
- 어떤 값 하나와, 제한값, 원하는 출력값을 받아서 `useTransform(어떤값, [제한값], [원하는출력값])` 이런 식으로 입력하면 됨. 제한값과 원하는 출력값의 개수는 맞춰야 함

### useScroll

- 스크롤 값을 반환, useViewportScroll 는 이전 버전 useScroll 이 현재 버전
- scrollX, scrollY : 픽셀 단위인 수평, 수직 스크롤
- scrollYProgress, scrollXProgress : 0~1 사이의 값 반환

### transition default

- 특정 애니메이션에서 특정 transition 을 다르게 주고 싶다면 transition 의 props 로 default 값을 주면 됨
- default 에는 모든 속성이 적용될 transition 을 적어주고, 다르게 주고 싶은 transition 은 transition 의 props 로 다르게 주고 싶은 스타일 속성의 객체로 적어주면 됨

### AnimatePresence

- 사라지는 컴포넌트에 애니메이션 효과를 주도록 도와줌 (예. 모달창)
- AnimatePresence 는 항상 컴포넌트가 보이는 상태이어야 하고 그 안에 컴포넌트의 유무를 판별하는 조건문이 있어야 함

### custom

- 변경되는 상태값에 따라 animate 도 자유롭게 변경해주는 옵션
- AnimatePresence 와 그 아래 변경되는 요소의 최상위 둘 다 custom 값을 줘야 함

```
// 사용 예시
// custom={isBack}
invisible: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
```

### exitBeforeEnter => mode="wait"

- 이전 요소가 다 사라지고 난 뒤에 다음 요소를 보여주는 옵션
- exitBeforeEnter 가 없어지고 mode="wait" 로 변경

### layout

- css 의 변화를 감지하여 자동으로 animate 설정
- layoutId : 같은 레이아웃임을 설정하여 애니메이션을 연결

## Code Challenge!

- todo 입력하는 input 스타일 변경
- todo 를 로컬 스토리지에 저장하기
- todo 삭제하기(버튼x, 화면에 쓰레기통 아이콘을 만들어 거기로 드롭하면 삭제되도록 만들기)
- 큰 board 를 추가하여 안의 board 를 드래그앤드롭해서 순서를 바꿔보기(board state 라는 atom 을 생성해서 모든 board 의 움직임 추적)
- input 을 추가해 엔터할 때마다 보드를 추가로 만들어보기
