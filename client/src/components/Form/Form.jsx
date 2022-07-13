import style from './Form.module.css';


function Form (){
    return(<>
        <div >
            <form className={style.add} action='' onSubmit={(e) => {e.preventDefault()}}>

                <label htmlFor="">Name</label>
                <input type='' placeholder="Enter name here..."></input>

                <label htmlFor=""></label>
                <input type=''></input>

                <button>Add videogame</button>

            </form>
        </div>
    </>)
}

export default Form;