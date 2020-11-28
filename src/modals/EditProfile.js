import React, {useState} from 'react';
import {IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, ModalPage, ModalRoot} from "@vkontakte/vkui";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

const EditProfile = (fetchedUser) => {
    const [activeModal, setActiveModal] = useState(null);
    const save = () => {
        console.log("save");
        setActiveModal(null)
    }
    return (<div></div>);
}

export default EditProfile