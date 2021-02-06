import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import DefaultText from "../../atoms/DefaultText";
import DefaultTextInput from "../../atoms/DefaultTextInput";
import { Regex } from "../../regex";
import { FPWTheme, LightTheme } from "../../themes/interface";

type PasswordInputProps = {
    theme?: FPWTheme;
    value?: string;
    placeholder?: string;
    onChangeText: (v: string) => void;
    validate?: (v: string) => boolean;
}

const styles = StyleSheet.create({});

const PasswordInput: FunctionComponent<PasswordInputProps> = ({
    theme, 
    value, 
    placeholder, 
    onChangeText,
    validate
}) => {
    const _theme = !!theme ? theme : new LightTheme();
    const _placeholder = !!placeholder ? placeholder : 'Senha';

    let _value = !!value ? value : '';
    let _valid = (_value.length > 0 && !!validate) ? validate(_value) : true;

    return (
        <DefaultTextInput 
                    placeholder={_placeholder}
                    value={_value}
                    secureTextEntry={true}
                    onChangeText={(v: string) => onChangeText(v)}
                />
    );
}

export default PasswordInput;