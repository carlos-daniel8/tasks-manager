import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login"
import Tasks from './pages/task'
import NewTask from "./pages/new-task"

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/tasks" component={Tasks}/>
                <Route path="/new-task" component={NewTask}/>
            </Switch>
        </BrowserRouter>
    )
}