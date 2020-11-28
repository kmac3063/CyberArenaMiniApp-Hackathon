import React, {useState} from 'react';
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import DataBase from "../server/DataBase";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";

const Participants = (props) => {

    // let peoples = DataBase.getParticipants(props.tourId);
    //
    // return <Group>
    //     <Header mode="secondary">Зарегистрированные участники</Header>
    //
    //     {peoples.map((people) => {
    //         let user = DataBase.getUserInfo(people.id);
    //         return <SimpleCell before={<Avatar mode="app" src={user.avatar} />}
    //                     description={user.firstName + ' ' + user.secondName}
    //                     onClick={()=>{}}>
    //             {user.nickname}
    //         </SimpleCell>
    //     })}
    // </Group>

    return <div></div>
}

export default Participants;
