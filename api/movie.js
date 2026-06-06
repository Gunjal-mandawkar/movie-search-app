
export default async function handler(req, res){
const API_KEY = process.env.OMDB_API_KEY;
const { title } = req.query;

    // Safety check: if no title was provided, tell the frontend immediately
    if (!title) {
        return res.status(400).json({ error: 'Title query parameter is required' });
    }
 
    try {
        const omdbUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;
        const omdbResponse = await fetch(omdbUrl);
        const data = await omdbResponse.json();
 
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch from OMDB' });
    }
}