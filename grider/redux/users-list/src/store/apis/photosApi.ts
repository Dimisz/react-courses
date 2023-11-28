import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album } from "../../models/album";
import { faker } from "@faker-js/faker";
import { Photo } from "../../models/photo";

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  tagTypes: ['Photo', 'PhotosAlbum'],
  endpoints(builder){
    return {
      fetchPhotos: builder.query({
        providesTags: (result, _error, album) => {
          const tags = result.map((photo: Photo) => {
            return { type: 'Photo', id: photo.id }
          });
          tags.push({ type: 'PhotosAlbum', id: album.id });
          return tags;
        },
        query: (album: Album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id
            },
            method: 'GET',
          }
        }
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (_result, _error, album) => {
          return [{ type: 'PhotosAlbum', id: album.id }];
        },
        query: (album: Album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true)
            }
          }
        }
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (_result, _error, photo) => {
          return [{ type: 'Photo', id: photo.id }];
        },
        query: (photo: Photo) => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`,
          }
        }
      })
    };
  }
});


export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };