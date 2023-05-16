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

 const Form = () => {
  return(
    <main className={styles.main}>
      <Paper className={styles.paper}>
        <Avatar 
          className={styles.avatar} 
          sx={{ bgcolor: '#ba000d' }}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>Sign In</Typography>
        <Select value='english'>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <form className={styles.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input id='password' name='password'></Input>
          </FormControl>
          <FormControlLabel
            label='Remember me'
            control={<Checkbox color='primary'/>}
          />
          <Button 
            variant='contained' 
            type='submit' 
            fullWidth
            className={styles.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </main>
  )
 }

 export default Form;