import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {Avatar, Card, ModalPage} from "@vkontakte/vkui";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import DataBase from "../server/DataBase";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

const ChangeAvatar = (props) => {
    const [text, setText] = useState("");
    let avatars = DataBase.getAvatars();
    return <ModalPage
        id={"addService"}
        onClose={props.out}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={props.out}><Icon24Cancel/></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={() => props.save(text)}><Icon24Done/></PanelHeaderButton>}
            >
                <Text>Выберите новый аватар!</Text>
            </ModalPageHeader>
        }
    >
        <Group separator="hide">
            <div style={{marginBottom : 100, paddingLeft: "15%"}}>
                {avatars.map((av) => {return <div style={{width : 100, display:"inline-block", marginBottom : 20}}>
                        <Avatar  size={56} src={av} onClick={() => props.save(av)}/>
                    </div>})}
            </div>
        </Group>
    </ModalPage>;
}

export default ChangeAvatar