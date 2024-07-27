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
const mongoose_1 = __importDefault(require("mongoose"));
const List_1 = __importDefault(require("./models/List")); // Importujte váš List model
// Připojení k databázi
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://localhost:27017/shoppinglist', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error connecting to MongoDB', err);
        }
        else {
            console.error('Unknown error', err);
        }
    }
});
// Data pro vložení
const lists = [
    { id: 1, name: 'Pondělí', isCompleted: false, isEditModeList: false },
    { id: 2, name: 'Tesco', isCompleted: false, isEditModeList: false },
    { id: 3, name: 'Babička', isCompleted: false, isEditModeList: false },
    { id: 4, name: 'Soused', isCompleted: false, isEditModeList: false },
];
// Vložení dat
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield List_1.default.insertMany(lists);
        console.log('Data inserted');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error inserting data', err);
        }
        else {
            console.error('Unknown error', err);
        }
    }
    finally {
        mongoose_1.default.connection.close();
    }
});
// Spusťte připojení k databázi a vložení dat
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectDB();
    yield seedDB();
});
run();
