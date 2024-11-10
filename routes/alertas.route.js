import { Router } from 'express';
import { AlertasController } from '../controllers/alertas.controller.js';
import { verifyToken, verifyTrabajador } from '../middlewares/jwt.middlewares.js';

const router = Router();

// Ruta para obtener una alerta específica por el ID del fármaco
router.get('/farmaco/:id', verifyToken, verifyTrabajador, AlertasController.getAlertaByFarmacoId);

// Ruta para actualizar el stock mínimo de una alerta específica
router.put('/:id', verifyToken, verifyTrabajador, AlertasController.updateAlerta);

export default router;