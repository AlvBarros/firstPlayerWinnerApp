import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import DefaultText from "../../atoms/DefaultText";
import { FPWTheme, LightTheme } from "../../themes/interface";

type TitleTextProps = {
    theme?: FPWTheme;
    fontSize?: number;
}

const styles = StyleSheet.create({});

const TitleText: FunctionComponent<TitleTextProps> = ({ children, theme, fontSize }) => {
    const _theme = !!theme ? theme : new LightTheme();
    const _fontSize = !!fontSize ? fontSize : 24;

    return (
        <DefaultText fontSize={_fontSize} fontWeight={'semibold'} color={_theme.titleColor}>
            {children}
        </DefaultText>
    );
}

export default TitleText;