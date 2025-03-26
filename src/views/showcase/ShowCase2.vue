<template>
  <div>
    <h1>Watch에 대하여</h1>
    <br />
    <pre>
감시할 대상(ref, reactive, getter, ...)인 첫번째 인자가 변경될 때마다 콜백이 실행된다.
감시 중인 첫번째 인자에 해당하는 값이 변경 될 경우 어떤 액션을 취해야 할 경우 사용한다.

🔄 watch의 2가지 주요 인자
첫 번째 인자: 감시할 대상 (ref, reactive, getter 등)
두 번째 인자: 콜백 함수 (값이 바뀔 때 실행)
    </pre>
    <hr />
    <h4>문법</h4>
    <pre>
✅ 기본 문법
watch(source, callback, {
  immediate: true, // 처음 실행할 때도 callback 실행하여 무조건 1번은 실행한다.(watchEffect와 비슷?)
  deep: true,      // 객체 내부까지 감시 (reactive object에서만)
});

✅ ref 단건 감시
const name = ref('');
watch(name, (newVal, oldVal) => {
  console.log(`이름이 ${oldVal} → ${newVal} 로 바뀜`);
});

// 예시 동작
name.value = '홍길동';   // 콘솔: 이름이 '' → 홍길동 로 바뀜`
name.value = '김길동';   // 콘솔: 이름이 홍길동 → 김길동 로 바뀜`

✅ getter 함수 감시 (계산된 값 감시)
const firstName = ref('김');
const lastName = ref('평식');
watch(
  () => `${firstName.value} ${lastName.value}`,
  (newVal, oldVal) => {
    console.log(`이름 변경됨: ${oldVal} → ${newVal}`)
  }
);

// 예시 동작
firstName.value = '박';   // 콘솔: 이름 변경됨: 김 평식 → 홍 평식
lastName.value = '길동';  // 콘솔: 이름 변경됨: 홍 평식 → 홍 길동

✅ reactive 객체 감시 (deep 필요)
const user = reactive({name: '김평식', age: 37});
watch(user, (newVal) => {
  console.log('user 변경됨:', newVal)
}, { deep: true });

// 예시 동작
user.name = '홍길동' // 콘솔: user 변경됨: { name: '홍길동', age: 20 }
user.age = 38       // 콘솔: user 변경됨: { name: '홍길동', age: 38 }

✅ 배열 형태로 ref 다건 감시
const x = ref(10);
const y = ref(20);
watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`x: ${oldX} → ${newX}, y: ${oldY} → ${newY}`);
});

// 예시 동작
x.value = 11 // 콘솔: x: 10→11, y: 20→20
y.value = 21 // 콘솔: x: 11→11, y: 20→21
    </pre>
    <hr>
    <h3 style="color:red;">onCleanUp()</h3>
    <pre>
watch와 watchEffect에서 사용할 수 있는 함수이다.
직전에 실행했던 effect에 대해 컨트롤하는 것으로써, 현재 실행중인 effect와는 상관이 없다.
ㅇ 기본 문법
const a = ref(0);
watch(a, (newVal, oldVal, cleanUp) => {
    let inVar = false;
    onCleanup(() => {
      inVar = true;
      console.log('#### cleanup 실행');
    });
    console.log(`#### 끝: ${newVal}, inVar? ${inVar}`);
});

// 예시 동작
a.value = 1;  // <실행1>[최초 동작이므로 onCleanup 실행되지 않음.] #### 끝: 1, inVar? false
a.value = 2;  // <실행2>[두번째 동작이므로 onCleanup 실행] #### cleanup 실행(실행1에 대한 컨트롤이므로 inVar true할당 또한 <실행1>에 대한 할당임) -> #### 끝: 2, inVar? false
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