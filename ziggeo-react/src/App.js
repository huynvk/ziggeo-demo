import React from 'react';
import { ZiggeoRecorder } from 'react-ziggeo';
const API_KEY = 'r1c629f32f9f64c8313974b30782fae7';
const VIDEO_TOKEN = 'r1da356ec9908954ca7bc49f48385727';

const App = () => {
  const handleRecorderRecording = (embedding) => {
    console.log('Recorder onRecording');
  };

  const handleRecorderUploading = (embedding) => {
    console.log('Recorder uploading');
  };

  return (
    <div>
      <ZiggeoRecorder
        apiKey={API_KEY}
        video={VIDEO_TOKEN}
        height={180}
        width={320}
        onRecording={handleRecorderRecording}
        onUploading={handleRecorderUploading}
        // onRef={(ref) => setRecorder(ref)}
      />
    </div>
  );
};

export default App;
