<template>
  <div>
    <h1>Computed에 대하여</h1>
    <br />
    <pre>
computed 함수 안에 사용한 반응형 변수에 변화가 감지되면 자동으로 실행된다.
computed는 일반 함수(method)와 동일한 효과를 낼 수 있으나
computed는 캐시가 되기 때문에 재랜더링시에도 computed 내 반응형 함수에 변화가 없다면 다시 실행되지 않고
함수(method)는 재랜더링 될때마다 계속 실행되기 때문에 차이가 있다.

watch랑도 약간 비슷한 느낌이 있긴 한데, computed와 watch랑 둘 다 사용할 수 있다면 computed를 사용하기를 권장한다.
✔ computed: 계산된 값을 만들고 캐싱할 때, 단순하고 직관적이며 성능에도 좋음
⚠ watch: 값이 바뀔 때 어떤 작업을 실행해야 할 때만 사용 (예: API 호출, 로컬스토리지 저장 등)
    </pre>
    <hr />
    <h4>문법</h4>
    <pre>
      ㅇ 기본
      const var = computed(() => someArrays.length > 0 ? 'Y' : 'N'
      ☞ someArrays의 길이가 변경될 때마다 호출되며, 결과를 var에 반환한다.
    </pre>
    <pre>
      ㅇ Setter + Getter
      const firstName = ref('');
      const lastName = ref('');
      const fullName = computed({
        get: () => `${firstName.value} ${lastName.value}'
        set: (newValue) => [firstName.value, lastName.value] = newValue.split(' ')  // 배열을 구조분해할당함
      });

      fullName.value = "김 평식";
      ☞ fullName에 값을 넣을 경우 setter 동작
    </pre>
    <hr /><br />
    <h3>✅ computed vs methods 차이 요약</h3>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
      <tr>
        <th>항목</th>
        <th>computed</th>
        <th>methods</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>캐싱</td>
        <td>✅ 결과를 캐싱함</td>
        <td>❌ 호출할 때마다 다시 실행됨</td>
      </tr>
      <tr>
        <td>사용 목적</td>
        <td>값 계산 (getter 느낌)</td>
        <td>동작 수행 (함수 느낌)</td>
      </tr>
      <tr>
        <td>종속성 반응</td>
        <td>종속된 값이 바뀌면 다시 계산됨</td>
        <td>항상 새로 실행됨</td>
      </tr>
      </tbody>
    </table>
    <br/><br/>
    <h3>✅ computed vs watch 차이 요약</h3>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
      <tr>
        <th>항목</th>
        <th>computed</th>
        <th>watch</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>용도</td>
        <td>계산된 값을 만들 때 (데이터 가공용)</td>
        <td>변화 감지 후 어떤 동작을 실행할 때 사용</td>
      </tr>
      <tr>
        <td>반환값</td>
        <td>값(value)을 반환함</td>
        <td>값 반환 없음 → 콜백 함수 실행</td>
      </tr>
      <tr>
        <td>캐싱</td>
        <td>✅ 자동 캐싱됨 (값이 바뀌지 않으면 재계산 안함)</td>
        <td>❌ 매번 실행됨</td>
      </tr>
      <tr>
        <td>타겟</td>
        <td>템플릿이나 다른 곳에서 바인딩에 주로 사용</td>
        <td>특정 값이 변할 때만 감지해서 로직 실행</td>
      </tr>
      <tr>
        <td>oldValue</td>
        <td>❌ 없음 (직접 처리해야 함)</td>
        <td>✅ 기본으로 newVal, oldVal 받음</td>
      </tr>
      <tr>
        <td>비동기 처리</td>
        <td>❌ 비동기 추천 안함</td>
        <td>✅ 비동기 처리 가능</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>