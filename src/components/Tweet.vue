<template>
    <div class="tweet-form container" :class="{ open: showForm }">
        <form action="" @submit.prevent="sendTweet">
            <input type="text" class="form-control" placeholder="your name" v-model="username" />
            <textarea class="form-control" rows="3" placeholder="write your tweet" v-model="tweet"></textarea>
            <button type="button" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
export default {
    props: {
        showForm: Boolean,
    },
    setup() {
        const username = ref("");
        const tweet = ref("");
        const sendTweet = () => {};
        return {
            username,
            tweet,
            sendTweet,
        };
    },
};
</script>

<style lang="scss" scoped>
.tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    &.open {
        height: auto;
    }
    form {
        margin-top: 50px;
        input {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>
