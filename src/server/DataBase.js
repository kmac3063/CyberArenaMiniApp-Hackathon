import paladinsImg from '../img/paladins.png';
import dotaImg from '../img/dota.png';
import steamImg from '../img/steam.png';
import defHS from '../img/defaultHS.png';
import vkImg from '../img/vk.png';
import React from 'react';
import a1 from '../img/avatars/1.png'
import a2 from '../img/avatars/2.png'
import a3 from '../img/avatars/3.png'
import a4 from '../img/avatars/4.png'
import a5 from '../img/avatars/5.png'
import a6 from '../img/avatars/6.png'
import dota from "../img/r_dota_tur.png";
import doom from "../img/r_pal_tur.png";

// если не получили, то создать
class DataBase {
    static getUserInfo(fetchUser) {
        //запрос к бд
        let props = {};
        props.games = ["Paladins", "Dota 2", "Paladins", "Dota 2", "Paladins", "Dota 2"];
        props.services = ["Vk", "Steam", "Vk", "Steam", "Vk", "Steam", "Vk", "Steam"];
        props.avatar = dotaImg;//fetchUser.photo_200;
        props.nickname = "Igor";//fetchUser.first_name;
        return props;
    }

    static getGameAvatar(name) {
        // запрос к бд
        let tmp = {"Paladins" : paladinsImg, "Dota 2" : dotaImg};
        return tmp[name];
    }

    static getServiceAvatar(name) {
        // запрос к бд
        let tmp = {"Vk" : vkImg, "Steam" : steamImg};
        return tmp[name];
    }

    static getUserTournamentsInfo(fetchUser){
        //запрос к бд
        let props = {};
        props.myTournaments = [];
        props.createdTournaments = [];
        let tournament1 = {
            "Name": "Мой первый турнир по Hearthstone",
            "GameType": "Hearthstone",
            "PrivateType": "private",
            "imgUrl": "https://mmo-help.ru/wp-content/uploads/2017/06/Hearthstone_Heroes_of_Warcraft_China.png"
        }

        let tournament2 = {
            "Name": "1/4 финала школьного турнира по Dota",
            "GameType": "Dota 2",
            "PrivateType": "public",
            "imgUrl": "https://yt3.ggpht.com/a/AATXAJxTUVE3bO2GftTROx0YCE99kM2Adtr9SkwU47fG=s900-c-k-c0x00ffffff-no-rj"
        }

        let tournament3 = {
            "Name": "Zotac sunday cup 1x1",
            "GameType": "Starcraft 2",
            "PrivateType": "public",
            "imgUrl": "https://telegrator.ru/wp-content/uploads/2020/07/chat_avatar-49.jpg"
        }

        let tournament4 = {
            "Name": "Групповой этап чемпионата России среди студентов",
            "GameType": "CS:GO",
            "PrivateType": "public",
            "imgUrl": "https://yt3.ggpht.com/a/AATXAJxeDvSjsIJHDtOzLYWftko-CFyNv73g294JpzLmEw=s900-c-k-c0xffffffff-no-rj-mo"
        }
        props.myTournaments.push(tournament4);
        props.recomendedTournaments = [];
        props.recomendedTournaments.push(tournament3);
        props.recomendedTournaments.push(tournament1);
        props.recomendedTournaments.push(tournament2);
        return props;
    }

    static getTavernInfo(fetchUser){
        //запрос к бд
        let props = {};
        props.publics =[];
        props.hommies = [];

        let public1 = {
            "publicAv": dotaImg,
            "name": "DOTA 2",
            "population": "2.5 млн",
            "publicImg": null
        };

        let public2 = {
            "publicAv": steamImg,
            "name": "DOOM....",
            "population": "200 тыс.",
            "publicImg": null
        };
        props.publics.push(public1, public2, public1);

        return props;
    }

    static getAvatars() {
        return [a1, a2, a3, a4, a5, a6];
    }
}

export default DataBase