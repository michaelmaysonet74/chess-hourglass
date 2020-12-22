import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { isIphoneSE } from '../../utils';

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        backgroundColor: '#FCFAFA',
        borderColor: '#969696',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 14,
        paddingTop: 14,
    },
    inputStyle: {
        color: '#454545',
        fontSize: isIphoneSE() ? 30 : 50,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
});

export const Input = (
    {
        keyboardType = 'number-pad',
        maxLength = 2,
        placeholder = '',
        onChangeText,
        value,
    }
) => {
    return (
        <View style={styles.containerStyle}>
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor="#A6A6A6"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
};
