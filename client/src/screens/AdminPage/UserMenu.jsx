import React from 'react'
import Button from '../../components/Button/Button'
import EditableTable from '../../components/Table/Table'

const UserMenu = () => {
    return (
        <div className='menu-content-container'>
            <Button label="Add" color={'red'} />
            <EditableTable />
        </div>
    )
}

export default UserMenu