<template>
  <div class="app">
    <el-container>
      <el-header>
        <el-menu  
        class="el-menu" 
        mode="horizontal" 
        router
        >
          <el-menu-item index="/">
            文件签名
          </el-menu-item>
          <el-menu-item index="/verify">
            签名验证
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <div>
          <span>Copyright &copy; 2022 - {{ new Date().getFullYear() }} kl2Nie</span>
          RSA数字签名使用
          <a href="https://github.com/kl2Nie/rsa_sign/blob/master/LICENSE" target="_blank">MIT许可协议</a>
          开放源代码
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
