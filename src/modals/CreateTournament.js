import React, {useState} from 'react';
import View from "@vkontakte/vkui/dist/components/View/View";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {ModalPage} from "@vkontakte/vkui";

const CreateTournament = (props) => {
    // return (<ModalPage
    //     id={"addGame"}
    //     onClose={() => {setActiveModal(null)}}
    //     header={
    //         <ModalPageHeader
    //             left={<PanelHeaderButton onClick={() => {setActiveModal(null)}}><Icon24Cancel/></PanelHeaderButton>}
    //             right={<PanelHeaderButton onClick={saveGame}><Icon24Done/></PanelHeaderButton>}
    //         >
    //             Добавление игры
    //         </ModalPageHeader>
    //     }
    // >
    //     <FormLayout>
    //         <Textarea top="Новый игра" placeholder="Какую игру вы хотите добавить?" />
    //     </FormLayout>
    // </ModalPage>);
}

export default CreateTournament;