import {Card, TabController} from "react-native-ui-lib";

const onChangeText = (event) => {
    console.log(event);
}

export default function App() {
    return (

        <Card flex center onPress={() => console.log('pressed')}>
            <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>
        </Card>

    );
}
