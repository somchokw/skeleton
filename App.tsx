import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {
  const [clipboardContent, setClipboardContent] = useState('');

  useEffect(() => {
    let interval: any;
    const checkClipboard = async () => {
      const content = await Clipboard.getString();
      if (content !== clipboardContent) {
        setClipboardContent(content);
      }
    };

    // Check the clipboard every 500 milliseconds
    interval = setInterval(checkClipboard, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text>Clipboard Content: {clipboardContent}</Text>
    </View>
  );
};

export default App;
