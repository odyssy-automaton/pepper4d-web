import * as React from 'react';

import { Foo, Bar } from './views/Pages';
import { Switch, Route } from 'react-router-dom';
import Players from './components/player/Players';
import Player from './components/player/Player';
import Home from './views/home/Home';

interface IProps {
}

const Routes: React.FC<IProps> = (props: IProps) => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/players/:username" component={Player} />
        </Switch>
    </div>
);

export default Routes;
