import React, {useState} from "react";

const FilteredForm = ({handleFilter}) => {
   const [filterValue, setFilterValue] = useState('')
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={filterValue}
                onChange={(e) => {setFilterValue(e.target.value)}}
            />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleFilter(filterValue)}
                    >
                        Button
                    </button>
                </div>
        </div>
    )
}

export default FilteredForm