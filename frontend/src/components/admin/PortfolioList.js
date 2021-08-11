import React, { useState } from 'react'
import { Table, Button, Image, Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { useApi } from '../../hooks/useApi'
import moment from 'moment'
import Dialog from './Dialog'

const PortfolioList = () => {
    const [action, setAction] = useState({
        del: {
            header: 'Confirm delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm'
        },
        edit: {
            header: 'Edit portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save'
        },
        add: {
            header: 'Add new portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save'
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        btnLabel: ''
    })
    const [show, setShow] = useState(false)
    const { data } = useApi('/portfolio')
    const handleShow = (slug, actn) => {
        setCurrentAction(actn)
        setShow(true)
    }
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { data?.data?.map(item => {
                        return(
                            <tr>
                            <td><Logo src={item.image} thumbnail /></td>
                            <td>{item.title}</td>
                            <td>{moment(item.createdAt).format('MMM-YYYY')}</td>
                            <td>
                                <Button variant="info">Edit</Button>
                                <Button variant="danger" onClick={() => handleShow(item.slug, action.del)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Dialog show={show} setShow={setShow} currentAction={currentAction}>

            </Dialog>
        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`

export default PortfolioList