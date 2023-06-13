import { Note } from '../components/Note';
import { NOTES } from '../constants/notes';
import './DevNotes.css';

export function DevNotes() {
  return (
    <div className='notes'>
      <h2>Notas de desarrollo</h2>
      <section className='notes-container'>
        {NOTES.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </section>
    </div>
  );
}
