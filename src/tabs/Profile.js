import React, {useState} from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
import EditProfile from "../modals/EditProfile";
import {IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, ModalPage, ModalRoot} from "@vkontakte/vkui";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";

const Profile = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    let user = DataBase.getUserInfo(props.fetchedUser);

    const save = () => {
        console.log("save");
        setActiveModal(null);
    }
    return (<Group>
        <Title level="2" weight="semibold" style={{"textAlign" : "center"}}>Основная информация</Title>
        {props.fetchedUser && <RichCell
            disabled
            multiline
            before={<Avatar size={72} src={user.avatar} />}
            text={props.fetchedUser.city.title}
           //caption={props.fetchedUser.city.title}
            after={<Icon28WriteSquareOutline onClick={()=>{setActiveModal("editProfile")}}/>}>
                    {user.nickname}
                </RichCell>}
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={"editProfile"}
                onClose={() => setActiveModal(null)}
                header={
                    <ModalPageHeader
                        left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={save}><Icon24Cancel /></PanelHeaderButton>}
                        right={<PanelHeaderButton onClick={save}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
                    >
                        Редактирование
                    </ModalPageHeader>
                }
            >
                <FormLayout>
                    <Textarea top="Новый никнейм" placeholder="Введите новый никнейм" />
                </FormLayout>
            </ModalPage>
        </ModalRoot>
        <CardGrid>
            <Card size="l" mode="shadow">
                <div style={{ height: 96 }} />
            </Card>
        </CardGrid>
        <CardGrid>
            <Card size="l" mode="shadow">
                <div style={{ height: 96 }} />
            </Card>
        </CardGrid>
    </Group>)
}

export default Profile;