"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hook/adminProtected";


type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Admin"
          description="Hỗ trợ học tập"
          keywords="Nextjs, tailwind"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;