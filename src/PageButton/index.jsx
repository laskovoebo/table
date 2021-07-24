import React from "react";

const PageButton = ({
                        pages,
                        selectPage,
                        nextPage,
                        backFirstPage,
                        prewDisabled,
                        currentPage,
                        selectedPage
                    }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${ prewDisabled }`}>
                    <a className="page-link"
                       href="#"
                       onClick={() => backFirstPage()}

                    >
                        Previous
                    </a>
                </li>
                {pages.map((p) => {
                    return (
                        <li className={ selectedPage===p ? `page-item ${currentPage}` : `page-item` }>
                            <a className="page-link"
                               href="#"
                               onClick={() => selectPage(p)}>{p}
                            </a>
                        </li>
                    )
                })}
                <li className={`page-item ${ prewDisabled }`}>
                    <a className="page-link"
                       href="#"
                       onClick={() => nextPage()}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default PageButton;