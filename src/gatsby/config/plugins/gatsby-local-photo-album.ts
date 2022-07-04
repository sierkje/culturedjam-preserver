import {
  PHOTO_ALBUM_SOURCE_NAME,
  PHOTO_ALBUM_SOURCE_PATH,
} from "../../../../plugins/gatsby-local-photo-album"

const gatsbyLocalPhotoAlbumFileSystemOptions = {
  name: PHOTO_ALBUM_SOURCE_NAME,
  path: PHOTO_ALBUM_SOURCE_PATH,
}

const gatsbyLocalPhotoAlbum = () => `gatsby-local-photo-album`

export { gatsbyLocalPhotoAlbum, gatsbyLocalPhotoAlbumFileSystemOptions }
