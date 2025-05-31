import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
    const USER = [{
        id: 'u1',
        name: 'Max Schwarz',
        image: 'https://tse1.mm.bing.net/th?id=OIP.n2PgfD5L-6a0pWo-wcbeVAHaEK&pid=Api&P=0&h=220',
        places: 3
    }];
    return <UsersList items= {USER} />;
};

export default Users;