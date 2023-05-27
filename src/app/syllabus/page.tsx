'use client'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { cards, core } from '../components/database'

export default function page() {
  return (
    <>
      <Box pt='30px' bg={'gray.100'}>
        <Container maxW={1400}>
          <Center flexDir='column'>
            <Heading size='2xl'>Core Courses</Heading>
            <Text mt='20px' textAlign='center' px='130px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of (13 weeks each)</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading> (Common in All Specializations)</Heading>
            <Text textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses</Text>
          </Center>

          <Center>
            <Flex mt='30px' gap='25px'>
              {core.map((elem) => (
                <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' key={elem.id}>
                  <Heading>{elem.heading}</Heading>
                  <Text pt='5px'>{elem.text}</Text>
                </Box>
              ))}
            </Flex>
          </Center>
        </Container>

        <Container maxW={1400} mt='30px' bgSize='cover' bgGradient={[
          'linear(to-tr, teal.400, yellow.300)',
          'linear(to-t, yellow.200, purple.500)',
          'linear(to-b, purple.100, teal.300)',
        ]}>
          {cards.map((elem) => (
            <Box pt='40px' key={elem.id}>
              <Center flexDir='column' mt='50px'>
                <Heading size='xl'>{elem.heading1}</Heading>
                <Text fontWeight='medium' color='white' mt='20px' textAlign='center' px='130px'>{elem.text1}</Text>
              </Center>
              <Center>
                <Flex mt='30px' gap='20px'>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading2}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text2}</Text>
                  </Box>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading3}</Heading>
                    <Text fontWeight='medium' pt='5px' >{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}


          <Box pt="100px" pb="40px" >
            <Center>
              <Heading size='xl'>The Outcome for Participants of the Program</Heading>
            </Center>
            <Center>
              <Text fontWeight='medium' mt='20px' textAlign='center' px='130px' color="white" >The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software export</Text>
            </Center>
          </Box>

        </Container>
      </Box>

    </>
  )
}
