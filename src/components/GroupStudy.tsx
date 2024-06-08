import  { useState } from 'react';
import { HuddleProvider, HuddleClient } from '@huddle01/react';
import { useRoom, useLocalMedia, useRemoteVideo } from '@huddle01/react/hooks';
import ShowPeers from './ShowPeers';
import { Video } from '@huddle01/react/components';

const apiKey = (import.meta as any).env.VITE_API_KEY || 'default-api-key';
const projectId = (import.meta as any).env.VITE_PROJECT_ID || 'default-project-id';

const huddleClient = new HuddleClient({
  projectId: projectId,
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

const GroupStudyPage = () => {
  const { joinRoom } = useRoom({
    onJoin: () => {
      console.log('Joined room');
    },
  });

  const { fetchStream } = useLocalMedia();
  const { stream: remoteVideoStream } = useRemoteVideo({ peerId: 'your_peer_id_here' });

  const [meetingCode, setMeetingCode] = useState('');

  const handleJoinMeeting = async () => {
    try {
      await joinRoom({ roomId: meetingCode, token: apiKey });
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  return (
    <HuddleProvider client={huddleClient}>
      <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(to bottom, #3498db, #2ecc71)' }}>
        <div className="flex flex-col items-center space-y-4">
          {/* Alert for maintenance */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
            <p className="font-bold">Under Maintenance!</p>
            <p>This page is currently under maintenance. Please try again later.</p>
            <div className="mt-4">
              <p className="font-semibold">Powered By Huddle01</p>
              <img src="https://50wheel.com/wp-content/uploads/2023/04/huddle01-logo.jpeg" alt="Huddle01 Logo" className="w-20 h-20" />
            </div>
          </div>

          {/* Input for meeting code */}
          <input
            type="text"
            placeholder="Enter Meeting Code"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />

          {/* Webcam */}
          <button
            onClick={() => fetchStream({ mediaDeviceKind: 'cam' })}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Fetch Cam Stream
          </button>

          {/* Mic */}
          <button
            onClick={() => fetchStream({ mediaDeviceKind: 'mic' })}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Fetch Mic Stream
          </button>

          <button
            onClick={handleJoinMeeting}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Join Meeting
          </button>

          <ShowPeers />

          {/* Remote Video Stream */}
          {remoteVideoStream && <Video stream={remoteVideoStream} />} {/* Render remote video stream */}
        </div>
      </div>
    </HuddleProvider>
  );
};

export default GroupStudyPage;
