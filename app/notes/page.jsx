import Link from "next/link"
import styles from "./Notes.module.css"
import CreateNote from "./[id]/CreateNote"

export default NotesPage = async () => {
  const getNotes = async () => {
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
      { cache: "no-store" }
    )
    const data = await res.json()
    return data?.items
  }
  const notes = await getNotes()

  return (
    <div className="">
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>

      <CreateNote />
    </div>
  )
}

const Note = ({ note }) => {
  const { id, title, content, created } = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h2>{content}</h2>
        <h2>{created}</h2>
      </div>
    </Link>
  )
}
