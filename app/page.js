"use client"
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Header from "./_component/header";
import Hero from "./_component/hero";
import Footer from "./_component/footer";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createElement, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Home() {
  const {user}=useUser();
  const createUser=useMutation(api.user.createUser);

  useEffect(()=>{
    user&&CheckUser();
  },[user])

  const CheckUser=async()=>{
    const result=await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      userName:user?.fullName
    });
    console.log(result);
  }

  const [coins,setCoins]=useState([]);
    useEffect(()=>{
        axios
        .get("https://pro-api.coingecko.com/api/v3/coins/top_gainers_losers?duration=24h&top_coins=300")
        .then((response)=>{
            console.log("Response>>",response)
        })
        .catch((error)=>{
            console.log("Error Occured",error)
        });
    },[]);
  return (
    <div>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
