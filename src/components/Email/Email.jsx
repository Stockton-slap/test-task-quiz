import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  EmailContainer,
  EmailTerms,
  EmailText,
  EmailTitle,
  Input,
} from "./Email.styled";
import Button from "../Button/Button";

export default function Email() {
  const [value, setValue] = useState("");
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
      <Button value={value} />
    </EmailContainer>
  );
}
