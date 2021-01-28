import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Colors } from '../../colors';
import DefaultText from "../../atoms/DefaultText";
import ClickableComponent from "../../atoms/ClickableComponent";
import SubtitleText from "../text/SubtitleText";

type TextButtonProps = {
    title: string;
    onPress: Function;
    fontWeight?: 'light' | 'semibold' | 'bold' | undefined;
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: Colors.GREEN,
        borderRadius: 5,
        paddingVertical: 9,
        alignItems: 'center'
    }
});

const TextButton: FunctionComponent<TextButtonProps> = ({ title, onPress, fontWeight }) => {
    const _fontWeight = fontWeight ? fontWeight : undefined;
    return (
        <ClickableComponent onPress={() => onPress()}>
            <DefaultText
                fontWeight={_fontWeight}
            >
                {title}
            </DefaultText>
        </ClickableComponent>
    );
};

export default TextButton;