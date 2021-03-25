import React from 'react'
import '../../App.css'

function Tabela(props) {
    return (
      <table className='table table-borderless tabela table-responsive'>
        {props.children}
      </table>
    )
}

export default Tabela
