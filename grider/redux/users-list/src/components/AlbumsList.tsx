import { User } from "../models/user";
import { useAddAlbumMutation, useFetchAlbumsQuery} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { Album } from "../models/album";
import AlbumsListItem from "./AlbumsListItem";

interface Props {
  user: User;
}

const AlbumsList = ({user}:Props) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if(isFetching){
    content = <Skeleton className="h-10 w-full" times={3}/>;
  }
  else if(error){
    content = <div>Error loading albums</div>
  }
  else {
    content = data.map((album: Album) => {
      return <AlbumsListItem album={album} key={album.id} />
    });
  }
  return(
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button 
              loading={results.isLoading} 
              onClick={() => addAlbum(user)}>Add Album</Button>
        </div>
        <div>{content}</div>
    </div>
  );
}

export default AlbumsList;