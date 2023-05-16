import { 
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select
 } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import styles from './Form.module.css';
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

 const words = {
  english: {
    email: 'email',
    signIn: 'Sign In',
    password: 'Password',
    remember: 'Remember Me'
  },

  french: {
    email: 'Adresse Electronique',
    signIn: 'Se Connecter',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi'
  },

  spanish: {
    email: 'Correo Electronico',
    signIn: 'Registrarse',
    password: 'Contrasenha',
    remember: 'Recuerdame'
  },

 }
 const Form = () => {
  const languageCtx = useContext(LanguageContext);
  const {email, signIn, password, remember} = words[languageCtx.language];

  return(
    <main className={styles.main}>
      <Paper className={styles.paper}>
        <Avatar 
          className={styles.avatar} 
          sx={{ bgcolor: '#ba000d' }}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>
          {signIn}
        </Typography>
        <Select value={languageCtx.language} onChange={(e) => languageCtx.changeLanguage(e.target.value)}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <form className={styles.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>
              {email}
            </InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password'></Input>
          </FormControl>
          <FormControlLabel
            label={remember}
            control={<Checkbox color='primary'/>}
          />
          <Button 
            variant='contained' 
            type='submit' 
            fullWidth
            className={styles.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  )
 }

 export default Form;