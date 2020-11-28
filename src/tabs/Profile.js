import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
import {ModalPage, ModalRoot} from "@vkontakte/vkui";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import GameCell from "../cards/GameCell";

const Profile = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    let user = DataBase.getUserInfo(props.fetchedUser);

    const save = () => {
        console.log("save");
        setActiveModal(null);
    }

    return (<Group>
        <Title level="2" weight="semibold" style={{"textAlign" : "center"}}>Основная информация</Title>
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={"editProfile"}
                onClose={() => {setActiveModal(null)}}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => {setActiveModal(null)}}><Icon24Cancel/></PanelHeaderButton>}
                        right={<PanelHeaderButton onClick={save}><Icon24Done/></PanelHeaderButton>}
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
        {props.fetchedUser && <RichCell
            disabled
            multiline
            before={<Avatar size={72} src={user.avatar} />}
            text={props.fetchedUser.city.title}
           //caption={props.fetchedUser.city.title}
            after={<Icon28WriteSquareOutline onClick={()=>{setActiveModal("editProfile")}}/>}>
                    {user.nickname}
                </RichCell>}

        <CardGrid style={{"position" : "relative", "zIndex" : "0"}}>
            <Card size="l" mode="shadow">
                <div style={{ height: 130, backgroundColor : "", padding : 10}}>
                    asdasdsa
                </div>
            </Card>
            <Card size="l" mode="shadow" style={{marginTop : 20}}>
                <div style={{ height: 130, backgroundColor : "", padding : 10, "overflowY" : "auto"}}>
                    <Group>
                        {user.games.map(gameName => {
                                return <GameCell title ={gameName} img={DataBase.getGameAvatar(gameName)}/>
                            })
                        }
                    </Group>
                </div>
            </Card>
        </CardGrid>
    </Group>)
}

export default Profile;