# CSS

## css root 설정하기

css 커스텀 속성으로 전역변수를 설정할 때에는  ‘—’ 접두사로 변수를 정의해야한다.

이 방식으로 정의된 변수는 후에 ‘var()’함수를 통해 참조할 수 있다.

ex)

```css
:root {
--strong-cyn :hsl(172, 67%, 45%);
}
```

여기서 색상을 나타내는 hsl은 Hue(색상- 색 상환에서의 위치를 나타낸다. 0도에서 360사의의 값을 가짐), Saturation(채도 - 색상의 강도를 나타내며 퍼센트로 나타낸다 100%는 가장 선명한 색상을 나타냄), Lightness(명도- 색상의 밝기를 나타냄, 퍼센트로 표현, 0%는 검정색을 의미, 100%는 흰색을 의미의 50%가 정상명도) 약자이다.

쓸 땐

```css
body{
background-color: var(--strong-cyn);
}
```

## font 설정

1. Google Font(https://fonts.google.com/)에서 쓸 폰트를 검색

1. 폰트 스타일을 선택 후, html 문서에 링크 추가 -googlefonts에서 제공하는 <link>태그를 복사해서 html의 <head>섹션에 붙여넣기 한다.

1. css에서 폰트 적용 - css 파일 내에서 font-family를 지정하여 ‘Space Mono’를 사용한다.
    
    ```css
    body {
      font-family: 'Space Mono', monospace;
    }
    
    ```
    

## 반응형 웹 디자인 설정

미디어 쿼리를 사용하여 각각의 화면 크기에 맞는 스타일을 적용할 수 있다.

데스크탑 퍼스트 접근 방식

```css
/* 데스크탑을 위한 기본 스타일 */
body {
    background-color: darkgrey;
    font-size: 20px;
    /* 데스크탑에 적합한 추가 스타일 */
}

/* 모바일 디바이스(화면 너비 375px 이하)를 위한 스타일 */
@media screen and (max-width: 375px) {
    body {
        background-color: lightgrey;
        font-size: 16px;
        /* 모바일에 적합한 추가 스타일 */
    }
}
```

`@media screen and (max-width: 375px){}`  화면 너비가 375px 이하 스타일을 설정할 때, 미디어 쿼리를 이용한다.

.

body  **- 부모요소의 최소 높이를 설정**

태그나 다른 요소의 최소 높이를 뷰포트의 높이와 같게 설정하는 법

`min-height: 100vh`; vh는 뷰포트의 높이의 단위로, 1vh는 뷰포트의 높이의 1%를 나타냄 즉 100vh는 뷰포트의 전체높이와 동일한 값을 의미. min-height : 100vh를 설정하면 콘텐츠의 양과 관계없이 body의 최소 높이가, 항상 브라우저 창의 높이와 같거나 그 이상이 될 수 있다. 이는 화면에 콘텐츠가 많지 않을 경우에도 body가 전체화면을 차지하도록 보장한다.

calculator - 자식요소에 반응형 요소를 설정함으로써 세밀한 조정을 가능하게 한다.

최대 너비 뷰포트의 너비의 75%로 설정 **`max-width: 75vw;`**

최소 너비 뷰포트의 너비의 60%로 설정 **`min-width: 60vw;`**

## Grid 사용

CSS Grid 레이아웃에서 **`repeat()`** 함수와 **`fr`** 단위는 그리드 트랙(열 또는 행)의 크기를 효율적으로 정의하는 데 사용한다.

### **`repeat()` 함수**

**`repeat()`** 함수는 반복되는 그리드 트랙의 크기를 간단하게 정의할 수 있게 해준다. 이 함수는 두 개의 인자를 받는다: 첫 번째 인자는 반복될 횟수, 두 번째 인자는 각 트랙의 크기를 나타낸다. ex)**`repeat(3, 1fr)`**는 **`1fr`** 크기의 트랙을 세 번 반복하라는 의미입니다.

### **`fr` 단위**

**`fr`**은 "fraction"의 약자로, 사용 가능한 공간을 분할하는 단위입니다. **`1fr`**은 사용 가능한 공간을 등분하여 할당하는 것을 의미한다.(비율)

ex) 그리드 컨테이너 안에서 **`repeat(3, 1fr)`**을 사용하면, 사용 가능한 공간을 세 부분으로 나누고 각 부분에 동일한 크기를 할당. 각 열 또는 행이 컨테이너의 전체 공간의 1/3을 차지하게 된다.

# JavaScript

## Dom접근 개념

1. 
    
    **`document.getElementById(id)`**: 주어진 **`id`** 값을 가진 요소를 선택. **`id`**는 문서 내에서 유일해야 하며, 해당 **`id`**를 가진 단일 요소를 반환함.
    
    ex) const element = document.getElementById(’example’)
    
2. **`document.querySelectorAll(selector)`**: 주어진 선택자에 해당하는 모든 요소를 NodeList 객체로 반환합니다. 선택자는 CSS 선택자와 동일한 형식을 사용합니다. 이 메소드는 일치하는 모든 요소를 선택할 때 유용함. → 리스트 객체라는 거 기억하기
    
    팁 계산기에서는, 버튼을 선택할 때, 사용함
    
     `const tipButtons = document.querySelectorAll('.tip-btn');`
    
    하나의 클래스만 선택하고 싶을때 querySelector만 쓰면 됨.
    
    `const warning = document.querySelector('.warning');`
    

dom 접근 순서 **`document.addEventListener('DOMContentLoaded', function() { ... });`** 구문은 "DOMContentLoaded" 이벤트에 대한 이벤트 리스너를 등록하는 것. 이 이벤트는 HTML 문서가 완전히 로드되고 파싱되었을 때 발생한다.