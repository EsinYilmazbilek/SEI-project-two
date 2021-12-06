import Home from './components/common/Home'
import DefinitionShow from './components/definition/DefinitionShow'

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:userWord">
        <DefinitionShow />
      </Route>
    </BrowserRouter>
  )
}
export default App