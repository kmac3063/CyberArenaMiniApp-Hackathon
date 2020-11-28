import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import {ModalPage} from "@vkontakte/vkui";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

const EditProfile = (props) => {
    const [text, setText] = useState("");

    return <ModalPage
        id={"editProfile"}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={props.out}><Icon24Cancel/></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={() => props.save(text)}><Icon24Done/></PanelHeaderButton>}
            >
                Редактирование
            </ModalPageHeader>
        }
    >
        <FormLayout>
            <Textarea top="Новый никнейм" placeholder="Введите новый никнейм"
            onChange={(e) => setText(e.target.value)}/>
        </FormLayout>
    </ModalPage>
}

export default EditProfile