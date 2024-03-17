"use client"
import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import PrimaryButton from "../../core/buttons/PrimaryButton";
import PrimaryTextField from "../../core/input/PrimaryTextField";
import styles from "../studyForm/styles/studyForm.module.css";
import PrimaryTypography from "@/app/core/text/PrimaryTypography";
import { StudyFormType } from "./studyFormType";
import RadioButtonGroup from "@/app/core/buttons/RadioButtonGroup";

export const StudyForm = () => {

    const defaultValues = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        age: 18,
        isStudying: false,
        description: "",
        extraInfo: "",
    }

    const [formValues, setFormValues] = useState<StudyFormType>(defaultValues);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formSubmited, setFormSubmited] = useState(false);

    const isDisabled = () => {
        return firstNameError || lastNameError || emailError || ageError || loading ||
            formValues.firstName === "" || formValues.lastName === "" || formValues.email === "";
    }

    const headerLabel = "Form Title";
    const subHeaderLabel = "Form Description";
    const personalDetailsHeader = "Personal details";
    const firstNameLabel = "First name";
    const firstNameErrorLabel = "Please enter a valid first name (Must be less than 2-50 characters)";
    const middleNameLabel = "Middle name";
    const lastNameLabel = "Last name";
    const lastNameErrorLabel = "Please enter a valid last name (Must be less than 2-50 characters)";
    const emailLabel = "Email";
    const emailDescription = "email@email.com";
    const emailErrorLabel = "Please enter a valid email (e.g. email@email.com)";
    const ageLabel = "Age";
    const ageErrorLabel = "Please enter an age between 18 and 100";
    const ageDescription = "Enter a number";
    const isStudyingHeader = "Are you currently studying?";
    const radioButtonLabels = ["Yes", "No"];
    const whatStudyingLabel = "Please provide the name(s) of what you are studying";
    const isStudyingLabel = "Study details";
    const isStudyingDescription = "Detail your study here";
    const extraInfoHeader = "Extra information?";
    const extraInfoLabel = "Extra information";
    const extraInfoDescription = "Enter any additional information here";
    const completeFormHeader = "Complete form";
    const submitLabel = "Submit";
    const cancelLabel = "Cancel";
    const loadingLabel = "Submitting...";
    const successfulLabel = "Form submitted successfully!";
    const returnLabel = "Return to form";

    const handleCancel = () => {
        console.log("Form reset");
        setFormValues(defaultValues);
        setFormSubmited(false);
    }

    const timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onSubmit = async (event: any) => {
        setLoading(true);
        event.preventDefault();
        await timeout(1000);

        console.log(formValues);
        setFormSubmited(true);
        setLoading(false);
    }

    const nameCheck = (name: string) => {
        const trimmedName = name.trim();
        return trimmedName.length >= 2 && trimmedName.length <= 50;
    }

    return (
        <>
            {formSubmited ?
                (
                    <Box className={styles.mainContainer} justifyContent={"center"}>
                        <Box className={styles.subContainer} width={"100%"}>
                            <PrimaryTypography variant="h5" > {successfulLabel} </PrimaryTypography>
                            <PrimaryButton onClick={() => handleCancel()} text={returnLabel} variant="outlined" fullWidth />
                        </Box>
                    </Box>
                )
                : (
                    <form onSubmit={onSubmit} >
                        <Box className={styles.mainContainer} justifyContent={"center"}>
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
                                    name={firstNameLabel}
                                    label={firstNameLabel}
                                    placeholder={firstNameLabel}
                                    value={formValues.firstName}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, firstName: e.target.value });
                                        nameCheck(e.target.value) ? setFirstNameError(false) : setFirstNameError(true);
                                    }}
                                    errorMessage={firstNameError ? firstNameErrorLabel : undefined}
                                />
                                <PrimaryTextField
                                    name={middleNameLabel}
                                    label={middleNameLabel}
                                    placeholder={middleNameLabel}
                                    value={formValues.middleName}
                                    onChange={(e) => setFormValues({ ...formValues, middleName: e.target.value })}
                                    optional
                                />
                                <PrimaryTextField
                                    name={lastNameLabel}
                                    label={lastNameLabel}
                                    placeholder={lastNameLabel}
                                    value={formValues.lastName}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, lastName: e.target.value });
                                        nameCheck(e.target.value) ? setLastNameError(false) : setLastNameError(true);
                                    }}
                                    errorMessage={lastNameError ? lastNameErrorLabel : undefined}
                                />
                                <Divider flexItem sx={{ paddingBottom: 1 }} />
                                <PrimaryTextField
                                    label={emailLabel}
                                    placeholder={emailDescription}
                                    value={formValues.email}
                                    type="email"
                                    onChange={(e) => {
                                        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                        setFormValues({ ...formValues, email: e.target.value });
                                        (regex.test(String(e.target.value).toLowerCase()) || e.target.value === "") ? setEmailError(false) : setEmailError(true);
                                    }}
                                    errorMessage={emailError ? emailErrorLabel : undefined}
                                />
                                <PrimaryTextField
                                    label={ageLabel}
                                    placeholder={ageDescription}
                                    value={formValues.age}
                                    onChange={(e) => {
                                        const age = parseInt(e.target.value);
                                        if (!isNaN(age) || e.target.value === undefined) {
                                            setFormValues({ ...formValues, age: age });
                                            (age >= 18 && age <= 100) ? setAgeError(false) : setAgeError(true);
                                        }
                                    }}
                                    errorMessage={ageError ? ageErrorLabel : undefined}
                                    type="number"
                                />
                            </Box>
                            <Box className={styles.subContainer} width={"100%"}>
                                <Stack direction="column" spacing={0.5} className={styles.stack}>
                                    <PrimaryTypography variant="h6" >
                                        {isStudyingHeader}
                                    </PrimaryTypography>
                                    <RadioButtonGroup
                                        options={radioButtonLabels}
                                        defaultValue={formValues.isStudying ? "Yes" : "No"}
                                        onChange={(value) => {
                                            setFormValues({ ...formValues, isStudying: value === "Yes" });
                                        }}
                                    />
                                </Stack>
                                {formValues.isStudying && (
                                    <>
                                        <Stack direction="column" spacing={0.5} className={styles.stack}>
                                            <PrimaryTypography variant="body1" >
                                                {whatStudyingLabel}
                                            </PrimaryTypography>
                                        </Stack>
                                        <PrimaryTextField
                                            label={isStudyingLabel}
                                            placeholder={isStudyingDescription}
                                            value={formValues.description}
                                            multiline
                                            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                                        />
                                    </>
                                )}
                            </Box>
                            <Box className={styles.subContainer} width={"100%"}>
                                <Stack direction="column" spacing={0.5} className={styles.stack}>
                                    <PrimaryTypography variant="h6" >
                                        {extraInfoHeader}
                                    </PrimaryTypography>
                                </Stack>
                                <PrimaryTextField
                                    label={extraInfoLabel}
                                    placeholder={extraInfoDescription}
                                    value={formValues.extraInfo}
                                    multiline
                                    onChange={(e) => setFormValues({ ...formValues, extraInfo: e.target.value })}
                                />
                            </Box>
                            <Box className={styles.subContainer} width={"100%"}>
                                <Stack direction="column" spacing={0.5} className={styles.stack}>
                                    <PrimaryTypography variant="h6" >
                                        {completeFormHeader}
                                    </PrimaryTypography>
                                </Stack>
                                <Stack direction="row" spacing={2} className={styles.stack}>
                                    <PrimaryButton onClick={() => handleCancel()} text={cancelLabel} variant="outlined" fullWidth />
                                    <PrimaryButton type="submit" text={loading ? loadingLabel : submitLabel} variant="contained" fullWidth disabled={isDisabled()} loading={loading} />
                                </Stack>
                            </Box>
                        </Box>
                    </form>
                )
            }

        </>
    );
};

export default StudyForm;