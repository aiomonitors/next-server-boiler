import { useRef, useEffect } from 'react'

import Palette from '../styles/Palette'

const resetScrollEffect = ({ element }) => {
    element.current.scrollTop = element.current.scrollHeight
  }

const Console = props => {
    const tableRef = useRef(null)
    useEffect(() => resetScrollEffect({ element: tableRef }), [props])
    return (
        <div className="container" ref={tableRef}>
            {
                props.messages.map(message => { return <div className={message.type === 'error' ? 'message error' : 'message success'}>{message.message}</div>})
            }
        <style jsx>{`
            .container {
                width: 300px;
                height: 300px;
                background-color: ${Palette.Console.Background};
                font-family: monospace;
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                padding: 10px;
                overflow-y: auto;
                margin-top: 10px;
            }

            .container .message {
                font-size: 18px;
                font-weight: 500;
            }

            .container .error {
                color: ${Palette.Console.Red};
                font-size: 18px;
                font-weight: 500;
            }

            .container .success {
                color: ${Palette.Console.Green};
                font-size: 18px;
                font-weight: 500;
                background-color: transparent;
            }

            @media screen and (min-width: 768px) {
                .container {
                    width: 680px;
                }
            }
        `}</style>
        </div>
    )
}

export default Console