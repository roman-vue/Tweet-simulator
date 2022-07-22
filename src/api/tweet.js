import { v4 as uuidv4 } from "uuid";

import { TWEETS } from "@/utils/constansts";

export function saveTweetApi(tweet, username) {
    const data = {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date(),
    };
    localStorage.saveItem(TWEETS, JSON.stringify(data));
}
