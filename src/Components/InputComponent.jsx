import '../cssfolder.css/InputComponent.css'


export default function InputComponent({width,height,borderRadius,paddingLeft,onFocus,boxShadow,onBlur,placeholder,onChange})
{
    return(<>
        <input onFocus={onFocus} onBlur={onBlur} type="text" onChange={onChange} className="inputtag" style={{width:width,height:height,borderRadius:borderRadius,paddingLeft:paddingLeft,boxShadow:boxShadow}} placeholder={placeholder}/> 
    </>)
}