import Head from 'next/head';
import { Box,Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Flex maxWidth='100%' w='100%' m='auto' flexDirection='column'>
        <Navbar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Flex>
    </>
  );
}