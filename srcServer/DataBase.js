import paladinsImg from '../src/img/paladins.png';
import dotaImg from '../src/img/dota.png';
import steamImg from '../src/img/steam.png';
import vkImg from '../src/img/vk.png';

class DataBase {
    getUserInfo(id) {
        //запрос к бд
        props.games = ["Paladins", "Dota 2"];
        props.links = ["Vk", "Steam"];
        return props;
    }

    getGameAvatar(name) {
        // запрос к бд
        let tmp = {"Paladins" : paladinsImg, "Dota 2" : dotaImg};
        return tmp.get(name);
    }

    getAppAvatar(name) {
        // запрос к бд
        let tmp = {"Vk" : vkImg, "Steam" : steamImg};
        return tmp.get(name);
    }
}