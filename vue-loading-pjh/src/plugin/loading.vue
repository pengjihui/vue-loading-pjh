<template>
  <div>
    <div class="loading-warp" v-show="show">
      <div class="loading-content">
        <div class="ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {
      text: '加载中...',
      show: false
    }
  }
}
</script>
<style scoped>
.loading-warp {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.loading-content {
  background: rgba(0, 0, 0, 0.7);
  width: 110px;
  height: 120px;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
}
.ball-spin-fade-loader {
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -7px;
}
.ball-spin-fade-loader > div:nth-child(1) {
  top: 25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s -0.96s infinite linear;
  animation: ball-spin-fade-loader 1s -0.96s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(2) {
  top: 17.05px;
  left: 17.05px;
  -webkit-animation: ball-spin-fade-loader 1s -0.84s infinite linear;
  animation: ball-spin-fade-loader 1s -0.84s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 25px;
  -webkit-animation: ball-spin-fade-loader 1s -0.72s infinite linear;
  animation: ball-spin-fade-loader 1s -0.72s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(4) {
  top: -17.05px;
  left: 17.05px;
  -webkit-animation: ball-spin-fade-loader 1s -0.6s infinite linear;
  animation: ball-spin-fade-loader 1s -0.6s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(5) {
  top: -25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s -0.48s infinite linear;
  animation: ball-spin-fade-loader 1s -0.48s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(6) {
  top: -17.05px;
  left: -17.05px;
  -webkit-animation: ball-spin-fade-loader 1s -0.36s infinite linear;
  animation: ball-spin-fade-loader 1s -0.36s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -25px;
  -webkit-animation: ball-spin-fade-loader 1s -0.24s infinite linear;
  animation: ball-spin-fade-loader 1s -0.24s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(8) {
  top: 17.05px;
  left: -17.05px;
  -webkit-animation: ball-spin-fade-loader 1s -0.12s infinite linear;
  animation: ball-spin-fade-loader 1s -0.12s infinite linear;
}

.ball-spin-fade-loader > div,
.ball-spin-loader > div {
  -webkit-animation-fill-mode: both;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 100%;
}

.ball-spin-fade-loader > div {
  background-color: #fff;
  animation-fill-mode: both;
}
.loading-warp p {
  width: 100%;
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 70px;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* -webkit-transform: translateX(-50%); */
  color: #fff;
}
@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
