<template>
  <div class="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu" mode="horizontal" router>
          <el-menu-item index="/">
            文件签名
          </el-menu-item>
          <el-menu-item index="/verify">
            签名验证
          </el-menu-item>
          <el-menu-item index="/genkey">
            生成密钥对
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <!-- <div>
          <span>本项目有可直接在本地运行的版本</span>
          可直接
          <el-link :underline="false"
            href="https://github.com/kl2Nie/kl2Nie.github.io/releases/download/v1.1/RSA_Sign_v1.1.7z" type="primary">
            下载
          </el-link>
          如果对项目感兴趣可
          <el-link :underline="false" href="https://github.com/kl2Nie/kl2Nie.github.io/releases" type="primary">
            访问发布页
          </el-link>
        </div> -->
        <div>
          <span>Copyright &copy; 2022 - {{ new Date().getFullYear() }} kl2Nie</span>
          RSA数字签名使用
          <el-link :underline="false" href="https://github.com/kl2Nie/rsa_sign/blob/master/LICENSE" type="primary">
            MIT许可协议
          </el-link>
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
