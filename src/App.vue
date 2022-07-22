<template>
    <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
    <Tweet :showForm="showForm" />
</template>

<script>
import Menu from "./components/Menu.vue";
import Tweet from "./components/Tweet.vue";
import useFormtweet from "./hooks/use-form-tweet";
export default {
    name: "App",
    components: {
        Menu,
        Tweet,
    },
    setup() {
        return {
            ...useFormtweet(),
        };
    },
};
</script>

<style lang="scss"></style>
