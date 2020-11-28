import React, {useState} from 'react';
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import {Button, ModalPage, Select, Textarea} from "@vkontakte/vkui";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import SelectMimicry from "@vkontakte/vkui/dist/components/SelectMimicry/SelectMimicry";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import DataBase from "../server/DataBase";

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

    let games = DataBase.getGameList();
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
            <FormLayoutGroup top="Название турнира">
                <Input type="text"/>
            </FormLayoutGroup>
            <FormLayoutGroup top="Игра">
                {/*<Select type="text">*/}
                {/*    {games.map((gameName) => {*/}
                {/*        return <option value ={gameName}>{gameName}</option>*/}
                {/*    })}*/}
                {/*</Select>*/}
                <Input type={"text"}/>
            </FormLayoutGroup>
            <FormLayout top="Описание турнира">
                <Textarea/>
            </FormLayout>
            <FormLayoutGroup top="Дата начала">
                <Input placeholder="Число" type="number"/>
                <Input placeholder="Месяц" type="number"/>
                <Input placeholder="Год" type="number"/>
            </FormLayoutGroup>
            <FormLayoutGroup top="Дата конца">
                <Input placeholder="Число" type="number"/>
                <Input placeholder="Месяц" type="number"/>
                <Input placeholder="Год" type="number"/>
            </FormLayoutGroup>


            <FormLayoutGroup top="Тип мероприятия"  bottom="В закрытое мероприятия можно попасть только по ссылке.">
                <Select type="text">
                    <option>Открытое</option>
                    <option>Закрытое</option>
                </Select>
            </FormLayoutGroup>

            <FormLayout top={"По количеству людей"}>
                <div>
                    <Radio name="radio" defaultChecked>Одиночное</Radio>
                    <Radio  name="radio" disabled>Командое</Radio>
                </div>
            </FormLayout>

            <FormLayoutGroup top="Турнирная сетка">
                <Select type="text" placeholder="Выберите турнирную сетку">
                    <option>Single-elimination</option>

                </Select>
            </FormLayoutGroup>

            <FormLayoutGroup top="Максимальное количество участников">
                <Input type={"number"}/>
            </FormLayoutGroup>

            <FormLayoutGroup top="">
            </FormLayoutGroup>
            <FormLayoutGroup top="Правила турнира" bottom={"Тут вы можете указать специфические ограничения."}>
                <Textarea/>
            </FormLayoutGroup>



        </FormLayout>
    </ModalPage>
}

export default CreateTournament;