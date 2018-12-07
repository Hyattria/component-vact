<template>
  <transition name="fade">
    <div class="ac-mark ng-scope" v-show="visible">
      <div class="lds-css ng-scope">
        <div style="width:100%;height:100%" class="lds-flickr">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style>
@keyframes lds-flickr-opacity {
   0% {
    -webkit-transform: translate(0 0);
    transform: translate(0 0);
    opacity: 1;
  }
  49.99% {
    opacity: 1;
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  50% {
    opacity: 0;
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-webkit-keyframes lds-flickr-opacity {
  0% {
    -webkit-transform: translate(0 0);
    transform: translate(0 0);
    opacity: 1;
  }
  49.99% {
    opacity: 1;
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  50% {
    opacity: 0;
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes lds-flickr {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@-webkit-keyframes lds-flickr {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(80px, 0);
    transform: translate(80px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.lds-flickr {
  position: relative;
}
.lds-flickr div {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.lds-flickr div:nth-child(1) {
  background: #1d3f72;
  -webkit-animation: lds-flickr 1s linear infinite;
  animation: lds-flickr 1s linear infinite;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-flickr div:nth-child(2) {
  background: #5699d2;
  -webkit-animation: lds-flickr 1s linear infinite;
  animation: lds-flickr 1s linear infinite;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.lds-flickr div:nth-child(3) {
  background: #1d3f72;
  -webkit-animation: lds-flickr-opacity 1s linear infinite;
  animation: lds-flickr-opacity 1s linear infinite;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-flickr {
  width: 103px !important;
  height: 103px !important;
  -webkit-transform: translate(-51.5px, -51.5px) scale(0.515) translate(51.5px, 51.5px);
  transform: translate(-51.5px, -51.5px) scale(0.515) translate(51.5px, 51.5px);
}
</style>
