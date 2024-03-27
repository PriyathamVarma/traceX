// Link: https://nextui.org/docs/components/modal
"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
// Loading ENV variables
import axios from "axios";
import IProvider from "../../../../../shared/interfaces/user/provider";

export default function ProviderModal(props: any) {
  const [status, setStatus] = useState("Submit");
  const [formData, setFormData] = useState<any>({
    userId: "",
    userName: "",
    role: "provider",
    email: "",
    from: "",
    to: "",
    status: "invited",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const data = props.data;

  console.log("Data from parent", data);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");
    // Convert dates to Date objects
    const formattedData: IProvider = {
      ...formData,
      from: new Date(formData.from).toISOString(),
      to: new Date(formData.to).toISOString(),
    };
    setStatus("Submit");
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Apply
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Apply to {formData.userName}</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userId">User ID</label>
                    <input
                      type="text"
                      id="userId"
                      name="userId"
                      value={formData.userId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="userName">User Name</label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="from">From</label>
                    <input
                      type="date"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="to">To</label>
                    <input
                      type="date"
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Button type="submit">{status}</Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
