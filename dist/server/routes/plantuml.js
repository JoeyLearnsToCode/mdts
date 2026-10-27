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
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantumlRouter = void 0;
const express_1 = require("express");
const logger_1 = require("../../utils/logger");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const plantuml = require('node-plantuml-back');
const createSvgGenerator = (plantumlModule) => (diagram) => __awaiter(void 0, void 0, void 0, function* () {
    const svg = yield new Promise((resolve, reject) => {
        const gen = plantumlModule.generate({ format: 'svg' });
        let svgData = '';
        gen.out.on('data', (chunk) => {
            svgData += chunk.toString();
        });
        gen.out.on('end', () => {
            resolve(svgData);
        });
        gen.out.on('error', (error) => {
            reject(error);
        });
        gen.in.write(diagram);
        gen.in.end();
    });
    return svg;
});
const plantumlRouter = (plantumlModule = plantuml) => {
    const router = (0, express_1.Router)();
    const generateSvg = createSvgGenerator(plantumlModule);
    router.post('/svg', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { diagram } = req.body;
        if (!diagram) {
            return res.status(400).send('diagram body parameter is required.');
        }
        try {
            const svg = yield generateSvg(diagram);
            res.setHeader('Content-Type', 'image/svg+xml');
            res.send(svg);
        }
        catch (error) {
            logger_1.logger.error('Error generating PlantUML diagram:', error);
            res.status(500).send('Error generating PlantUML diagram.');
        }
    }));
    return router;
};
exports.plantumlRouter = plantumlRouter;
