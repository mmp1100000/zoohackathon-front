<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
    <div class="upload">
      <UploadForm class="upload-element"></UploadForm>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import UploadForm from "@/components/UploadForm.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld,
    UploadForm
  }
});
</script>
<style>
.upload {
  display: flex !important;
  justify-content: center !important;
}
.upload-element {
  flex: auto !important;
}
</style>
