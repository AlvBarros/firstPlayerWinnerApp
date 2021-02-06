import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import DefaultText from "../../atoms/DefaultText";
import { FPWTheme, LightTheme } from "../../themes/interface";

type SubtitleTextProps = {
    theme?: FPWTheme;
}

const styles = StyleSheet.create({});

const SubtitleText: FunctionComponent<SubtitleTextProps> = ({ children, theme }) => {
    const _theme = !!theme ? theme : new LightTheme();

    return (
        <DefaultText fontSize={14} fontWeight={'light'} color={_theme.titleColor}>
            {children}
        </DefaultText>
    );
}

export default SubtitleText;