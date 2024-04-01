import React, {useState} from 'react';
import {Button, Container, Title} from "../styles/base.styles";
import {Image} from "react-native";
import ImageLoader from "./ImageLoader";

const Header = ({navigation, text}) => {
    const [imageIsLoading, setImageIsLoading] = useState(true)

    return (
        <Container style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: 60,
            marginTop: 13,
            marginLeft: 24,
            marginRight: 24
        }}>
            <Title margin={"0px"}>{text}</Title>
            <Button onPress={async () => navigation.navigate('ProfileScreen')}>
                {
                    imageIsLoading && <ImageLoader/>
                }
                <Image
                    onLoadEnd={() => setImageIsLoading(false)}
                    style={imageIsLoading ? {
                        position: 'absolute',
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: 'rgba(18, 18, 18, 1)'

                    } : {
                        resizeMode: 'cover',
                    }}
                    width={42}
                    height={42}
                    source={{
                        uri: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                    }}/>
            </Button>
        </Container>
    )
};

export default Header;