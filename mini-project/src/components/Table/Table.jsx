import TableItem from "./TableItem";
import {gql, useMutation, useQuery} from "@apollo/client"
import { GetProductList } from "../../helpers/gqlHasura";

const Table = () => {

    const {data, loading, error} = useQuery(GetProductList)

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Daftar Produk</h2>
            <table className="table table-striped w-100" id="data-table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Kategori Produk</th>
                        <th scope="col">Gambar Produk</th>
                        <th scope="col">Jenis Produk</th>
                        <th scope="col">Jumlah Produk</th>
                        <th scope="col" colSpan={2}><center>Action</center></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.Product.map((table) => (
                        <TableItem key={table.productId} table={table} />
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;