import { AccessToken, Role } from '@huddle01/server-sdk/auth';

async function generateAccessToken(roomId: string): Promise<string | null> {
  if (!roomId) {
    console.error('Room ID is required');
    return null;
  }

  try {
    const accessToken = new AccessToken({
      apiKey: process.env.API_KEY!,
      roomId,
      role: Role.HOST,
      permissions: {
        admin: true,
        canConsume: true,
        canProduce: true,
        canProduceSources: {
          cam: true,
          mic: true,
          screen: true,
        },
        canRecvData: true,
        canSendData: true,
        canUpdateMetadata: true,
      },
    });
    const token = await accessToken.toJwt();
    return token;
  } catch (error) {
    console.error('Error generating access token:', error);
    return null;
  }
}

export default generateAccessToken;
