import { createRandomSong } from '../data/data';
import { useAppDispatch, useAppSelector } from '../store';
import { songsSlice } from '../store/songsSlice';

function SongPlaylist() {
  const songs = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const handleSongAdd = (song: string) => {
    dispatch(songsSlice.actions.addSong(song));
  };

  const handleSongRemove = (song: string) => {
    dispatch(songsSlice.actions.removeSong(song));
  };

  const renderedSongs = songs.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
