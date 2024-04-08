import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./pages/login"
import Task from "./pages/task"

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/task" component={Task}/>
            </Switch>
        </BrowserRouter>
    )
}