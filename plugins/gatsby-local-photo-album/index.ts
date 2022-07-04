// The tsconfig.json 'paths' do not work here.
import fromRoot from "../../src/helpers/from-root"

export const PHOTO_ALBUM_SOURCE_NAME = `photoAlbum`
export const PHOTO_ALBUM_SOURCE_PATH = fromRoot(`content/photo-albums`)
