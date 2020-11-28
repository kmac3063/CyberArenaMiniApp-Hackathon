import paladinsImg from '../img/paladins.png';
import dotaImg from '../img/dota.png';
import steamImg from '../img/steam.png';
import vkImg from '../img/vk.png';
import React from 'react';

class DataBase {
    static getUserInfo(fetchUser) {
        // если не получили, то создать
        //запрос к бд
        let props = {};
        props.games = ["Paladins", "Dota 2"];
        props.links = ["Vk", "Steam"];
        props.avatar = fetchUser.photo_200;
        props.nickname = fetchUser.first_name;
        return props;
    }

    static getGameAvatar(name) {
        // запрос к бд
        let tmp = {"Paladins" : paladinsImg, "Dota 2" : dotaImg};
        return tmp.get(name);
    }

    static getAppAvatar(name) {
        // запрос к бд
        let tmp = {"Vk" : vkImg, "Steam" : steamImg};
        return tmp.get(name);
    }
}

export default DataBase