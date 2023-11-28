import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../models/user';
import { faker } from '@faker-js/faker';
import { Album } from '../../models/album';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  tagTypes: ['Album', 'UsersAlbums'],
  endpoints(builder){
    return {
      fetchAlbums: builder.query({
        // providesTags: (_result, _error, user) => {
        //   return [{ type: 'Album', id: user.id }];
        // },
        providesTags: (result, _error, user) => {
          const tags = result.map((album: Album) => {
            return { type: 'Album', id: album.id }
          });
          tags.push({ type: 'UsersAlbums', id: user.id });
          return tags;
        },
        query: (user: User) => {
          return {
            url: '/albums',
            params: {
              userId: user.id
            },
            method: 'GET'
          };
        },
      }),
      addAlbum: builder.mutation({
        // invalidatesTags: (_result, _error, user) => {
        //   return [{ type: 'Album', id: user.id }];
        // },
        invalidatesTags: (_result, _error, user) => {
          return [{ type: 'UsersAlbums', id: user.id }];
        },
        query: (user: User) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          };
        }
      }),
      removeAlbum: builder.mutation({
        // invalidatesTags: (_result, _error, album) => {
        //   return [{ type: 'Album', id: album.userId }];
        // },
        invalidatesTags: (_result, _error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
        query: (album: Album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE'
          };
        },
      }),
    };
  }
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };