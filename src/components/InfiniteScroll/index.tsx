import React from 'react'
import { Waypoint as ReactWaypoint } from 'react-waypoint'

type InfiniteScrollProps = {
  children: React.ReactNode
  loadMore: () => void
}

export default function InfiniteScroll({
  children,
  loadMore,
}: InfiniteScrollProps) {
  return (
    <>
      {children}
      <div style={{ marginTop: '12rem' }}>
        <ReactWaypoint onEnter={loadMore} />
      </div>
    </>
  )
}
