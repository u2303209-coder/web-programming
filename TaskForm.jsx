import React, { useState } from 'react'
import { api } from '../api'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title) return alert('Title is required')
    try {
      await api.post('/tasks', { title, description, dueDate: dueDate || null })
      setTitle(''); setDescription(''); setDueDate('')
      // simple event to notify list to reload
      window.dispatchEvent(new Event('tasksUpdated'))
    } catch (err) {
      console.error(err); alert('Failed to create task')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" />
        </div>
        <div className="col">
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        </div>
      </div>
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)"></textarea>
      <div style={{ textAlign: 'right' }}>
        <button type="submit">Add Task</button>
      </div>
    </form>
  )
}
