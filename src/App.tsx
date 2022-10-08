import './App.css';

import { Button, ThemeProvider } from './simpleUI';
import { TextInput } from './simpleUI/TextInput';

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
        }}
        className='App'
      >
        <div>
          <TextInput label='Okay' onChange={() => {}} value='' />
        </div>
        <div>
          <h1>COLORS</h1>
          <Button color='primary'>PRIMARY</Button>
          <Button color='secondary'>SECONDARY</Button>
          <Button color='warning'>WARNING</Button>
          <Button color='error'>ERROR</Button>
          <Button color='success'>SUCCESS</Button>
          <Button color='info'>INFO</Button>
        </div>
        <div>
          <h1>SIZES</h1>
          <Button color='primary'>NORMAL</Button>
          <Button color='primary' size='large'>
            LARGE
          </Button>
          <Button color='primary' size='medium'>
            MEDIUM
          </Button>
          <Button color='primary' size='small'>
            SMALL
          </Button>
        </div>
        <div>
          <h1>VARIANTS</h1>
          <Button color='primary' variant='contained'>
            CONTAINED
          </Button>
          <Button color='primary' variant='outlined'>
            OUTLINED
          </Button>
          <Button color='primary' variant='text'>
            TEXT
          </Button>
        </div>
        <div>
          <h1>DISABLED</h1>
          <Button color='primary' disabled>
            DISABLED
          </Button>
          <Button color='secondary' disabled>
            DISABLED
          </Button>
          <Button color='info' disabled>
            DISABLED
          </Button>
          <Button color='warning' disabled>
            DISABLED
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
