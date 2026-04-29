import React from 'react'
import useWindowSize from '../hooks/UseWindowSize'

const DisplayWindowSize = () => {
    const {width, height} = useWindowSize();
  return (
    <div>
      A largura da janela á {width} e largura {height}
    </div>
  )
}

export default DisplayWindowSize
