
const Cell = ({ id, cell, setCells, go, setGo, cells, winningMsg }) => {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains('Circle') || e.target.firstChild.classList.contains('Cross');

        if (!taken) {
            if (go === 'Circle') {
                e.target.firstChild.classList.add('Circle');
                handleCellChange("Circle")
                setGo('Cross')
            }
        }
        if (go === 'Cross') {
            e.target.firstChild.classList.add('Cross');
            handleCellChange("Cross")
            setGo("Circle")
        }
    }


    const handleCellChange = (classname) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return classname
            }
            else {
                return cell

            }

        })
        setCells(nextCells)
    }



    return (
        <div className="w-[100px] h-[100px] border-2 border-black box-border flex justify-center items-center" id={id} onClick={!winningMsg && handleClick}>
            <div className=""></div>
        </div>
    )
}

export default Cell