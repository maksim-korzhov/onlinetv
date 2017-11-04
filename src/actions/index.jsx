import axios from "axios";

import {
    FETCH_VIDEO,
    FETCH_VIDEO_LIST,
    SEARCH_VIDEO,
    ADD_VIDEO
} from "./types";

const ROOT_URL = "http://localhost:3000";

export function fetchVideoList() {
    const request = axios.get(`${ROOT_URL}/videos`);

    return {
        type: FETCH_VIDEO_LIST,
        payload: request
        /*payload: {
            videos: [
                {
                    id: 1,
                    name: "Джек Ричер",
                    picture: "http://onvix.tv/uploads/posters/9f/fb/29e895a4952990bec5b4647187eb/medium_d50b99ef2a99d69bac3b03ef.jpg",
                    year: 2012,
                    rating: 7.2
                },
                {
                    id: 2,
                    name: "Пол: Секретный материальчик",
                    picture: "http://onvix.tv/uploads/posters/f5/3a/84f48dd39c882d016ca2ddf09228/medium_789e1e1dabfadb9141557d44.jpg",
                    year: 2011,
                    rating: 7.2
                },
                {
                    id: 3,
                    name: "Неадекватные люди",
                    picture: "http://onvix.tv/uploads/posters/1e/35/25dcafaa4435098f8c0b96ecdd6f/medium_21790f1c04edf327bdbea632.jpg",
                    year: 2010,
                    rating: 7.7
                },
                {
                    id: 4,
                    name: "Джон Картер",
                    picture: "http://onvix.tv/uploads/posters/e0/83/b180be5893e8f978282259072e05/medium_33c5746a9eba96e6958de7ab.jpg",
                    year: 2012,
                    rating: 6.9
                },
                {
                    id: 5,
                    name: "Хорошо быть тихоней",
                    picture: "http://onvix.tv/uploads/posters/de/31/559567106ade010a248ebb9ea309/medium_93f727ac36492715ebc65161.jpg",
                    year: 2012,
                    rating: 7.5
                },
                {
                    id: 6,
                    name: "Няня",
                    picture: "http://onvix.tv/uploads/posters/b7/ec/d1944688d347b7646ce2fac898e3/medium_743da2bca0efca696150b9a9.jpg",
                    year: 2012,
                    rating: 7.2
                },
                {
                    id: 7,
                    name: "Рик и Морти",
                    picture: "http://onvix.tv/uploads/posters/a5/90/d5a60524f931f1c4489d570804a6/medium_1edef15be8c0df31a9a8e5b2.jpg",
                    year: 2013,
                    rating: 8.8
                },
                {
                    id: 8,
                    name: "Грань будущего",
                    picture: "http://onvix.tv/uploads/posters/f8/57/c77c6d525bdb9a11123be7142b46/medium_87236bbc83fc6652bf11a5c4.jpg",
                    year: 2014,
                    rating: 7.9
                },
                {
                    id: 9,
                    name: "Охотник с Уолл-стрит",
                    picture: "http://onvix.tv/uploads/posters/11/6b/1ca7f215622dd92bfab1fc227e42/medium_2b07bf2bfe5e9a26bac71fc7.jpg",
                    year: 2016,
                    rating: 6.5
                }
            ]
        }*/
    }
}

export function fetchVideoById(videoId) {
    const request = axios.get(`${ROOT_URL}/videos/${videoId}`);

    return {
        type: FETCH_VIDEO,
        payload: request
        /*payload: {
            video: {
                id: 7,
                name: "Рик и Морти",
                picture: "http://onvix.tv/uploads/posters/a5/90/d5a60524f931f1c4489d570804a6/medium_1edef15be8c0df31a9a8e5b2.jpg",
                year: 2013,
                rating: 8.8
            }
        }*/
    };
}

export function searchVideo(name) {
    const request = axios.get(`${ROOT_URL}/videos?name_like=${name}`);

    return {
        type: SEARCH_VIDEO,
        payload: request
    }
}

export function addVideo() {
    return {
        type: ADD_VIDEO
    };
}