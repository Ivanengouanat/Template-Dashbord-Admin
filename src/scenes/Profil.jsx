import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Headers from "../components/Headers";
import useMediaQuery from "@mui/material/useMediaQuery";

const Profil = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (value) => {
    console.log(value);
    //const userData = { name: values.firstName, subName: values.lastName, email: values.email, contact: values.contact, address1: values.address1, address2: values.address2 }; addUser(userData); resetForm();
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const emailValid = /^[a-zA-Z0-9]+@gmail\.com$/;

  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(4, "le champs doit contenir plus de 4 caracteres")
      .max(7, "le champs doit contenir moins de 7 caracteres")
      .required("required"),
    LastName: yup
      .string()
      .min(7, "le champs doit contenir plus de 7 caracteres")
      .max(15, "le champs doit contenir moins de 15 caracteres")
      .required("required"),
    email: yup
      .string()
      .matches(emailValid, "invalid Email")
      .required("required"),
    adress1: yup.string().required("required"),
    address2: yup.string().required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "phone number is incorrect")
      .required("required"),
  });

  return (
    <Box m="20px">
      <Headers title="CREATE USER" subtitle="profil user" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values, // Contient les valeurs de tous les champs du formulaire.
          errors, // Contient les messages d'erreur de validation pour chaque champ.
          touched, // indique si un champ a été touché (interagi avec).
          handleChange, // fonction pour gérer les changements de valeur dans les champs du formulaire.
          handleBlur, // Fonction pour gérer les événements de perte de focus.
          handleSubmit, // Fonction pour gérer la soumission du formulaire.
          isSubmitting, // Indique si le formulaire est en cours de soumission.
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="15px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled" // Utilise le style "filled" pour le champ.
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName} // touched.firstName : Indique si l'utilisateur a interagi avec le champ "First Name". touched est un objet géré par Formik qui contient des informations sur les champs que l'utilisateur a touchés.  errors.firstName : Contient le message d'erreur associé au champ "First Name" si une erreur de validation est présente. errors est un autre objet géré par Formik qui contient les messages d'erreur pour chaque champ du formulaire. !! (double négation) : Convertit une valeur en un booléen (true ou false). Par exemple, !!touched.firstName sera true si touched.firstName est défini et false s'il ne l'est pas.
                helperText={touched.firstName && errors.firstName} //  touched.firstName et errors.firstName sont les mêmes que précédemment.
                sx={{ gridColumn: "span 2" }} //
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Profil;
