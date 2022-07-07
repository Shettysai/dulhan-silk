import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const MessengerChat = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: window ? window : undefined,
    threshold: 150,
  });

  return (
    trigger && 'chat'
  );
};

export default MessengerChat;
