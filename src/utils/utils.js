export const languageMapping = {
  English: "en",
  French: "fr",
  German: "de",
  Spanish: "es",
};

export function validateEmail(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
