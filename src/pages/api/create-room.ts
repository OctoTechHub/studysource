import axios from 'axios';
 
const handler = async (req, res) => {
  try {
    const { data } = await axios.post(
      'https://api.huddle01.com/api/v1/create-room',
      {
        title: 'Huddle01 Meet',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.API_KEY as string,
        },
      }
    );
 
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
 
export default handler;