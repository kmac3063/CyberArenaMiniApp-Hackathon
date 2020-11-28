import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {ModalPage} from "@vkontakte/vkui";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

const AddGame = (props) => {
    const [text, setText] = useState("");

    return <ModalPage
        id={"addGame"}
        onClose={props.out}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={props.out}><Icon24Cancel/></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={(() => props.save(text))}><Icon24Done/></PanelHeaderButton>}
            >
                Добавление игры
            </ModalPageHeader>
        }
    >
        <FormLayout>
            <Textarea top="Новый игра" placeholder="Какую игру вы хотите добавить?"
            onChange = {(e) => setText(e.target.value)}/>
        </FormLayout>
    </ModalPage>
}

export default AddGame