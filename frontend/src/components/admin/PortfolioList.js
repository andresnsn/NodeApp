import React, { useState } from 'react'
import { Table, Button, Image, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useApi } from '../../hooks/useApi'
import moment from 'moment'
import Dialog from './Dialog'
import PortfolioForm from './PortfolioForm'
import { deleteItem, editItem, addItem } from '../../services/api'

const PortfolioList = () => {
    const handleDel = (slug) => {
        deleteItem(slug)
    }
    const handleAdd = (slug, data) => {
        addPortfolioItem(data)
    }
    const handleEdit = (slug, data) => {
        editPortfolioItem(slug, data)
    }
    const[title, setTitle] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [longDescription, setLongDescription] = useState()
    const [image, setImage] = useState()
    const [slug, setSlug] = useState()
    const [tech, setTech] = useState()
    const [action] = useState({
        del: {
            header: 'Confirm delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            showBody: true,
            body: 'Are you sure you want to delete?',
            callback: handleDel
        },
        edit: {
            header: 'Edit portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callback: handleEdit
        },
        add: {
            header: 'Add new portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callback: handleAdd
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        btnLabel: '',
        body: ''
    })
    const [show, setShow] = useState(false)
    const { data } = useApi('/portfolio')
    const handleShow = (portfolio, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(portfolio?.title || '')
        setShortDescription(portfolio?.description || '')
        setLongDescription(portfolio?.longDescription || '')
        setImage(portfolio?.image || '')
        setSlug(portfolio?.slug || '')
        setTech(portfolio?.technologies || [])
    }

    const addPortfolioItem = (data) => {
        const tech = data.tech.map(i => {
            delete i._id
            return i
        })
        const newPortfolioItem = {
            title: data.title,
            description: data.shortDescription,
            longDescription: data.longDescription,
            image: data.image,
            technologies: tech
        }

        addItem(newPortfolioItem)
    }

    const editPortfolioItem = (slug, data) => {
        const tech = data.tech.map(i => {
            delete i._id
            return i
        })
        const editedPortfolioItem = {
            title: data.title,
            description: data.shortDescription,
            longDescription: data.longDescription,
            image: data.image,
            technologies: tech
        }
    
        editItem(slug, editedPortfolioItem)
    }

    return (
        <Container>
             <AddNewButton variant="primary" size="lg" onClick={() => handleShow(null, action.add)}>Add new</AddNewButton>{' '}
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
                            <tr key={item.slug}>
                            <td><Logo src={item.image} thumbnail /></td>
                            <td>{item.title}</td>
                            <td>{moment(item.createdAt).format('MMM-YYYY')}</td>
                            <td>
                                <Button variant="info" onClick={() => handleShow(item, action.edit)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleShow(item, action.del)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Dialog show={show} setShow={setShow} currentAction={currentAction} slug={slug}>
                    {currentAction.showBody && currentAction.body}
                    {!currentAction.showBody && (
                        <PortfolioForm 
                        title={title} setTitle={setTitle} 
                        shortDescription={shortDescription} setShortDescription={setShortDescription}
                        longDescription={longDescription} setLongDescription={setLongDescription}
                        image={image} setImage={setImage}
                        slug={slug}
                        tech={tech} setTech={setTech}
                        />
                    )}
            </Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`

const AddNewButton = styled(Button)`
    margin-bottom: 1rem;
`

export default PortfolioList