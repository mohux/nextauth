import {withAuthSync,logout} from '../util/auth';

const Index = () => {
    return <div>
        <h1>Welcome</h1>
        <button onClick={logout}>Logout</button>
    </div>
}

export default withAuthSync(Index);
