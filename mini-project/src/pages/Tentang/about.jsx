import React, { Component } from 'react'
import Styles from '../../styles/global.module.css';
import ImgAbout from '../../assets/about.webp'


class AboutPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container}>
                        <h2 className={Styles.text_center}><strong>Tentang Kami</strong></h2>
                        <p><strong>Apple ID</strong><br />
                        Kami adalah destinasi utama bagi para pecinta teknologi dan penggemar iPhone di seluruh dunia. Di Apple ID, kami memahami bahwa teknologi adalah lebih dari sekadar alat, 
                        ia adalah ungkapan dari gaya hidup dan inovasi. Oleh karena itu, kami dengan bangga menyajikan koleksi lengkap iPhone dari seri legendaris yang telah mengubah dunia hingga yang paling terbaru dan canggih.
                        </p>
                        <div className={Styles.space}></div>
                        <div className={Styles.flex}>
                            <img src={ImgAbout} style={{ width: '500px', height: '400px' }} alt="Gambar Tentang Kami" />
                            <p className={Styles.margin_left}><br />

                            Mulai dari iPhone klasik yang membawa kenangan hingga seri terkini yang mengesankan, 
                            Kami hanya menyediakan produk asli dan berkualitas tinggi. Anda dapat berbelanja dengan percaya diri, karena kami selalu menawarkan produk yang terjamin keasliannya.
                            Kami memahami bahwa Anda mungkin mencari aksesoris khusus, gadget langka, atau produk lain yang sulit ditemukan. Jadi, kami telah menghadirkan fitur "Request Produk." Jika Anda tidak menemukan apa yang Anda cari, kami akan mencarikannya untuk Anda!
                            </p>
                        </div>
                        <div className={Styles.space}></div>
                        <p><br />
                        Temukan iPhone impian Anda, dan jika Anda mencari lebih dari itu, sampaikan kepada kami, dan kami akan memenuhi permintaan Anda.
                        Upgrade gaya hidup teknologi Anda hari ini dengan AppleID!                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage