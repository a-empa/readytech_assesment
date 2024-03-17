import { Stack } from "@mui/material";
import StudyForm from "./modules/studyForm/StudyForm";

export default function Home() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <StudyForm />
    </Stack>
  );
}
