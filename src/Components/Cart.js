import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart=(props)=>{
    const [p,setPrice]=useState(0);
    const [itm,setItm]=useState(props.items);

    itm.forEach(item => {
        var sp=item.price;
        setPrice(p+sp);
    });

    const notify = () => {
        if(p===0)
        {
            toast.error('Oh Cart is empty!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else
        {
            toast.success('🦄 Wow you brought it!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setItm([]);
    }

    return(
        <div style={{width:"100%"},{padding:"10px"},{borderRadius:"25px"},{border:"1px solid black"}}>
            <h1 style={{textAlign:"center"},{display:"inlineBlock"},{padding:"5px"}}>
                Cart
                <span style={{float:"right"}}> Cart Total : Rs. {p}</span>
            </h1>
            <div>
            <Button variant="contained" color="default" onClick={notify}>
                CheckOut
            </Button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            </div>
        </div>
    )
}

export default Cart;