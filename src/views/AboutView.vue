<template>
  <div class="about">
    <md-editor :value="value" :handle-change="onChange"></md-editor>

    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const value = ref();
const onChange = (v: string) => {
  value.value = v;
};

import MdEditor from "@/components/MdEditor.vue";
</script>
