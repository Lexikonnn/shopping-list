import { Router, Request, Response } from 'express';
import Item from '../models/Item';

const router = Router();

// Vytvoření položky
router.post('/items', async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
});

// Získání všech položek
router.get('/items', async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

// Získání jedné položky
router.get('/items/:id', async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

// Aktualizace položky
router.put('/items/:id', async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
});

// Smazání položky
router.delete('/items/:id', async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

// Přidání nového produktu
router.post('/items', async (req: Request, res: Response) => {
    const { name, id } = req.body;
  
    if (!name || !id) {
      return res.status(400).json({ message: 'Name and ID are required' });
    }
  
    try {
      const newItem = new Item({ name, id });
      const item = await newItem.save();
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(400).json({ message: 'Unknown error' });
      }
    }
  });

export default router;
