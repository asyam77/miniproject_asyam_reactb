import React, { Component } from 'react'
import { GetSearchProductList } from "../../helpers/gqlHasura"
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"
import Input from '../../elements/Input/Input';
import { useState } from 'react';
import Button from '../../elements/Button/Button';
import Card from "../../components/Card/Card";
import './product.css'
import  logo from '../../assets/logo3.png';

const ProductList = () => {
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(3)
    const { data, loading, error } = useQuery(GetSearchProductList, {
        variables: { name: `%${search}%`, limit: limit }
    })

    if (error) {
        console.log(error)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleLoadMore = () => {
        setLimit(limit + 3)
    }

    return (
        <>
            <center>
                <div className="container text-center mt-5">
                    <img
                        style={{ height: "228px", width: "228px" }}
                        src={logo}
                        alt="Hero Logo" />
                </div>
                    <section className="productlist mt-3 mb-5">
                        <div className='produkList'>
                            <h3>Product List</h3>
                            <p>
                                <center>Berisi list product yang telah di buat di halaman request product.</center>
                            </p>

                            <div className="mb-3 w-25">
                                <label className="form-label mt-5 "><strong>Masukan Pencarian : </strong></label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    value={search}
                                    onChange={handleSearch} />
                            </div>
                            <div className="container mx-auto">
                                <div className="mycard row w-100 justify-content-center">
                                    
                                    {data?.Product.map((card) => (
                                        <Card key={card.id} card={card} />
                                    ))
                                    }
                                    
                                </div>
                            </div>
                            <Button
                                type="button"
                                className="btn btn-secondary2"
                                label="Load More"
                                onClick={handleLoadMore} />
                        </div>
                    </section></center>
        </>
    );
}

export default ProductList