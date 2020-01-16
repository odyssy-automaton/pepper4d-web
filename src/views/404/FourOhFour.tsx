import * as React from 'react';

import { Link } from 'react-router-dom';

interface IProps {
}

const FourOhFour: React.FC<IProps> = (props: IProps) => (
    <div>
        You're lost player. <Link to="/">Go back home.</Link>
    </div>
);

export default FourOhFour;