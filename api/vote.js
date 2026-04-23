import { kv } from '@vercel/kv';

const DEFAULT_VOTES = {
  contact: {
    Online: [],
    Classic: [],
    Immersive: [],
    MultiStep: []
  },
  pricing: {
    Online: [],
    Immersive: []
  }
};

export default async function handler(req, res) {
  // Allow CORS if needed, but since it's same origin on Vercel, it's fine.
  if (req.method === 'GET') {
    try {
      let data = await kv.get('meegle_votes_data');
      if (!data) {
        data = DEFAULT_VOTES;
      }
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || 'Failed to get votes' });
    }
  } else if (req.method === 'POST') {
    try {
      const { voterName, contactVote, pricingVote } = req.body;

      if (!voterName || !contactVote || !pricingVote) {
        return res.status(400).json({ error: 'Missing fields' });
      }

      let data = await kv.get('meegle_votes_data');
      if (!data) {
        data = JSON.parse(JSON.stringify(DEFAULT_VOTES));
      }

      // Ensure objects/arrays exist in case of weird state
      if (!data.contact) data.contact = { Online: [], Classic: [], Immersive: [], MultiStep: [] };
      if (!data.pricing) data.pricing = { Online: [], Immersive: [] };
      if (!data.contact[contactVote]) data.contact[contactVote] = [];
      if (!data.pricing[pricingVote]) data.pricing[pricingVote] = [];

      // Clean up previous votes by the same voterName to allow re-voting or prevent duplicates
      Object.keys(data.contact).forEach(key => {
        data.contact[key] = (data.contact[key] || []).filter(name => name !== voterName);
      });
      Object.keys(data.pricing).forEach(key => {
        data.pricing[key] = (data.pricing[key] || []).filter(name => name !== voterName);
      });

      // Add the new vote
      data.contact[contactVote].push(voterName);
      data.pricing[pricingVote].push(voterName);

      // Save back to KV
      await kv.set('meegle_votes_data', data);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || 'Failed to save vote' });
    }
  } else if (req.method === 'DELETE') {
    // 增加一个重置数据的隐藏接口，带有简单密钥保护
    try {
      const { secret } = req.body || {};
      
      // 使用简单的硬编码密钥，或者最好在 Vercel 环境变量中配置 ADMIN_SECRET
      const validSecret = process.env.ADMIN_SECRET || 'meegle-admin-888';
      
      if (secret !== validSecret) {
        return res.status(403).json({ error: 'Forbidden: Invalid secret key' });
      }

      await kv.set('meegle_votes_data', DEFAULT_VOTES);
      res.status(200).json({ message: 'Votes reset successfully', data: DEFAULT_VOTES });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || 'Failed to reset votes' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
