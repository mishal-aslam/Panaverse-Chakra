'use client'
import { Box, Container, Grid, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react"
import Link from "next/link"
import png from '../../../public/Logo.png'

export default function Footer() {
    return (
        <Box bg='black'>
            <Container maxW={1250}>
                <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='10px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
                    <Box >
                        <Heading  pb='20px' color='white'>About Us</Heading>
                        <Text pt='15px' pr={{lg:'40px',base:'0'}} color='gray'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread </Text>
                    </Box>
                    <Box>
                        <Heading color='white'>Links</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='/'>Home</Link>
                            <Link href='/syllabus'>Syllabus</Link>
                            <Link href='/about'>About</Link>
                            <Link href='/contact'>Contact</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Follow Us</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='https://www.facebook.com/piaic/'>Facebook</Link>
                            <Link href='https://www.linkedin.com/company/piaicofficial/?originalSubdomain=pk'>Linkedin</Link>
                            <Link href='https://twitter.com/piaicofficial'>Twitter</Link>
                            <Link href='https://www.youtube.com/@panaverse'>Youtube</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='white'>Contact Us</Heading>
                        <Grid pt='40px' color='gray'>
                            <Link href='/'>+92-308-2220203</Link>
                            <Link href='/'>servicecenter@piac.aero</Link>
                            <Link href='/'>Karachi, Pakistan</Link>
                        </Grid>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}