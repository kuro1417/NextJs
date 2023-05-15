import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

export default function deleteProduct() {
    const router = useRouter();
    const [productInfor, setProductInfor] = useState(null);
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then(response => {
            setProductInfor(response.data);
        }
        )
    }, [id])
    function goBack() {
        router.push('/product');
    }
    async function deleteProduct() {
            await axios.delete('/api/products?id=' + id)
            goBack();
        }
    return (
        <Layout>
            <h1 className="text-center">Don't You really want to delete "<b>{productInfor?.title}</b>"?</h1>
            <div className="flex gap-2 justify-center">
                <button 
                    onClick={deleteProduct}
                    className="btn btn-yes">Yes</button>
                <button
                    className="btn btn-no"
                    onClick={goBack}>
                    No</button>
            </div>
        </Layout>
    )
}