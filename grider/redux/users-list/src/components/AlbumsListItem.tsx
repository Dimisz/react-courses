import { GoTrash } from "react-icons/go";
import { Album } from "../models/album";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

interface Props {
  album: Album;
}

const AlbumsListItem = ({ album }: Props) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const header = <>
    <Button 
      className="mr-2"
      loading={results.isLoading} 
      onClick={() => removeAlbum(album)}
    >
      <GoTrash/>
    </Button>
    {album.title}
  </>;
  return(
    <ExpandablePanel header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>  
  );
}

export default AlbumsListItem;