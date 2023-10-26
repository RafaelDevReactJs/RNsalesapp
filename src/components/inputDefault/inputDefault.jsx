import './input-default.scss'

function InputDefault(props) {

    return (
        <div className='input-default'>
            <span>{props?.label}</span>
            <input
                id={props?.id}
                name={props?.name}
                type={props?.type}
                style={{width: props?.width, height: props?.height}}
                onChange={props?.onChange}
                value={props.value}
            />
        </div>
    );
}

export default InputDefault;