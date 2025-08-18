import { useState } from "react";


const Template1 = () => {

    return (
        <div className="cardx">
            <div className="cardxHeader">
                <div>Yah</div>
            </div>
            <div className="cardxBody">
                <div class="table-wrap" tabindex="0">
                    <table className="tabelku">
                        <thead className="h_thead">
                            <tr>
                                <th scope="col">Nama</th>
                                <th scope="col">Email</th>
                                <th scope="col">Kota</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="h_body">
                            <tr>
                                <td>Rina Saputri</td>
                                <td>rina@example.com</td>
                                <td>Bandung</td>
                                <td><span class="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Galang Aditya</td>
                                <td>galang@example.com</td>
                                <td>Jakarta</td>
                                <td><span class="badge warn">Menunggu</span></td>
                            </tr>
                            <tr>
                                <td>Devi Maharani</td>
                                <td>devi@example.com</td>
                                <td>Makassar</td>
                                <td><span class="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Rafi Pratama</td>
                                <td>rafi@example.com</td>
                                <td>Yogyakarta</td>
                                <td><span class="badge ok">Aktif</span></td>
                            </tr>
                            <tr>
                                <td>Nadia Lestari</td>
                                <td>nadia@example.com</td>
                                <td>Surabaya</td>
                                <td><span class="badge warn">Menunggu</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    )
}

export default Template1