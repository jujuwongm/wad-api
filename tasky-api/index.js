import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

// Update Task
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Task.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Task Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Task' });
    }
});

// delete Task
router.delete('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Task.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Task' });
    }
});
export default router;