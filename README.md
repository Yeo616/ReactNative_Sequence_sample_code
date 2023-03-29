# 리액트 네이티브 상태관리

- 리액트 네이티브로 만든 상태 관리 시퀀스입니다.  
- 해당 프로젝트는 React Native로 이루어진, font-end이며, 상태 관리 진행을 위해서는 back-end 프로젝트 또한 설치해야 합니다.

<br/>

## 사전 준비

- 해당 프로젝트의 원활한 실행을 위해서는 back-end 프로젝트 또한 설치해야 합니다.
	- Back-end의 깃허브 주소 참고: https://github.com/Yeo616/Sequence_backend_FastAPI
- 해당 프로젝트를 실행할 수 있는 모바일 환경(모바일 기기/에뮬레이터/시뮬레이터)가 준비되어있어야합니다. 
	- 해당 프로젝트에서는 Android Studio의 에뮬레이터를 설치하여 사용하였습니다. 
	

### 주의!
<b>back-end가 실행되고 있는 상태</b>에서만, 해당 프로젝트 실행이 가능합니다.

<br>
# 개발환경 준비하기

## Node.js

node.js 웹사이트에서 LTS버전을 선택하여 다운로드 받는다.

[https://nodejs.org/en](https://nodejs.org/en)

  

## 파이썬 설치

윈도우에서 빌드할 때 필요하다. 리액트 네이티브 에서는 파이썬 2버전을 사용한다.

http://python.org/


## JDK 설치

안드로이드 개발을 위한 안드로이드 개발 언어인 자바 개발 도구 JDK(Java Development Kit) 설치

다운로드 받은 파일을 실행해 JDK 설치가 완료되면 환경 변수를 설정

“시스템 > 고급 시스템 설정 > 환경 변수 > 시스템 변수 > 새로만들기”를 통해 JAVA_HOME이라는 이름의 시스템 변수를 추가, 그 값으로 앞에서 설치한 JDK의 경로를 지정한다.
-   변수이름: JAVA_HOME
-   변수 값: C:\Program Files\Java\jdk-14.0.2

JAVA_HOME 추가가 완료되면 시스템 변수에서 Path를 선택하고, 편집을 통해 다음과 같이 수정한다.

-   환경변수 편집: %JAVA_HOME%\bin
    
환경 변수 설정이 완료되면 확인 버튼을 이용해서 저장하고 커맨드창에서 다음 두 명령어로 설치가 잘 되었는지 확인한다.
```
java --version
javac --version
```
## 안드로이드 스튜디오 설치

[https://developer.android.com/studio](https://developer.android.com/studio)

설치할 때 Install Type을 선택하는 화면에서 Custom을 선택하고 진행한다.

SDK Components Setup 화면에서
-   Android SDK   
-   Android SDK Platform
-   Performance(Intel HAXM)
-   Android Virtual Device
를 선택하고 진행한다.
나머지는 기본 설정을 유지한다.

설정이 완료되면 SDK Manager 메뉴로 이동해서 추가 설치를 진행한다.
File > Settings > Appearance & Behavior > System Settings > Android SDK
![enter image description here](https://user-images.githubusercontent.com/102447800/228535341-2fab7dcf-a465-4794-9d1a-d34b7d07e44c.png)

![enter image description here](https://user-images.githubusercontent.com/102447800/228535425-1651e44a-8cab-45d1-9b6b-a1c7bbb3dab2.png)
ok 클릭후 설치

-  환경 변수 설정: 시스템 > 고급 시스템 설정 > 환경 변수

사용자 변수에서 새로만들기를 통해 다음과 같이 추가한다.

-   변수이름: ANDROID_HOME
-   변수 값: %LOCALAPPDATA%\Android\Sdk

값에는 안드로이드 SDK 위치를 정확하게 지정해야한다. 정확한 값은 SDK Manager 메뉴의 Android SDK Locations에서 확인할 수 있다.

시스템 변수에 있는 path 편집
-   환경 변수 편집:  %LOCALAPPDATA%\Android\Sdk\platform-tools

![enter image description here](https://user-images.githubusercontent.com/102447800/228537058-43f0e63b-1750-43b1-bdf0-b0ae8f2e3a15.png)

환경 변수 설정이 완료되면 커맨드 창에서 다음 명령어를 이용해 잘 설치되었는지 확인
```
adb --version
```
## 에뮬레이터
안드로이드 스튜디오 화면 우측 아이콘 클릭 > Create device
![enter image description here](https://user-images.githubusercontent.com/102447800/228538262-0d3cd57e-77bc-4fdb-b998-5a2d96428d15.png)

안드로이드 기기 선택
![enter image description here](https://user-images.githubusercontent.com/102447800/228538400-169d774e-c693-4dff-a6c6-0c2f9c35e498.png)

설치가 완료되면, 
![enter image description here](https://user-images.githubusercontent.com/102447800/228538467-52879037-3554-4139-a880-3dd551ca21a1.png)
좌측 Device를 더블 클릭하거나, action밑의 재생 버튼을 누르면 실행한다.

# 리액트 네이티브 프로젝트 만들기
**온라인 실행:**
[https://snack.expo.dev/@yeohyunj/react-native_state_sequence](https://snack.expo.dev/@yeohyunj/react-native_state_sequence)

**로컬 경로:**
C:\Users\Yeo\Documents\Sample codes\Front\react-native-sequence

## Expo

리액트 네이티브를 편하게 사용할 수 있도록 미리 여러가지 설정이 되어있는 툴
[https://expo.io](https://expo.io)

expo를 이용하려면 npm을 이용해서 expo-cli를 설치해야한다.
```
npm install --global expo-cli
```
설치가 완료되면 다음 명령어로 Expo 프로젝트 생성
```
npx create-expo-app (앱이름) && cd (앱이름)
```
  
실행
```
npm start
```
  
## 실제 디바이스 사용

실제 핸드폰을 가지고, Expo 애플리케이션을 다운받아 설치한다.

설치 완료 후 Expo 프로젝트를 실행한 커맨드 터미널에 있는 QR코드를 촬영하면 실제 기기에서 Expo 프로젝트를 실행할 수 있다.

## 안드로이드 에뮬레이터를 이용

터미널 혹은 명령 프롬프트에서 a를 입력하면 된다.
![(터미널에 a를 입력했을 때의 모습)](https://lh5.googleusercontent.com/XxVhqZh-qJcnno0SSkRA_nmu9qlgCowvdlwQ129NaXoi4CN3Ps3yRPUk3qNRtjKIeBdgxmCtOMljHuYffkI5XHFMFdAzGxqK_re4eCe8bVak6ISt3h1maOaCu4VF5GwIc9gmLiX4mmH24svUvrQWsJM)
(터미널에 a를 입력했을 때의 모습)

## 로그 확인하기

실제 기기는 흔들고,
가상 기기로 진행하는 경우, 터미널 혹은 명령 프롬프트에서 m를 입력하면 된다.
는 경우, 터미널 혹은 명령 프롬프트에서 m를 입력하면 된다.

![](https://lh4.googleusercontent.com/ZiUYRTHI4gXJcJo_6gTlJBVUaXva2xfkZ9ZAzlUCwRMjv7FqpqoxE9IxUGJnpwblzelKU7ZtJ-FsxcgYkcZ8q1nTO_FSktXnWd5F1iXoooSH4KiGfOyrZqy2jpcoUbCuByo5ZHapFjAf2Z8W_628--Y)

 
![](https://lh5.googleusercontent.com/3HkdXW3bP4hoaF8aRcIJ8AlNvsN2pZ3kvmlmAqcj-EabjicFEBAmTFqGPe_XrrvEX4xy-rQubgFVj7M4Chhw-OEoL8xuYInEoZ0-rcU4jEvMzfG7whUUioUi3IAmO6wg-QyrQZl_rq2IOYgKcr1mH60)

로그 내용은 터미널에서도 보인다.
폴더 구조

![](https://lh5.googleusercontent.com/93moEFdH_CH8GN63wM-hBWqSEg-f1Y8UwtYZH7SNAWpuZro3IOqmY2XVhr3A9A4AjqzoxxsoJs0m_uH725H7Kdqd9g2K9V9CMY9emj5j9IED4y4QyD4oF8_KNXx5l_2FSYmIb4Z_u4lh5ALSvBhnAVs)

## 사용 라이브러리

- React Native Elements UI 사용

보기 좋은 UI를 사용하기 위하여 사용하였습니다.
```
npm install @rneui/base @rneui/themed
```

- React navigation 사용

화면 전환을 위해 사용하였습니다.
```
npm install @react-navigation/native @react-navigation/native-stack  
npx expo install react-native-screens react-native-safe-area-context
```
  

# 기능

-   사용자 이메일 확인 및 찾고자 하는 데이터 여부 확인
-   데이터가 없을 경우, 입력하여 DB에 저장
-   데이터가 있을 경우, 수정하여 DB에 업데이트
-   다른 페이지로 넘어가기
-   기존에 존재하던 데이터 삭제


# 스크린샷

-   모두 프론트에서 입력받은 데이터를 DB에서 확인하여, 화면에 표시하는 방식으로 진행했습니다.
    
-   여기서 말하는 DB는 Backend와 연동된 MongoDB의 test DB의 user_db컬렉션을 칭합니다.
    
<br/>

> Email.js  

**정보 조회 페이지**
-   여기서 데이터를 조회하고, 해당 계정에 데이터가 없으면, 정보 입력 페이지로 넘어갑니다.
-   여기서 작성한 email은 navigation의 기능을 이용하여, 넘어갈 페이지와 넘겨줄 데이터를 지정합니다. 이때, 함수 컴포넌트의 인자는 {navigation}객체를 넣어준다.
```
onPress={() => navigation.navigate('DataInput', {email: text})}
```

-   동그라미 안의 칼라별 의미는 아래 설명 참고

![](https://lh6.googleusercontent.com/JiTeTdin978-MScKGGf5UTkRcOvf5p9f9LaIp4w8b9mVONgvMsMCmsRtD4pbJa-TJdRqnQ138s60lPFd4Fn_Q0o4-tT52RuuNnsqzkBN6vM-6ZMUnqn5iQl2J9Fs2LT4Ry-s2hG44ytRcrJ2yqhOx48)

<br/>  

> DataInput.js

**정보 입력 페이지**
-   해당 계정에 데이터가 없을 경우에 넘어올 수 있는 페이지입니다.
-   조회 페이지(Email.js)에서 입력한 메일을 버튼의 navigation 기능에 저장하여, 불러왔습니다.
    

함수 컴포넌트에서{navigation, route}인자로 받아와서, 저장되어있는 이름을 지정해 데이터를 꺼냅니다.
```
const email = route.params.email
```
윗 부분에 "로그인 되어있는 이메일"뒤에 현재 로그인 된 이메일이 표시되어있습니다.

-   데이터를 입력하면, 최신 데이터로 추가/수정이 됩니다.
-   데이터가 추가/수정이 되면, 데이터를 삭제할 수 있는 버튼이 나타납니다.
-   삭제 버튼을 클릭하면, 해당 필드를 DB에서 지울 수 있습니다.

![](https://lh6.googleusercontent.com/m9J059XVQk9WKvhWKHgcjV-EnDJ0KsceyErrMLr-leqKoh4F-wbbZvSFpfKmuNczQXDjgXEePfLvtXAd1cAkrEvTz8LCSnhJBuzPCY_3u8M3cQ3ZJxDibbYsWz1GJMvnUNRow6yrA_fiv5AnE9gNbQs)

  

## 칼라별 의미

### 녹색
- 로그인 된 이메일이 유효할 때

> 입력한 유저는 DB에 있고, 찾고자 하는 데이터도 DB에 있음을 나타냅니다. 해당 프로젝트에서는 찾고자 하는 데이터를 phone_number로 지정하였습니다.

  

![](https://lh6.googleusercontent.com/6ixaf3XZgtgULExl0bkMtnyZd59MJJjkA3q2BQvAr4Qj2J1OPAUkBvHJ0zkPIR-CMuFuLVK1hOv1p4xi7XztFM-zBxO1JPpHrc9fJwuH8tkcLp0jyFqPc5V2jbfMnx-AMgocr0O3rBjU8Tx2O4gSAz8)

<br />
  
- 데이터 입력 성공했을 때
> 데이터를 입력하여 DB에 성공적으로 저장했을 때 나타납니다.

> 새로 입력한 데이터가 무엇인지 하단 문구에 표시됩니다.

![](https://lh3.googleusercontent.com/79zZCPU60wIE0Rsv9TUUJyP1v9klXv1Z2p4TusfEX6K2-yJ9uBOhNwdy_KCULL0WQknkvvIZf8mlOeUnTpLDq_X9SiE-QkLymAZIQUhSsvwgeR9x6dG2gc29SHax9cNSlfs-5Qnt5NFBBceV118nkAU)

<br/>

- 데이터를 삭제할 때

> DB에 저장되어있는 데이터를 성공적으로 삭제했을 때 나타납니다.

> 하단 문구에는 데이터가 성공적으로 지워졌다고 표시됩니다.

> 데이터는 존재하지 않으므로, 삭제 버튼은 없어집니다.


![](https://lh6.googleusercontent.com/bNXNNbam3ItaQXVfXLHqEHf42JwpumWluiElg9IahzGwyIX4RQl5B5A-Peo2HNE5065jt7kmLR9980jl6sKnyGh1zRGWaFUGWbSk3oYgkThK2-gZ4W74ahLF6Ls-LXi6ZmPhNNswcu3YMlwke69EYx0)

<br/>

### 주황색

- 유저는 DB에 있으나, 찾고자 하는 데이터가 없음을 표시합니다. 이때, 데이터를 입력할 창으로 넘어가는 링크가 나타납니다.


> 동그라미 안에는 No data로 표시되며, 밑 문구에는 'No data'라는 문구가 표시됩니다.


![](https://lh4.googleusercontent.com/dyUI35ordx9912kTsIWx1qRhfJnY0sXTkAffZDJv4weEgDYjRkStIxzBfwnpCkwFzsRrI6KefNEOE6fr26KDFPJorr4JUCnAOiFZPPKf-jQB6M8-tSP0zDmrqfv5EZuST1FhwLbtWg5ohBFu_rQfvV8)

<br/>

### 빨간색
하단에 에러 문구 및, 원 안에 에러 사항 표시

> 없는 유저데이터: 원안에 404를 표시하고, 밑 문구에는 유효하지 않은 이메일이라는 표시를 합니다.

![](https://lh3.googleusercontent.com/YKuh8P_g7fHLKw8FHYfc3lJqHJSPL_Iyp-DieV0Ad7tx57R9ANGIsQPm0fhta8coxgKMaPD3KW1PmfNOJuBUlnYWcoHLZh3QxHcbNi30I__Umy6uTRygpH4gYX7Y3Vuhi4U2tWC2GqHJjRnXVFYwufc)

 

>  아무 입력 없이 버튼을 눌렀을 때: 원 안에 'email is required'표시를 하고, 밑 문구에도 같은 표시를 합니다.

![](https://lh6.googleusercontent.com/AaQG10c5s_cUszNTQS-KX2ROizzNuktDpuiL-KsX8iZBcwzacIZNUX8xySyJREpqEM3XKmf3ISLULz0t5zflWwRWCMkWMXZoDJwXYxm80osa4jiskWFXBMCYDXSuqp67iRjjT6doJzhuzz-Y37--Z8M)


> 입력 에러: 정보 입력 창에서 입력을 하지 않았을 때 나타나는 에러입니다.

![](https://lh3.googleusercontent.com/NFuPu9gjagWZl8GnFZzVb-Qnz6Tsm6itASfDJ-Hd6sYui2RuodwfEm5lszD7TyG2v3D7M6ICtW1OyUbihq2uJDSNGg2AxlD2UHOe3sgKZlcz2Hwg7UNvdbXAfahR6YJ5MrPE1jDDL4iUyNeAvgD8Ig)


> API연결 에러: 원안에 connect error표시가 되고, 밑 문구에는 어떤 에러인지 표시를 합니다.

![](https://lh4.googleusercontent.com/8Ply3wKDsG-FaP72GzvW5JHCdsYOHNV0eNTk1QsN7lCndx6Ped9jM-f6rgeLGiQlzgfbScGFYD8iCDjY-pc5y3G7L_pMHccu4yh0itgJVziXLwf_S5Sl0BlQLDelM4zAaH0jhSwXJg-O1VM6tfTUyQ)
<br>

## 연락처 정보

guswls9281@gmail.com
