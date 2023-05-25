import { Button } from 'antd'
import React from 'react'

const How = () => {
  return (
    <div className='testmonies' style={{marginTop:'2rem'}}>
        <h2 style={{textAlign:'center'}}>How it works</h2>
      <h6 style={{textAlign:'center'}}>Get started with this app with three steps</h6>
      <div className="test-data">
        <div className="one-test">
          <img src="data:image/jpeg;base64,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" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, suscipit.</p>
        </div>
        <div className="one-test">
        <img src="https://i0.wp.com/chicagoreader.com/wp-content/uploads/2022/05/best-dating-sites.jpg?fit=1200%2C798&ssl=1" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, suscipit.</p>

            </div> <div className="one-test">
            <img src="https://i0.wp.com/chicagoreader.com/wp-content/uploads/2022/05/best-dating-sites.jpg?fit=1200%2C798&ssl=1" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, suscipit.</p>

            </div>
            
      </div>
      <div className="buttons">
                <Button className="btn">
                    Find your match
                </Button>
            </div>
    </div>
  )
}

export default How