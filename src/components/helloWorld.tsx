
export function Hello() {
  const message = {
    message: "एक चक्के ने वर्ल्डकप नही जीतया!"
  };

  const messageJson = JSON.stringify(message, null, 2);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{messageJson}</h1>
    </div>
  );
}

export default Hello;