export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'service_y0bu2sr',
            template_id: 'template_n5tvaxa',
            user_id: 'BBE9FTEkbLIrWDe3A',
            template_params: {},
          }),
        });
  
        if (response.ok) {
          res.status(200).json({ message: 'Email sent' });
        } else {
          res.status(500).json({ message: 'Email failed' });
        }
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }