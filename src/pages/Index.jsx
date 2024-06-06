import React, { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  const handleDownload = () => {
    // Placeholder for PDF generation logic
    alert("PDF generation is not implemented in this example.");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Resume Builder
        </Text>
        <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <Textarea placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <Textarea placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
        <Textarea placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
        <Button leftIcon={<FaDownload />} colorScheme="teal" onClick={handleDownload}>
          Download as PDF
        </Button>
      </VStack>

      <Box mt={10} p={5} borderWidth={1} borderRadius="md" width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text mt={4} fontWeight="bold">
          Summary
        </Text>
        <Text>{summary}</Text>
        <Text mt={4} fontWeight="bold">
          Experience
        </Text>
        <Text>{experience}</Text>
        <Text mt={4} fontWeight="bold">
          Education
        </Text>
        <Text>{education}</Text>
        <Text mt={4} fontWeight="bold">
          Skills
        </Text>
        <Text>{skills}</Text>
      </Box>
    </Container>
  );
};

export default Index;
