import React, {useState} from 'react';
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Icon56GhostOutline from '@vkontakte/icons/dist/56/ghost_outline';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Icon56HideOutline from '@vkontakte/icons/dist/56/hide_outline';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const TourGrid = (props) => {
    return <Div>
        <Placeholder
            icon={<Icon56HideOutline />}
            header="Турнирная сетка пока недоступна"
        >
            Ожидайте, когда начнется турнир и организатор её опубликует
        </Placeholder>
    </Div>
}

export default TourGrid;
