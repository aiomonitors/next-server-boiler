const LoadingPage = props => {
    return (
        <div className="main">
            <div className="donut loader"></div>
            <div className="text">{props.text}</div>
            <style jsx global>{`
                .donut {
                    display: inline-block;
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #7983ff;
                    border-radius: 50%;
                    animation: donut-spin 1.2s linear infinite;
                    margin-top: 10px;
                }

                .main {
                    height: 80vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 20px;
                }

                .main .loader {
                    width: 100px;
                    height: 100px;
                    margin-bottom: 10px;
                }

                .main .text {
                    color: white;
                }

            `}</style>
        </div>
    )
}

export default LoadingPage;