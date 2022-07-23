<template>
    <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
    <Tweet :showForm="showForm" :openCloseForm="openCloseForm" :reloadTweets="reloadTweets" />
    <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import { ref } from "vue";
import Menu from "./components/Menu.vue";
import Tweet from "./components/Tweet.vue";
import TweetList from "./components/TweetList.vue";
import useFormTweet from "./hooks/use-form-tweet";
import { getTweetsApi } from "./api/tweet";
export default {
    name: "App",
    components: {
        Menu,
        Tweet,
        TweetList,
    },
    setup() {
        let tweets = ref(getTweetsApi().reverse());
        const reloadTweets = () => {
            tweets.value = getTweetsApi().reverse();
        };
        return {
            ...useFormTweet(),
            tweets,
            reloadTweets,
        };
    },
};
</script>

<style lang="scss"></style>
