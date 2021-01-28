import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";

type ClickableComponentProps = {
    onPress: Function;
}

const ClickableComponent: FunctionComponent<ClickableComponentProps> = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            {children}
        </TouchableOpacity>
    );
};

export default ClickableComponent;