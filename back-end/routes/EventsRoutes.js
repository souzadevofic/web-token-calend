import express from 'express';
import { createEvents, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/EventsController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - name
 *         - data
 *         - local
 *         - horarioinicio
 *         - horariotermino
 *         - descricao
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the event
 *         data:
 *           type: string
 *           format: date
 *           description: The date of the event
 *         local:
 *           type: string
 *           description: The location of the event
 *         horarioinicio:
 *           type: string
 *           description: The start time of the event (format HH:MM)
 *           example: "14:00"
 *         horariotermino:
 *           type: string
 *           description: The end time of the event (format HH:MM)
 *           example: "16:00"
 *         descricao:
 *           type: string
 *           description: A detailed description of the event
 *           example: "Workshop focado em desenvolvimento com JavaScript"
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: The events managing API
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new Event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: The event was successfully created
 *       400:
 *         description: Some input data is invalid
 */
router.post('/events', createEvents);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Returns the list of all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: The list of the events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get('/events', getAllEvents);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: The event description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found
 */
router.get('/events/:id', getEventById);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: The event was updated
 *       404:
 *         description: Event not found
 *       400:
 *         description: Some input data is invalid
 */
router.put('/events/:id', updateEvent);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The event ID
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: Event not found
 */
router.delete('/events/:id', deleteEvent);

export default router;

