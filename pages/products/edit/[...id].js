import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";


export default function EditProductPage(){
    const [productInfor,setProductInfor] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response =>{
            setProductInfor(response.data);
        }
    )},[id])
    return (
        <Layout>
            <h1>Edit Product</h1>
            {productInfor && (<ProductForm {...productInfor}/>)}
        </Layout>
    )
}