
export default async function handler(req, res){
const API_KEY = process.env.KEY;
 
    try {
        const omdbUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;
        const omdbResponse = await fetch(omdbUrl);
        const data = await omdbResponse.json();
 
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch from OMDB' });
    }
}