'use client';
import React from "react";
import { Form, Input } from "antd";

function ContactUs() {
  return (
    
    <div className="flex items-center justify-center pt-11 pb-72 ">
      <div className="p-6 max-w-sm w-full bg-inherit bg-opacity-0 border border-white">
        <h1 className="text-center mb-4 text-white">Contact Us</h1>
        <Form>
          <Form.Item
            
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="text"
            rules={[{ required: true, message: "Please input your Message!" }]}
          >
            <Input.TextArea placeholder="Text" rows={4} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;