import React from 'react'
import { Table, Button, Image } from 'react-bootstrap'
import styled from 'styled-components'

const PortfolioList = () => {
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
                    <tr>
                        <td><Logo src="https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" thumbnail /></td>
                        <td>Título 1</td>
                        <td>Otto</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Título 2</td>
                        <td>Thornton</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Título 3</td>
                        <td>@twitter</td>
                        <td>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`

export default PortfolioList