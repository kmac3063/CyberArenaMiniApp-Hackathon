import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';

const Profile = (props) => {
    let user = DataBase.getUserInfo(props.fetchedUser);
    return (<Group>
        <Title level="2" weight="semibold" style={{"textAlign" : "center"}}>Основная информация</Title>
        {props.fetchedUser && <RichCell
            disabled
            multiline
            before={<Avatar size={72} src={user.avatar} />}
            text={props.fetchedUser.city.title}
           //caption={props.fetchedUser.city.title}
            after={<Button before={<Icon28WriteSquareOutline/>} size="l" onClick={() => <editProfile/>}/>}
        >
            {user.nickname}
        </RichCell>}
        <div>Profile</div>
    </Group>)
}

export default Profile;