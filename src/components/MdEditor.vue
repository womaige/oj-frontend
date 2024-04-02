<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor, Viewer } from "@bytemd/vue-next";
import { ref, defineProps, withDefaults } from "vue";

//定义组件的属性
interface Props {
  value: string;
  //而在Vue组件中定义的属性名通常是 camelCase（驼峰命名）,而在HTML标签中只能使用小写字符和短横线
  //因此在外层写的地方是handle-change写法
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];

// const value = ref("这里是默认值");

// const handleChange = (v: string) => {
//   value.value = v;
//   console.log("value的值", value);
// };
</script>

<style scoped></style>
