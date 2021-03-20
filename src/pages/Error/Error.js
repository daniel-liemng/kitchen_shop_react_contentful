import React from "react";

import { ErrorWrapper, ErrorTitle, ErrorText } from "./ErrorElements";
import { Button } from "../../components/Shared/Button";

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Page Not Found</ErrorText>
      <Button to='/'>Back to Homepage</Button>
    </ErrorWrapper>
  );
};

export default Error;
