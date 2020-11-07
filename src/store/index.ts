import Vue from "vue";
import Vuex from "vuex";
// Modules
import { uploadModule } from "@/store/upload";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { images: uploadModule }
});
