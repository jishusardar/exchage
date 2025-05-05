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
import { Headerres } from "./_component/temheader";

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
  };
  return (
    <div>
      <Headerres/>
    </div>
  );
}
