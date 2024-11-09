


const showdatafunction=(data)=>{
    return data?.map((item)=>{
        return <div className="showdatafunction-main-container"><div>{item.emailid}</div><div>{item.content}</div></div>
    })
}
export {showdatafunction}