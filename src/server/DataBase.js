import paladinsImg from '../img/paladins.png';
import dotaImg from '../img/dota.png';
import steamImg from '../img/steam.png';
import defHS from '../img/defaultHS.png';
import vkImg from '../img/vk.png';
import React from 'react';

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
            "StartData": "28.01.2020 г.",
            "StartTime": "15:30",
            "EndData": null,
            "EndTime": null,
            "GameType": "Hearthstone",
            "Prize": null,
            "EnterPrice": null,
            "TournamentImg": defHS,
            "PrivateType": "private"
        }

        let tournament2 = {
            "Name": "Второй турнир по Hearthstone",
            "StartData": "29.01.2020 г.",
            "StartTime": "16:30",
            "EndData": "30.01.2020 г.",
            "EndTime": null,
            "GameType": "Hearthstone",
            "Prize": 150000,
            "EnterPrice": null,
            "TournamentImg": defHS,
            "PrivateType": "public"
        }
        props.myTournaments.push(tournament1);
        props.myTournaments.push(tournament2);
        props.createdTournaments.push(tournament1);
        props.recomendedTournaments = [];
        return props;
    }
}

export default DataBase