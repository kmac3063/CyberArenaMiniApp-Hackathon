import React, {useState} from 'react';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import defHS from "../img/defaultHS.png";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const UserToursCell = (props) => {
    return (
            <Banner
                before={<Avatar size={112} mode="image" src={props.title["imgUrl"]} />}
                header={props.title["Name"]}
                subheader={props.title["GameType"]}
                asideMode="expand"
                onClick={()=>{props.changePanel("OrgTourView")}}
            />
    )
}

export default UserToursCell