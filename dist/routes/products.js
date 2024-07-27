"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = __importDefault(require("../models/Product"));
const router = (0, express_1.Router)();
// Vytvoření položky
router.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = new Product_1.default(req.body);
        const product = yield newProduct.save();
        res.status(201).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error' });
        }
    }
}));
// Získání všech položek
router.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        res.json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
}));
// Získání jedné položky
router.get('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.findById(req.params.id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
}));
// Aktualizace položky
router.put('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: 'product not found' });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error' });
        }
    }
}));
// Smazání položky
router.delete('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.findByIdAndDelete(req.params.id);
        if (product) {
            res.json({ message: 'product deleted' });
        }
        else {
            res.status(404).json({ message: 'product not found' });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
}));
// Přidání nového produktu
router.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, id } = req.body;
    if (!name || !id) {
        return res.status(400).json({ message: 'Name and ID are required' });
    }
    try {
        const newProduct = new Product_1.default({ name, id });
        const product = yield newProduct.save();
        res.status(201).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error' });
        }
    }
}));
exports.default = router;
