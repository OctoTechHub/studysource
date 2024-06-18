import { AccessToken, Role } from "@huddle01/server-sdk/auth";
 
export const dynamic = "force-dynamic";
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
 
  const roomId = searchParams.get("roomId");
 
  if (!roomId) {
    return new Response("Missing roomId", { status: 400 });
  }
 
  const accessToken = new AccessToken({
    apiKey: process.env.API_KEY!,
    roomId: roomId as string,
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
    }
  });
 
  const token = await accessToken.toJwt();
 
  return new Response(token, { status: 200 });
}