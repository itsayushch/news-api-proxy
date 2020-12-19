const app = require('express')();
const qs = require('querystring');
const fetch = require('node-fetch');

app.get('/v2/:route', async (req, res) => {
    const resp = await fetch(`https://newsapi.org/v2/${req.params.route}?${qs.stringify(req.query)}`)
    const data = await resp.json();

    return res.json(data);
});

app.listen(80, () => console.log('READY on PORT 80'));