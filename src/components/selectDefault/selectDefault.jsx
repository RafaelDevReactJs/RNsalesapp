import './select-default.scss'

function SelectDefault(props) {

    return (
        <div className='select-default'>
            <span>{props?.label}</span>
            <select
                id={props?.id}
                name={props?.name}
                style={{width: props?.width, height: props?.height}}
                onChange={props?.onChange}
            >
                {props.options.map(item => <option key={props.options.indexOf(item)}>{item}</option>)}
            </select>
        </div>
    );
}

export default SelectDefault;