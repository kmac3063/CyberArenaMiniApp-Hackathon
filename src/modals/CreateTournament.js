import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import {ModalPage} from "@vkontakte/vkui";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import SelectMimicry from "@vkontakte/vkui/dist/components/SelectMimicry/SelectMimicry";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";

const CreateTournament = (props) => {
    const [tourName, setTourName] = useState("Example");
    const [dateBegin, setDateBegin] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [ruleText, setRuleText] = useState();
    const [tourType, setTourType] = useState();
    const [tourPicture, setTourPicture] = useState();
    const [maxCommand, setMaxCommand] = useState();
    const [gameName, setGameName] = useState();
    const [price, setPrice] = useState();
    const [prize, setPrize] = useState();

    const buildTour = () => {

    }

    return <ModalPage
        id={"createTournament"}
        header={
            <ModalPageHeader
                left={<PanelHeaderButton onClick={props.out}><Icon24Cancel /></PanelHeaderButton>}
                right={<PanelHeaderButton onClick={() => props.create(buildTour())}> <Icon24Done /></PanelHeaderButton>}
            >
                Создание турнира
            </ModalPageHeader>
        }
    >
        <FormLayout>
            <FormLayoutGroup>
                <Input type="text" align="center" placeholder="Введите название турнира"/>
            </FormLayoutGroup>

            <SelectMimicry top="Страна" placeholder="Выбрать страну" onClick={() => {}} />
            <SelectMimicry top="Город" placeholder="Выбрать город" disabled />

            <FormLayoutGroup top="Пол">
                <Radio name="sex" value={0} defaultChecked>Любой</Radio>
                <Radio name="sex" value={1}>Мужской</Radio>
                <Radio name="sex" value={2}>Женский</Radio>
            </FormLayoutGroup>

            <SelectMimicry top="Школа" placeholder="Выбрать школу" disabled />
            <SelectMimicry top="Университет" placeholder="Выбрать университет" disabled />

            <FormLayoutGroup top="Дополнительно">
                <Checkbox>С фотографией</Checkbox>
                <Checkbox>Сейчас на сайте</Checkbox>
            </FormLayoutGroup>

            <FormLayoutGroup top="Работа">
                <Input placeholder="Место работы" />
                <Input placeholder="Должность" />
            </FormLayoutGroup>

            <FormLayoutGroup top="Дата рождения">
                <SelectMimicry placeholder="День рождения" disabled />
                <SelectMimicry placeholder="Месяц рождения" disabled />
                <SelectMimicry placeholder="Год рождения" disabled />
            </FormLayoutGroup>
        </FormLayout>
    </ModalPage>
}

export default CreateTournament;