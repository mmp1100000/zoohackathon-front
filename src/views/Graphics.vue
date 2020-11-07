<template>
  <div class="graphics">
    GRAFICAS
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// eslint-disable-next-line @typescript-eslint/camelcase
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// eslint-disable-next-line @typescript-eslint/camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default Vue.extend({
  name: "Graphics",
  components: {},
  beforeMount() {
    am4core.useTheme(am4themes_animated);
  }
});
</script>
<style>
</style>
