<template>
  <div>
    <section>
      <b-field>
        <b-upload v-model="file" drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"> </b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  data() {
    return {
      file: null
    };
  },
  watch: {
    file: function fileChange() {
      this.validateColumns(this.file);
    }
  },
  methods: mapActions(["validateColumns"])
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border-radius: 5px;
  border: 2px dashed #a7a7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
}

.dropper:hover {
  background-color: #eee;
}

/*input {
  position: absolute;
  max-width: 1000px !important;
  height: 30vh;
  opacity: 0;
}*/
</style>
