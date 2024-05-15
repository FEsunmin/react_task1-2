import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import './CardComp.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
`


const CardComp = ({id, title, content, toggleDone, onRemove}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='cardLayout'>
        <div className='cardInfo'>
          <h2 className='cardTitle'>{title}</h2>
          <h3 className='cardCont'>{content}</h3>
        </div>

        <div className='cardBtns'>
          <button className='cardDelete' onClick={() => onRemove(id)}>삭제하기</button>
          <button className='cardBtn' onClick={toggleDone}>완료</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardComp
