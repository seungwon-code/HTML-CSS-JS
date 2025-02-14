oㅐ#form 이란?
양식을 제출한다. 글쓰는 거, 설문조사,

1. 인풋창 Enter 하고 엔터 했을 때, 작동하면 양식 : (form)

2. ctrl + shift + c or F12 개발자도구로 form 태그 확인하기

   - 회원가입 (form)
   - instagram 댓글 (form)
   - 카톡 메시지 Enter (form)

3. 용도 : 추가 및 수정 CREATE/UPDATE

4. 사용법

   - label + input + select : 내용물
   - button : 동작하는 버튼

5. 특징 : 재출하였을때 새로고침 됨
   - 해결 : 새로고침 방지(js)

##input

1. type : 글짜 또는 비밀번호 암호화 가능 ctrl + space bar
2. label 태그와 연결 가능
   - label의 for 값과 input의 id 값을 같게 해주면 됨

##select

1. label 과 연결하면 좋음
2. option 태그와 사용
   <select>
   <option value="옵션1>option1</option>
   </select>
   - option을 선택할 때 보이는 글자가 아니라 option태그 안의 value 값을 받음
3. value 를 입력하지 않은 option 태그를 placehoder 처럼 사용
   - placehoder : 예시를 적을 때 사용 및 사용 설명에 사용
4. selected 속성을 부여해서 미리 값을 정해줄 수 있음
   - 중복되게 부여한다면 마지막 옵션에 선택됨

##제출버튼

1. button
   - type 속성의 기본값이 submit
     ** form 태그 안에서만 **
   - 양식 제출 하지 않게 할려면 type button
   - 초기화 = reset
2. input button
   - value의 값에 이름 넣어줘야 함 제출 ㄴ
   - type="submit" 제출하기 버튼으로 작동
