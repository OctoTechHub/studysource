import { 
  usePeerIds, 
  useRemoteVideo, 
  useRemoteAudio, 
  useRemoteScreenShare 
} from '@huddle01/react/hooks';
import { Audio, Video } from '@huddle01/react/components';
import { FC } from 'react';

interface RemotePeerProps {
  peerId: string;
}

enum Role {
    HOST = 'HOST',
    CO_HOST = 'CO_HOST',
  }
  
  

const RemotePeer: FC<RemotePeerProps> = ({ peerId }) => {
  const { stream: videoStream } = useRemoteVideo({ peerId });
  const { stream: audioStream } = useRemoteAudio({ peerId });
  const { videoStream: screenVideoStream, audioStream: screenAudioStream } = useRemoteScreenShare({ peerId });

  return (
    <div>
      {videoStream && <Video stream={videoStream} />}
      {audioStream && <Audio stream={audioStream} />}
      {screenVideoStream && <Video stream={screenVideoStream} />}
      {screenAudioStream && <Audio stream={screenAudioStream} />}
    </div>
  );
};

const ShowPeers = () => {
  const { peerIds } = usePeerIds({ roles: [Role.HOST, Role.CO_HOST] });

  return (
    <div>
      {peerIds.map(peerId => {
        return <RemotePeer key={peerId} peerId={peerId} />;
      })}
    </div>
  );
};

export default ShowPeers;
