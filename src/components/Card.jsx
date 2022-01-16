/* eslint-disable jsx-a11y/anchor-is-valid */
import {useContext} from 'react'
import {AlbumPreviewContext} from './List'
import Urls from '../store/Urls'

export default function Card({card}) {
  const {setSelectedUser} = useContext(AlbumPreviewContext)
  const {placeholderAvatarURL} = Urls()

  const handleClick = e => {
    e.preventDefault()
    setSelectedUser(card)
  }

  return (
    <div className="d-flex text-muted pt-3">
      <img
        src={placeholderAvatarURL}
        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
        alt="album"
        height={32}
        width={32}
      />
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <div>
            <strong className="text-gray-dark">{card.name}</strong>
            <span className="d-block">
              {card.username} | {card.phone} | {card.website}
            </span>
          </div>
          <a
            className="btn btn-outline-primary btn-sm"
            href="#"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#modalAlbumDetail"
            onClick={handleClick}>
            <small>View Details</small>
          </a>
        </div>
      </div>
    </div>
  )
}
