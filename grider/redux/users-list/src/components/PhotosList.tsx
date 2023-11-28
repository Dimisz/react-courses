import { Album } from "../models/album";
import { Photo } from "../models/photo";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

interface Props {
  album: Album;
}
const PhotosList = ({album}: Props) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  let content;
  if(isFetching){
    content = <Skeleton className="h-8 w-8" times={4} />;
  }
  else if(error){
    content = <div>Error fetching photos</div>;
  }
  else {
    content = data.map((photo: Photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    })
  }
  return(
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">
          Photos In {album.title}
        </h3>
        <Button 
          loading={addPhotoResults.isLoading} 
          onClick={() => addPhoto(album)}
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;