import React, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStar, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'


const Icon = ({ nama }) => {
    if (nama == "Base") return <FontAwesomeIcon icon={faBarsStaggered} className="ms-1 me-2" />
    if (nama == "Pro") return <FontAwesomeIcon icon={faStar} className="ms-auto me-1" />

    return <FontAwesomeIcon icon={faUtensils} />
}

export default class ListCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "categories")
            .then(res => {
                // console.log("Response : ", res);
                const categories = res.data;
                this.setState({ categories });
            })
            .catch(error => {
                console.log("Error ya", error)
            })
    }

    render() {
        // console.log("Categories : ", this.state.categories)
        const { categories } = this.state
        const { changeCategory, categoriYangDipilih } = this.props;
        return (
            <Col md={2} className='mt-3'>
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item
                            key={category.id}
                            onClick={() => changeCategory(category.nama)}
                            className={categoriYangDipilih === category.nama && "category-aktif"}
                            style={{ cursor: 'pointer' }}
                        >
                            <h5>
                                <Icon nama={category.nama} /> {category.nama}
                            </h5>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}
