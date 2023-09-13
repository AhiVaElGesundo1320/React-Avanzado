import React from 'react'
import { useOnlineStatus } from './OnlineStatus'

const StatusBar = () => {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  const handleClick = () => {
    console.log('✅ Progress saved');
  }

  return (
    <button disable={!isOnline} onClick={handleClick}>{isOnline ? 'Save Progress' : 'Reconnecting...'}</button>
  )
}
const CheckoutOnlineRed = () => {

  return (
    <div>
      <SaveButton />
      <StatusBar />
    </div>
  )
}

export default CheckoutOnlineRed
