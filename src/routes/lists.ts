import { Router, Request, Response } from 'express';
import List from '../models/List';

const router = Router();

// Vytvoření položky
router.post('/', async (req: Request, res: Response) => {
  const { name, isCompleted, isEditModeList } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  try {
    const newList = new List({ name, isCompleted, isEditModeList });
    const list = await newList.save();
    res.status(201).json(list);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
});

// Získání všech položek
router.get('/', async (req: Request, res: Response) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

// Získání jedné položky
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const list = await List.findById(req.params.id);
    if (list) {
      res.json(list);
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
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (list) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'List not found' });
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
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const list = await List.findByIdAndDelete(req.params.id);
    if (list) {
      res.json({ message: 'List deleted' });
    } else {
      res.status(404).json({ message: 'List not found' });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

export default router;
