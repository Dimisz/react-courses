import { GoTrash } from "react-icons/go";
import { Photo } from "../models/photo";
import { useRemovePhotoMutation } from "../store";

interface Props {
  photo: Photo;
}
const PhotosListItem = ({photo}: Props) => {
  const [ removePhoto ] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  }
  
  return(
    <div 
      onClick={handleRemovePhoto}
      className="relative cursor-pointer m-2">
      <img  className="h-20 w-20" src={photo.url} alt="random image"/>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className='text-3xl' />
      </div>
    </div>
  );
}

export default PhotosListItem;