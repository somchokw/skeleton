import React, {useEffect, useState} from 'react';
import Clipboard, {useClipboard} from '@react-native-clipboard/clipboard';
import {View, Text, Button} from 'react-native';

function MyComponent() {
  Clipboard.getString().then(clipboardContent => {
    console.log('Clipboard content: ', clipboardContent);
  });
  // const [clipboardContent, setClipboardContent] = useState('');

  // useEffect(() => {
  //  const clipboardListener = Clipboard.addListener(clipboard => {
  //    setClipboardContent(clipboard);
  //  });
  //   return () => {
  //     clipboardListener.remove();
  //   };
  // }, []);

  return (
    <View>
      <Text>Clipboard Content: </Text>
    </View>
  );
}

export default MyComponent;
