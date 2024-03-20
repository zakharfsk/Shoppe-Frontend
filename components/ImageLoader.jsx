import React from 'react';
import ContentLoader, {Rect} from "react-content-loader/native";
import {Circle} from "react-native-svg";

const ImageLoader = () => {
    return (
        <ContentLoader
            speed={0.6}
            width={40}
            height={40}
            viewBox="0 0 40 40"
            backgroundColor="rgba(54, 54, 54, 1)"
            foregroundColor="#c0c0c0">
            <Circle cx="20" cy="20" r="20" />
        </ContentLoader>
    );
};

export default ImageLoader;