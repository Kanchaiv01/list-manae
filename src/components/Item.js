const Item = (props) => {
    console.log(props)
    const {id, list} = props
    
    return (<div>
                <button className="rounded-circle border-0 dis" 
                    style={{fontSize:'1rem',
                        padding:'0 8px',
                        margin:'0 10px',
                        opacity:'100%',
                        pointerEvents: 'none',
                        backgroundImage: 'linear-gradient(#5B42F3,70%,#e35752)',                            
                        color:'white'}}>
                    {id}
                </button>
                <span>
                    {list}
                </span>
           </div>
    ) 
}


export default Item