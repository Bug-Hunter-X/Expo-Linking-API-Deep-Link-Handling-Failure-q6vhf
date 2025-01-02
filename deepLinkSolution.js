```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      try {
        const url = await Linking.getInitialURL();
        setInitialUrl(url);
      } catch (error) {
        console.error('Error getting initial URL:', error);
      }
    };
    getInitialUrl();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle the deep link
      const urlParts = new URL(initialUrl);
      const path = urlParts.pathname;
      // handle the path according to your logic
      console.log('Deep link received:', initialUrl);
      // ... handle path ...
      setInitialUrl(null);  // Reset for subsequent navigation
    }
  }, [initialUrl]);

  // ... rest of your app code
};

export default App;
```