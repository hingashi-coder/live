<template>
  <div style="background:transparent;">
    <div class="dummy"></div>
    <div class="topBar">
      <div class="row">
        <div class="col-8">
          <div class="title">
            youtube テストページ
          </div>
        </div>
        <div class="col-4">
          <img src="@/assets/shohei_logo_jhs.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dummy{
  height:50px;
}
.topBar{
  position: fixed;
  top: 0;
  width:100%;
  height: 50px;
  z-index: 9999;
  background: linear-gradient(to right, green, rgba(158, 255, 47, 0.795));
  .row{
    height:100%;
    width:100%;
    .col-4{
      height:100%;
      text-align: right;
      img{
        margin-right: 1vw;
        height:100%;
      }
    }
  }
  .col-8{
    height:100%;
    display: flex;
    align-items: center;
    .title{
      margin-left: 20px;
      font-family: 'Noto Sans JP';
      color:white;
      font-size:15px;
    }
  }
}

</style>
