<template>
<div>
    <div class="row justify-content-center">
       <div class="col-8">
       <div class="row question">
          <span>Ai là người đẹp trai nhất xóm ? Ai là người đẹp trai nhất xóm ? Ai là người đẹp trai nhất xóm ? 
              Ai là người đẹp trai nhất xóm ?Ai là người đẹp trai nhất xóm ?Ai là người đẹp trai nhất xóm ?
           
              </span>
       </div>
       <div class="row justify-content-between">
           <div class="col-12 answer">
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
           </div>
               <div class="col-12 answer">
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
     <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
           </div>
               <div class="col-12 answer">
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>
           </div>
       </div>
       <div class="row justify-content-between">
             <div class="col-12 answer"></div>
       </div>
       
       </div>
        <div class="col-4 frameQuestion">
            <div class="square">

            </div>
        </div>
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
    height: 300px;
    /* background-color: burlywood; */
    border-radius: 20px;
}
.answer {
    height: 25px;
}
.question{
    min-height: 50px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    background-color: burlywood;
    border-radius: 20px;
    padding:0px 24px 0px 24px;
    margin-bottom: 16px;
}
.square {
  height: 50px;
  width: 50px;
  background-color: aliceblue;
  border-radius: 12px;
  cursor: pointer;
}
.square:hover{
    background-color: blueviolet;
}
</style>