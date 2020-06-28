<template>
  <div id="description">
    <span>下記メニューより、閲覧されたい回をお選びください</span>
  </div>
</template>

<style lang="scss" scoped>
  #description{
    width:100%;
    height:10vh;
    display: flex;
    align-items: center;
    color:white;
    background: linear-gradient(to right,rgba(0, 128, 0, 0.881),rgba(127, 179, 48, 0.888));
    span{
      margin: 0 auto;
      font-family: 'Noto Sans JP';
      font-size: calc(9px + .5vw);
    }
  }
</style>
