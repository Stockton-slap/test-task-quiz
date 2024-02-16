import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import {
  EmailBtn,
  EmailContainer,
  EmailTerms,
  EmailText,
  EmailTitle,
  Input,
} from "./Email.styled";

export default function Email() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const isValid = useMemo(() => validateEmail(value), [value]);
  const { t } = useTranslation();

  const emailText = t("emailText", { returnObjects: true });
  const emailSubText = t("emailSubText", { returnObjects: true });
  const terms = t("terms", { returnObjects: true });

  return (
    <EmailContainer>
      <EmailTitle>{emailText}</EmailTitle>
      <EmailText>{emailSubText}</EmailText>
      <Input
        type="email"
        value={value}
        placeholder="Your email"
        onChange={(e) => setValue(e.target.value)}
      />
      <EmailTerms>{terms}</EmailTerms>
      <EmailBtn disabled={!isValid} onClick={() => navigate("/results")}>
        Next
      </EmailBtn>
    </EmailContainer>
  );
}
