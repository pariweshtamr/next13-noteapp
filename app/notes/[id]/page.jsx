import styles from "../Notes.module.css"

export default NotePage = async ({ params }) => {
  const getNote = async (noteId) => {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        next: { revalidate: 10 },
      }
    )
    const data = await res.json()
    return data
  }

  const note = await getNote(params.id)
  return (
    <div className="">
      <h1>Notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <h5>{note.created}</h5>
      </div>
    </div>
  )
}
