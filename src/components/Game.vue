<template>
<div>
    <div class="row justify-content-center">
       <div class="col-8 frameQuestion">
       <div class="row question">
          <span>Ai là người đẹp trai nhất xóm ?</span>
       </div>
       <div class="row justify-content-between">
           <div class="col-5 answer"></div>
             <div class="col-5 answer"></div>
       </div>
       <div class="row justify-content-between">
             <div class="col-5 answer"></div>
             <div class="col-5 answer"></div>
       </div>
       </div>
        <div class="col-4 frameQuestion"></div>
    </div>
</div>
</template>
<script>
export default {
name: "game",
}
</script>
<style>
.frameQuestion{
    height: 100px;
    border-style: groove;
}
.answer {
    background-color: blue;
    height: 25px;
}
.question{
    height: 50px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
;
}
</style>