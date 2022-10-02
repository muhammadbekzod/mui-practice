import React from 'react'
import LoadingButtonsTransition from './buttonExample'
import CountrySelect from './chooseYourConuntry'
import BasicPagination from './pagination'

const Homepage = () => {
    return (
        <div>
            <CountrySelect />
            <LoadingButtonsTransition />
            <BasicPagination />
        </div>
    )
}

export default Homepage