import React from 'react';
import { Text } from 'react-native';
import { colors } from '../globalStyle';

const CustomText = (props) => (
    <Text
        onPress={props.onPress}
        style={{
            overflow: props.overflow ? props.overflow : 'visible',
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            color: props.color ? props.color : colors.text,
            fontWeight: props.fontWeight,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            textDecorationLine: props.textDecorationLine,
            textAlign: props.textAlign,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            paddingLeft: props.paddingLeft,
            paddingRight: props.paddingRight,
            padding: props.padding,
            alignSelf: props.alignSelf,
            lineHeight: props.lineHeight,
            flexWrap: 'wrap',
            width: props.width,
            textTransform: props.textTransform,
            position: props.position,
            top: props.top,
            right: props.right,
            left: props.left,
            bottom: props.bottom,
        }}>
        {props.title}
    </Text>
);

export default CustomText;
