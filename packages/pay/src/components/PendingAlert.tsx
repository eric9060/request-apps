import React from "react";
import { makeStyles, Box, Link, Typography } from "@material-ui/core";
import { RAlert } from "request-ui";
import { getEtherscanUrl } from "../etherscan";
import { IParsedRequest } from "request-shared";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "0 12px",
    [theme.breakpoints.up("sm")]: {
      margin: 0,
    },
  },
}));

export default ({
  request,
  txHash,
}: {
  request: IParsedRequest;
  txHash: string;
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <RAlert
        severity="info"
        title="Why is this pending?"
        message="Payment is processing but taking longer than expected. You can check estimated time of payment on Etherscan"
        actions={
          <Link
            href={`${getEtherscanUrl(request)}/tx/${txHash}`}
            target="_blank"
          >
            <Typography variant="h5">View on Etherscan</Typography>
          </Link>
        }
      />
    </Box>
  );
};
