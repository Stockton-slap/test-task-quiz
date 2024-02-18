import React, { useMemo } from "react";
import { Btn } from "./Button.styled";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/utils";

export default function Button({ value }) {
  const navigate = useNavigate();
  const isValid = useMemo(() => validateEmail(value), [value]);

  return (
    <Btn disabled={!isValid} onClick={() => navigate("/results")}>
      Next
    </Btn>
  );
}
