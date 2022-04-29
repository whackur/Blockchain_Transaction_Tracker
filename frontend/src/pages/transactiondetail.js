import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardLayout } from "../components/dashboard-layout";
import { Box, Container, Typography } from "@mui/material";
import { Overview } from "../components/transaction/overview";
import TransactionTab from "../components/transaction/transactionTab";

const Transactiondetail = (props) => {
  const router = useRouter();
  console.log(router.query);
  const data = JSON.parse(router.query.data);
  console.log(data);
  return (
    <>
      <Head>
        <title>Transaction Detail</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Typography sx={{ m: 1 }} variant="h4">
            Transaction Details
          </Typography>
        </Container>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}
        >
          <Container maxWidth="sx">
            <TransactionTab />
          </Container>
        </Box>
      </Box>
    </>
  );
};

Transactiondetail.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default Transactiondetail;
