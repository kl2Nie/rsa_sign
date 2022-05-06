<template>
    <div>选择长度
        <el-select class="select" v-model="value" placeholder="选择密钥长度">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                :disabled="item.disabled" />
        </el-select>
    </div>
    <div class="button">
        <el-button type="primary" @click="genkey">
            生成密钥对
        </el-button>
    </div>
    <div>
        <div class="text">私钥</div>
        <el-input class="outputprikey" v-model="privatekey" :rows="6" type="textarea"
            placeholder="请选择长度,当选择的长度为2048和4096时,可能需要等待较长时间" />
    </div>
    <div>
        <div class="text">公钥</div>
        <el-input class="outputpubkey" v-model="publickey" :rows="6" type="textarea"
            placeholder="请选择长度,当选择的长度为2048和4096时,可能需要等待较长时间" />
    </div>

</template>

<script setup>
import { saveAs } from 'file-saver'
import { ref } from 'vue'

const privatekey = ref('');
const publickey = ref('');
const value = ref('');

const options = [
    {
        value: '1',
        label: '512位',
    },
    {
        value: '2',
        label: '1024位',
    },
    {
        value: '3',
        label: '2048位',
    },
    {
        value: '4',
        label: '4096位',
    },
]

function genkey() {
    const rs = require('jsrsasign');

    if (value.value == 1) {
        let rsaKeypair = rs.KEYUTIL.generateKeypair("RSA", 512);
        let pub = rs.KEYUTIL.getPEM(rsaKeypair.pubKeyObj);
        let pri = rs.KEYUTIL.getPEM(rsaKeypair.prvKeyObj, 'PKCS8PRV');
        publickey.value = pub;
        privatekey.value = pri;
        //自动下载公钥文件
        let data = pub;
        let str = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(str, 'publickey_512bit.txt');
        //自动下载私钥文件
        let data2 = pri;
        let str2 = new Blob([data2], { type: 'text/plain;charset=utf-8' });
        saveAs(str2, 'privatekey_512bit.txt');
        //调试
        // console.log('私钥', prv)
    }
    else if (value.value == 2) {
        let rsaKeypair = rs.KEYUTIL.generateKeypair("RSA", 1024);
        let pub = rs.KEYUTIL.getPEM(rsaKeypair.pubKeyObj);
        let pri = rs.KEYUTIL.getPEM(rsaKeypair.prvKeyObj, 'PKCS8PRV');
        publickey.value = pub;
        privatekey.value = pri;
        //自动下载公钥文件
        let data = pub;
        let str = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(str, 'publickey_1024bit.txt');
        //自动下载私钥文件
        let data2 = pri;
        let str2 = new Blob([data2], { type: 'text/plain;charset=utf-8' });
        saveAs(str2, 'privatekey_1024bit.txt');
        //调试
        // console.log('公钥', pub)
        // console.log('私钥', prv)
    }
    else if (value.value == 3) {
        let rsaKeypair = rs.KEYUTIL.generateKeypair("RSA", 2048);
        let pub = rs.KEYUTIL.getPEM(rsaKeypair.pubKeyObj);
        let pri = rs.KEYUTIL.getPEM(rsaKeypair.prvKeyObj, 'PKCS8PRV');
        publickey.value = pub;
        privatekey.value = pri;
        //自动下载公钥文件
        let data = pub;
        let str = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(str, 'publickey_2048bit.txt');
        //自动下载私钥文件
        let data2 = pri;
        let str2 = new Blob([data2], { type: 'text/plain;charset=utf-8' });
        saveAs(str2, 'privatekey_2048bit.txt');
        //调试
        // console.log('公钥', pub)
        // console.log('私钥', prv)
    }
    else if (value.value == 4) {
        let rsaKeypair = rs.KEYUTIL.generateKeypair("RSA", 4096);
        let pub = rs.KEYUTIL.getPEM(rsaKeypair.pubKeyObj);
        let pri = rs.KEYUTIL.getPEM(rsaKeypair.prvKeyObj, 'PKCS8PRV');
        publickey.value = pub;
        privatekey.value = pri;
        //自动下载公钥文件
        let data = pub;
        let str = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(str, 'publickey_4096bit.txt');
        //自动下载私钥文件
        let data2 = pri;
        let str2 = new Blob([data2], { type: 'text/plain;charset=utf-8' });
        saveAs(str2, 'privatekey_4096bit.txt');
        //调试
        // console.log('公钥', pub)
        // console.log('私钥', prv)
    }
    else {
        alert("请选择密钥长度")
    }
}
</script>


<style scoped>
.outputpubkey {
    width: 650px;
    margin-top: 10px;
}

.outputprikey {
    width: 650px;
    margin-top: 10px;
}

.text {
    margin-top: 10px;
}

.button {
    box-align: center;
    margin-top: 10px;
}
</style>