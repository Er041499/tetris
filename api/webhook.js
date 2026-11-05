const APPS_URL = 'https://script.google.com/macros/s/AKfycbzppH9GrMwhwVgBG_ERQmmR79-mQADVjsRW0pwkoB-kaiP-qnWIWJUCbm1vM-OY2WnKZA/exec';

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await fetch(APPS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(req.body),
        redirect: 'follow'
      });
    } catch (e) {}
  }
  res.status(200).send('ok');
};
