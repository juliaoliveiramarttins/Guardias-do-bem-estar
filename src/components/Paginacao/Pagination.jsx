import { useState } from 'react'
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    const [currentPage, setCurrentPage] = useState(1)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (event, pageNumber) => {
        event.preventDefault()
        paginate(pageNumber)
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a
                                href='!#'
                                className={`page-link ${currentPage === number ? 'active' : ''}`}
                                onClick={(event) => handleClick(event, number)}
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
