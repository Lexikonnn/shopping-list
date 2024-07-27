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
const List_1 = __importDefault(require("../models/List"));
const router = (0, express_1.Router)();
// Vytvoření položky
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, isCompleted, isEditModeList } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    try {
        const newList = new List_1.default({ name, isCompleted, isEditModeList });
        const list = yield newList.save();
        res.status(201).json(list);
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
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lists = yield List_1.default.find();
        res.json(lists);
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
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield List_1.default.findById(req.params.id);
        if (list) {
            res.json(list);
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
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield List_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (list) {
            res.json(list);
        }
        else {
            res.status(404).json({ message: 'List not found' });
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
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield List_1.default.findByIdAndDelete(req.params.id);
        if (list) {
            res.json({ message: 'List deleted' });
        }
        else {
            res.status(404).json({ message: 'List not found' });
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
exports.default = router;
