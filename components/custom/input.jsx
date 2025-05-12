const classes = `py-2 px-2 border border-prim rounded outline-none peer bg-transparent w-full`


const Input = ({ id, textArea, type }) => {
    return (
        <div className="relative">
            {textArea ? <textarea className={classes} id={id} placeholder="" /> : <input type={type ? type : 'text'} id={id} className={classes} placeholder="" />}

            <label htmlFor={id} className="absolute left-2 top-[-1rem] px-2 bg-white text-prim 
            translate-y-1.5
            text-sm
            peer-focus:translate-y-1.5 
            peer-focus:text-sm
            peer-placeholder-shown:translate-y-6
            peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-prim
            transition-all ">{id}</label>
        </div >
    )
}

export default Input