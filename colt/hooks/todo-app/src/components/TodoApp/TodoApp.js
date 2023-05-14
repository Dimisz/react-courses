import { 
  Paper, 
  AppBar,
  Toolbar,
  Typography 
} from "@mui/material";


const TodoApp = () => {
  return(
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
      >
        <AppBar 
          color='primary'
          position='static'
          style={{height: '64px'}}
        >
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
      </Paper>
  );
}

export default TodoApp;