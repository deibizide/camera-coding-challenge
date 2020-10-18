import React, { Component, useState } from 'react';
import AccessCamera from "./AccessCamera/AccessCamera";

import "./../styles/app.less";

const App: React.FC = () => {

  const [isUserReady, setIsUserReady] = useState(false);

  return (
    <div>
      <AccessCamera setIsUserReady={setIsUserReady} isUserReady={isUserReady} />
    </div>
  );

}

export default App
