import React, { FunctionComponent } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../colors";
import { FPWTheme, LightTheme } from "../themes/interface";

enum FONTFAMILY {
    light = 'Poppins_300Light',
    semibold = 'Poppins_600SemiBold',
    bold = 'Poppins_700Bold'
}
enum FONTWEIGHT {
    light = '300',
    semibold = '600',
    bold = '700'
}

type DefaultTextProps = {
    theme?: FPWTheme;
    color?: string;
    fontSize?: number;
    fontWeight?: 'light' | 'semibold' | 'bold';
}

const style = (fontSize: number, fontWeight: 'light' | 'semibold' | 'bold') => {
    return StyleSheet.create({
        fontStyle: {
            fontFamily: FONTFAMILY[fontWeight],
            fontWeight: FONTWEIGHT[fontWeight],
            fontSize: fontSize
        }
    });
}

const DefaultText: FunctionComponent<DefaultTextProps> = ({ children, theme, color, fontSize, fontWeight }) => {
    const _theme = !!theme ? theme : new LightTheme();
    const _color = !!color ? color : theme?.titleColor;
    const _fontSize = !!fontSize ? fontSize : 18;
    const _fontWeight = !!fontWeight ? fontWeight : 'light';
    
    return (
        <Text style={[style(_fontSize, _fontWeight).fontStyle, {color: _color}]}>
            {children}
        </Text>
    );
};

export default DefaultText;