import React, { useEffect, useState } from 'react'
import { api } from '../api'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await api.get('/tasks')
      setTasks(res.data || [])
    } catch (err) {
      console.error(err); alert('Failed to load tasks')
    } finally { setLoading(false) }
  }

  useEffect(() => {
    load()
    const handler = () => load()
    window.addEventListener('tasksUpdated', handler)
    return () => window.removeEventListener('tasksUpdated', handler)
  }, [])

  async function toggleComplete(t) {
    try {
      await api.put('/tasks/' + t._id, { completed: !t.completed })
      load()
    } catch (err) { console.error(err) }
  }

  async function removeTask(t) {
    if (!confirm('Delete this task?')) return
    try {
      await api.delete('/tasks/' + t._id)
      load()
    } catch (err) { console.error(err) }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <ul>
        {tasks.length === 0 && <li>No tasks yet</li>}
        {tasks.map(t => (
          <li key={t._id}>
            <div>
              <strong style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</strong>
              <div className="meta">{t.description || ''} {t.dueDate ? '• due ' + new Date(t.dueDate).toLocaleDateString() : ''}</div>
            </div>
            <div className="actions">
              <button className="secondary" onClick={() => toggleComplete(t)}>{t.completed ? 'Undo' : 'Done'}</button>
              <button onClick={() => removeTask(t)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
