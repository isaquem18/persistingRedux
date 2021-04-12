import { Switch, Route, Link } from 'react-router-dom';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

export default function Routes() {
    return (
        <>
            <header>
                <Link to="/">Page1</Link>
                <Link to="/page2">Page2</Link>
                <Link to="/page3">Page3</Link>
            </header>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3" component={Page3} />
            </Switch>
        </>
    )
}