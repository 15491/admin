<template>
  <div class="login-page flex items-center justify-center h-screen">
    <div class="flex w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="flex-1 p-10">
        <h2 class="mb-2">欢迎回来</h2>
        <p class="mb-5 text-gray-500">登录您的管理账户</p>
        <el-form :model="form" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" prefix-icon="UserFilled" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item>
            <div class="w-full flex justify-between items-center">
              <el-checkbox v-model="remember">记住我</el-checkbox>
              <el-link class="text-link" type="primary">忘记密码?</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="w-full" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-page-right flex-1 text-white flex flex-col justify-center items-center p-10">
        <h3 class="mb-2">后台管理系统</h3>
        <p class="mb-5">个人学习的后台管理解决方案</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { reactive, ref, useTemplateRef } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

// 表单实例
const formRef = useTemplateRef<FormInstance>('formRef')

// 登录表单
const form = reactive({
  username: '',
  password: '',
})

// 登录表单验证规则
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

// 记住我
const remember = ref(false)

// 登录
const handleSubmit = () => {
  // 表单校验
  formRef.value?.validate((valid) => {
    if (valid) {
      // 登录流程
      handleLogin()
    }
  })
}

// 登录
const handleLogin = () => {
  console.log('登录流程')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.login-page {
  background: linear-gradient(to right, $login-gradient-start, $login-gradient-end);
}

.login-page-right {
  background: linear-gradient(to right, $card-gradient-start, $card-gradient-end);
}

.text-link {
  color: $text-color;
}
</style>
