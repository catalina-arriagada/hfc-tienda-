'use client'
const ErrorComponent = ({error, reset}) => {
    return (
    <div style={{color: 'white', background: 'red'}}>{error.message}
        <button style={{color: 'white', background: 'blue'}} onClick={reset}>Intentalo denuevo</button>
    </div>
    )
};

export default ErrorComponent;