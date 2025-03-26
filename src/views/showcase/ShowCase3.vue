<template>
  <div>
    <h1>WatchEffect에 대하여</h1>
    <br />
    <pre>
WatchEffect 내부에서 사용하는 반응형 데이터들의 값이 변경되면 effect를 실행한다.
WatchEffect는 무조건 최초 1회 실행한다.
    </pre>
    <hr />
    <h4>문법</h4>
    <pre>
✅ 기본 문법
const count = ref(0);
watchEffect(() => {
  console.log(`() => {} 부분이 effect라는 것이다. 값: ${count}`);
});
count.value = 10;
출력
() => {} 부분이 effect라는 것이다. 값: 0
() => {} 부분이 effect라는 것이다. 값: 10
    </pre>
🔍 watchEffect vs watch
    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
      <tr>
        <th>구분</th>
        <th>watchEffect</th>
        <th>watch</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>추적 방식</td>
        <td>자동 추적 (접근한 값 자동 추적)</td>
        <td>수동 지정 (감시할 값을 명시)</td>
      </tr>
      <tr>
        <td>즉시 실행 여부</td>
        <td>무조건 즉시 실행</td>
        <td>기본은 비즉시 (<code>immediate: true</code> 옵션 필요)</td>
      </tr>
      <tr>
        <td>용도</td>
        <td>간단한 반응형 연산 또는 부수 효과 처리</td>
        <td>이전/변경된 값 비교나 정밀한 제어 필요할 때 사용</td>
      </tr>
      </tbody>
    </table>
    <hr>
    <h3 style="color:red;">onCleanUp()</h3>
    <pre>
watch와 watchEffect에서 사용할 수 있는 함수이다.
직전에 실행했던 effect에 대해 컨트롤하는 것으로써, 현재 실행중인 effect와는 상관이 없다.
ㅇ 기본 문법
const a = ref(0);
watchEffect((cleanUp) => {
    let inVar = false;
    onCleanup(() => {
      inVar = true;
      console.log('#### cleanup 실행');
    });
    console.log(`#### 끝: ${a.value}, inVar? ${inVar}`);
});

// 예시 동작
              // <실행1>[WatchEffect는 최초 자동 실행하고, 최초 실행이므로 onCleanup 실행되지 않음.] #### 끝: 0, inVar? false
a.value = 1;  // <실행2>[두번째 동작이므로 onCleanup 실행] #### cleanup 실행(실행1에 대한 컨트롤이므로 inVar true할당 또한 <실행1>에 대한 할당임) -> #### 끝: 1, inVar? false
a.value = 2;  // <실행3>[세번째 동작이므로 onCleanup 실행] #### cleanup 실행(실행2에 대한 컨트롤이므로 inVar true할당 또한 <실행2>에 대한 할당임) -> #### 끝: 2, inVar? false
<hr>
<code>
🧪 <span style="color:red">의존성 테이블 (Dep Map)을 만든다 (Vue 내부 개념)</span>
Map&lt;ReactiveValue, Set&lt;effect functions&gt;&gt;
</code>
위 내용을 보면 ReactiveValue라는 key에 등록해놓고 effect functions를 값으로 저장해놓으니
반응형 값이 변경되었을 때 key가 있으면 effect를 실행시킬 수 있지 않을까?

</pre>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>