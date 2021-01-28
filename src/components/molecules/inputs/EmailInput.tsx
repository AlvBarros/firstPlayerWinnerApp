import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import DefaultText from "../../atoms/DefaultText";
import DefaultTextInput from "../../atoms/DefaultTextInput";
import { Regex } from "../../regex";
import { FPWTheme, LightTheme } from "../../themes/interface";

type EmailInputProps = {
    theme?: FPWTheme;
    value?: string;
    placeholder?: string;
    onChangeText: (v: string) => void;
    validate?: (v: string) => boolean;
}

const styles = StyleSheet.create({});

const EmailInput: FunctionComponent<EmailInputProps> = ({
    theme, 
    value, 
    placeholder, 
    onChangeText,
    validate
}) => {
    const _theme = !!theme ? theme : new LightTheme();
    const _placeholder = !!placeholder ? placeholder : '';

    let _value = !!value ? value : '';
    let _valid = (_value.length > 0 && !!validate) ? validate(_value) : true;

    return (
        <DefaultTextInput 
                    placeholder={'Email'}
                    value={_value}
                    secureTextEntry={false}
                    onChangeText={(v: string) => onChangeText(v)}
                    validate={(v: string) => Regex.EMAIL.test(v)}
                />
    );
}

export default EmailInput;