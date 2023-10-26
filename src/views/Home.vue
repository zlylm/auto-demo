<template>
  <div class="home">
    <el-button :loading="loading" @click="commit">请求</el-button>
    <el-button :loading="loading2" @click="commit2">请求2</el-button>
  </div>
</template>

<script setup>
import { useAutoRequest } from './hooks'
// 模拟请求
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: "success"
      });
    }, 2000);
  });
}

const [ loading, submit ] = useAutoRequest(request)
const [ loading2, submit2 ] = useAutoRequest(request)

async function commit() {
  submit('123').then(res => {
    console.log(res);
  })
}

async function commit2() {
  submit2('123').then(res => {
    console.log(res);
  })
}


</script>
