import React, {useState} from 'react';
import {IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, ModalPage, ModalRoot} from "@vkontakte/vkui";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";

const editProfile = (fetchedUser) => {
    const [activeModal, setActiveModal] = useState("edit");
    const save = () => {

    }
    return (<ModalRoot activeModal={activeModal}>
        <ModalPage
            id={"edit"}
            onClose={setActiveModal(null)}
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
    </ModalRoot>);
}

export default editProfile