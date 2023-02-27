import loading from './asset/spinner.gif'
function Spinner() {
    return ( <div>
    <img width={180}
        className='text-center mx-auto' src={loading} alt="loading" />
    </div> );
}

export default Spinner;