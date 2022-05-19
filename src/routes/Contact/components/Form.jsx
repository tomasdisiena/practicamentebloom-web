import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  return (
    <StyledForm name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />{" "}
      <StyledInput
        id="name"
        name="name"
        label="Nombre"
        type="text"
        variant="outlined"
        inputProps={{
          maxLength: 30,
          minLength: 2,
        }}
        fullWidth
        required
      />
      <StyledInput
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        inputProps={{
          maxLength: 30,
          minLength: 5,
        }}
        fullWidth
        required
      />
      <StyledInput
        id="comments"
        name="comments"
        label="Comentarios"
        type="text"
        variant="outlined"
        multiline
        rows={5}
        inputProps={{
          maxLength: 250,
          minLength: 10,
        }}
        fullWidth
        required
      />
      <StyledButton type="submit" variant="contained" endIcon={<SendIcon />}>
        Enviar!
      </StyledButton>
    </StyledForm>
  );
}

//Styled components
const StyledForm = styled.form`
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledInput = styled(TextField)`
  & label.Mui-focused {
    color: #222831;
  }

  & .MuiOutlinedInput-root {
    & .MuiInput-underline:after {
      border-bottom-color: #222831;
    }

    &.Mui-focused fieldset {
      border-color: #222831;
    }
  }

  && {
    margin-top: 2rem;
    background-color: #fbdb6b;
    color: #222831;
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #fbdb6b;
    color: #222831;
  }

  &&:hover {
    background-color: #222831;
    color: #facf39;
  }
`;
