import { Router, Request, Response } from 'express';
import Product from '../models/Product';

const router = Router();

// Vytvoření položky
router.post('/products', async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
});

// Získání všech položek
router.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
});

// Získání jedné položky
router.get('/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
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
router.put('/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'product not found' });
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
router.delete('/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ message: 'product deleted' });
    } else {
      res.status(404).json({ message: 'product not found' });
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
router.post('/products', async (req: Request, res: Response) => {
    const { name, id } = req.body;
  
    if (!name || !id) {
      return res.status(400).json({ message: 'Name and ID are required' });
    }
  
    try {
      const newProduct = new Product({ name, id });
      const product = await newProduct.save();
      res.status(201).json(product);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      } else {
        res.status(400).json({ message: 'Unknown error' });
      }
    }
  });

export default router;
