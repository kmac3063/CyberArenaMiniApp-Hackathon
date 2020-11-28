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
            "Name": "Первый турнир по Hearthstone",
            "GameType": "Hearthstone",
            "TournamentImg": defHS,
            "PrivateType": "private"
        }

        let tournament2 = {
            "Name": "Второй турнир по Hearthstone",
            "GameType": "Hearthstone",
            "TournamentImg": defHS,
            "PrivateType": "public"
        }
        props.myTournaments.push(tournament1);
        props.myTournaments.push(tournament2);
        //props.createdTournaments.push(tournament1);
        props.recomendedTournaments = [];
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