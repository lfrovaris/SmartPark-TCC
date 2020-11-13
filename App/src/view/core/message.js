import Toast from 'react-native-tiny-toast';

export default function showMessage(message) {
    Toast.show(message, { position: 1, containerStyle: { marginTop: 40 }});
}