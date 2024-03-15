"use client"
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import PrimaryButton from "../../core/buttons/PrimaryButton";
import PrimaryTextField from "../../core/input/PrimaryTextField";
import styles from "../studyForm/styles/studyForm.module.css";
import PrimaryTypography from "@/app/core/text/PrimaryTypography";

export const StudyForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [isStudying, setIsStudying] = useState(false);
    const [description, setDescription] = useState("");
    const [extraInfo, setExtraInfo] = useState("");

    // Add to dictionary
    const headerLabel = "Form Title";
    const subHeaderLabel = "Form Description";
    const personalDetailsHeader = "Personal details";
    const firstNameLabel = "First name";
    const middleNameLabel = "Middle name";
    const lastNameLabel = "Last name";
    const emailLabel = "Email";
    const emailDescription = "email@email.com";
    const ageLabel = "Age";
    const ageDescription = "Enter a number";
    const isStudyingHeader = "Are you currently studying?";
    const yesLabel = "Yes";
    const noLabel = "No";
    const whatStudyingLabel = "Please provide the name(s) of what you are studying";
    const isStudyingLabel = "Study details";
    const isStudyingDescription = "Detail your study here";
    const extraInfoHeader = "Extra information?";
    const extraInfoLabel = "Extra information";
    const extraInfoDescription = "Enter any additional information here";
    const completeFormHeader = "Complete form";
    const submitLabel = "Submit";
    const cancelLable = "Cancel";

    const handleSubmit = () => {
        console.log("Form submitted!");
        console.log("First Name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Age:", age);
        console.log("Is Studying:", isStudying);
        console.log("Description:", description);
        console.log("Extra Info:", extraInfo);

    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate className={styles.mainContainer} justifyContent={"center"}>
            <Box className={styles.subContainer} width={"100%"}>
                <Stack direction="column" spacing={0.5} className={styles.stack}>
                    <PrimaryTypography variant="h5" >
                        {headerLabel}
                    </PrimaryTypography>
                    <PrimaryTypography variant="body1" >
                        {subHeaderLabel}
                    </PrimaryTypography>
                </Stack>
            </Box>
            <Box className={styles.subContainer} width={"100%"}>
                <Stack direction="column" spacing={0.5} className={styles.stack}>
                    <PrimaryTypography variant="h6" >
                        {personalDetailsHeader}
                    </PrimaryTypography>
                </Stack>
                <PrimaryTextField
                    label={firstNameLabel}
                    placeholder={firstNameLabel}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <PrimaryTextField
                    label={middleNameLabel}
                    placeholder={middleNameLabel}
                    value={email}
                    onChange={(e) => setMiddleName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <PrimaryTextField
                    label={lastNameLabel}
                    placeholder={lastNameLabel}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                {/* add line break */}
                <PrimaryTextField
                    label={emailLabel}
                    placeholder={emailDescription}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <PrimaryTextField
                    label={ageLabel}
                    placeholder={ageDescription}
                    value={email}
                    onChange={(e) => setAge(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Box className={styles.subContainer} width={"100%"}>
                <Stack direction="column" spacing={0.5} className={styles.stack}>
                    <PrimaryTypography variant="h6" >
                        {isStudyingHeader}
                    </PrimaryTypography>
                </Stack>
                <PrimaryTextField
                    label={isStudyingLabel}
                    placeholder={isStudyingDescription}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Box className={styles.subContainer} width={"100%"}>
                <Stack direction="column" spacing={0.5} className={styles.stack}>
                    <PrimaryTypography variant="h6" >
                        {extraInfoHeader}
                    </PrimaryTypography>
                </Stack>
                {/* RADIO BUTTON */}
                <PrimaryTextField
                    label={extraInfoLabel}
                    placeholder={extraInfoDescription}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Box className={styles.subContainer} width={"100%"}>
                <Stack direction="column" spacing={0.5} className={styles.stack}>
                    <PrimaryTypography variant="h6" >
                        {completeFormHeader}
                    </PrimaryTypography>
                </Stack>
                <Stack direction="row" spacing={2} className={styles.stack}>
                    <PrimaryButton onClick={() => handleSubmit()} text={cancelLable} variant="outlined" fullWidth />
                    <PrimaryButton onClick={() => handleSubmit()} text={submitLabel} variant="contained" fullWidth />
                </Stack>
            </Box>
        </Box >
    );
};

export default StudyForm;