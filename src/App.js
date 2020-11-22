import React, { useState } from 'react';
import Card from './Components/Card';
import { v4 as uuidv4 } from 'uuid';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=>{
  const [items,setItems]=useState([
    {
      itemId:uuidv4(),
      url:"https://i.insider.com/5e4ff467fee23d18410c53c6?width=600&format=jpeg&auto=webp",
      name:"Apple IPhone",
      price:125000
    },
    {
      itemId:uuidv4(),
      url:"https://i.ebayimg.com/images/g/2bgAAOSwrxRfD8By/s-l640.jpg",
      name:"Apple Earpods",
      price:14500
    },
    {
      itemId:uuidv4(),
      url:"https://5.imimg.com/data5/FI/FP/FS/SELLER-12188422/apple-macbook-intel-core-i5-laptop-500x500.jpg",
      name:"Apple MacBook",
      price:165000
    }
  ]);

  const [total,setTotal]=useState(0);

  const [cart,setCart]=useState([]);

  const handleClick=(event)=>{
    items.forEach(item=>{
      if(item.itemId===event)
      {
        if(cart.includes(item))
          alert("Item already in Cart");
        else
        {
          setCart([...cart,item])
          setTotal(total+item.price);
          console.log(cart);
        }
      }
    })
  }

  const chk = () => {
    if(total===0)
    {
        toast.error('⚠ Oh Cart is empty!', {
            position: "top-right",
            autoClose: 2000,
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
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    setTotal(0);
    setCart([]);
  }

  return(
    <div style={{padding:"10px"}}>
      <Grid container spacing={24}>
        <Grid item md={3} style={{margin:"5px"}}>
          <Card url={items[0].url} name={items[0].name} price={items[0].price} idx={items[0].itemId} clickMe={handleClick}/>
        </Grid>
        <Grid item md={3} style={{margin:"5px"}}>
          <Card url={items[1].url} name={items[1].name} price={items[1].price} idx={items[1].itemId} clickMe={handleClick}/>
        </Grid>
        <Grid item md={3} style={{margin:"5px"}}>
          <Card url={items[2].url} name={items[2].name} price={items[2].price} idx={items[2].itemId} clickMe={handleClick}/>
        </Grid>
      </Grid>

      <div style={{width:"100%"},{padding:"10px"},{borderRadius:"25px"},{border:"1px solid black"}}>
          <h1 style={{textAlign:"center"},{display:"inlineBlock"},{padding:"10px"}}>
            Cart
            <span style={{float:"right"}}> Cart Total : Rs. {total}</span>
          </h1>
          
          <div>
            <Button variant="contained" color="default" onClick={chk}>
              CheckOut
            </Button>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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
    </div>
  )
}

export default App;