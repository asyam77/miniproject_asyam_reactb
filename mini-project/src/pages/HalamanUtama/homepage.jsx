import { Component } from "react"
import { Link } from "react-router-dom"
import Styles from '../../styles/global.module.css'
import ProductItem from '../../components/ProdukItem/product_item'
import product1 from "../../assets/ip13pink.png"
import product2 from "../../assets/ip11red2.jpeg"
import product3 from "../../assets/ip12hitam.jpg"
import product4 from "../../assets/ip11hitam.jpg"
import product5 from "../../assets/ip14prohitam.webp"
import product6 from "../../assets/ip15protitanium.jpg"
import product7 from "../../assets/ip15protitanblue.webp"
import product8 from "../../assets/ip15protitanblack.webp"
import { FaShippingFast, FaFunnelDollar, FaUserShield } from "react-icons/fa"

import sampul4 from "../../assets/sampul4.png"



class Homepage extends Component {

    render() {
        return (
            <>
                <div className={`${Styles.wrapper} ${Styles.banner1}`}></div>
                <div className={Styles.wrapper}>
                    <div className={Styles.row}>
                        <div className={Styles.cart}>
                            <div className={Styles.input_group1}>
                                <input type="search" placeholder="🔍 Search Product..." />
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.row}>
                        <div className={Styles.grid_product}>
                            {/* {this.state.product.map(product => )} */}
                            <ProductItem image={product1} title="iPhone 13 pink 128 GB" price="IDR 13.000.000" as={Link} to="/cart" />
                            <ProductItem image={product2} title="iPhone 11 red 64 GB" price="IDR 7.000.000" action="product2/" />
                            <ProductItem image={product3} title="iPhone 12 black 128 GB" price="IDR 11.500.000" action="detail_link_sample3" />
                            <ProductItem image={product4} title="iPhone 11 black 128 GB" price="IDR 8.200.000" action="detail_link_sample4" />
                            <ProductItem image={product5} title="iPhone 14 pro black 128 GB" price="IDR 18.500.000" action="detail_link_sample5" />
                            <ProductItem image={product6} title="iPhone 15 titanium 256 GB" price="IDR 26.000.000" action="detail_link_sample6" />
                            <ProductItem image={product7} title="iPhone 11 white 64 GB" price="IDR 10.000.000" action="detail_link_sample7" />
                            <ProductItem image={product8} title="iPhone 11 white 64 GB" price="IDR 10.000.000" action="detail_link_sample8" />

                        </div>
                    </div>

                    <div className={`${Styles.row} ${Styles.bg_primary} ${Styles.custom_banner}`}>
                        <div className={Styles.grid2}>
                            <div className={Styles.banner_link}>
                                <h1>iPhone 15</h1>
                                <h2> New camera. New design. Newphoria.</h2>
                                <p> Welcome to the era of spatial computing. </p>
                                <Link to='/keranjang'>SHOP NOW</Link>
                            </div>

                            <div>
                                <img src={sampul4} className={Styles.image_custom_banner} alt="sampul4" />
                            </div>

                        </div>
                    </div>

                    <div className={`${Styles.row}`}>
                        <div className={Styles.grid3}>
                            <div>
                                <div>
                                    <FaShippingFast />
                                    <h4>Bebas Biaya Kirim</h4>
                                    <p>Dapatkan jasa pengiriman gratis ongkir untuk seluruh wilayah indonesia, dan nikmati layanan antar sampai ke rumah</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <FaFunnelDollar />
                                    <h4>100% PENGEMBALIAN DANA</h4>
                                    <p>Kepuasan pelanggan adalah prioritas utama kami. Jika Anda tidak puas dengan pembelian apple product dari toko kami, kami akan memberikan pengembalian uang penuh tanpa syarat dalam waktu 30 hari.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <FaUserShield />
                                    <h4>DUKUNGAN 24/7</h4>
                                    <p>Kami siap memberikan dukungan kapan saja selama 24 jam sehari, 7 hari seminggu untuk membantu Anda dengan segala pertanyaan atau masalah yang Anda miliki terkait dengan produk kami. Silakan hubungi kami melalui email atau media sosial, dan kami akan dengan senang hati membantu Anda secepat mungkin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Homepage